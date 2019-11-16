import { Unit } from '../unit/unit.model';
import { UnitService } from '../unit/unit.service';
import { Component, ViewChild, OnInit, AfterContentInit, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { Router } from '@angular/router';
import { Relation } from '../relation/relation.model';
import { RelationType } from '../relation/relation.type';

declare var mermaid: any;

@Component({
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit, AfterContentInit, OnDestroy {

  private UNIT_NAME_SEPARATOR = '/';
  private ENTER_KEY = 'Enter';
  private ARROW_UP_KEY = 'ArrowUp';
  private ARROW_DOWN_KEY = 'ArrowDown';

  private searchField = '';
  private showResults = false;
  private results: Unit[] = [];
  private arrowKeyLocation = 0;

  @ViewChild(JsonEditorComponent, null) editor: JsonEditorComponent;
  private editorOptions: JsonEditorOptions;
  private data = {
    units: [],
    relations: []
  };

  private units: Map<string, Unit> = new Map<string, Unit>();
  private relations = new Map<string, Relation>();
  private loadingUnits = 0;

  private newUnitId = 0;
  private newRelationId = 0;

  private changed = false;
  private showSpinner = false;

  @ViewChild('uml') umlDiv;

  @ViewChild('umlNodeOptions') umlNodeOptions: ElementRef;
  private selectedTarget: HTMLInputElement;
  private showUmlNodeOptions = false;
  private showGoToUnit = true;



  constructor(private router: Router, private unitService: UnitService) {}

  ngOnInit() {
    window.document.body.style.overflow = 'hidden';
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.mode = 'code';
    this.getUnit(15);
  }

  ngAfterContentInit() {
    mermaid.initialize({
      theme: 'default',
      logLevel: 3,
      flowchart: { curve: 'basis' },
      gantt: { axisFormat: '%m/%d/%Y' },
      sequence: { actorMargin: 50 },
    });
  }

  ngOnDestroy() {
    window.document.body.style.overflow = 'auto';
  }



  // Data

  private getUnit(id: number) {
    this.showSpinner = true;
    this.units.clear();
    this.relations.clear();
    this.loadingUnits = 0;
    this.getUnitAndUpdateUml(id);
  }

  private getUnitAndUpdateUml(id: number) {
    this.loadingUnits--;
    this.unitService.getUnit(id).subscribe((data: Unit) => {
      this.addUnit(data);
      this.loadingUnits += data.incomingRelations.length + 1;
      data.incomingRelations.forEach((relation: Relation) => {
        this.loadingUnits--;
        const id = relation.id.toString();
        if (!this.getRelationById(id)) {
          const outgoing = relation.outgoing.toString();
          if (!this.getUnitById(outgoing)) {
            this.getUnitAndUpdateUml(+outgoing);
          }
          this.addRelation(relation);
        }
      });
      /*data.outgoingRelations.forEach((relation: Relation) => {
        const incoming = relation.incoming.toString();
        const id = relation.id.toString();
        if (!this.getRelationById(id)) {
          if (!this.getUnitById(incoming)) {
            this.getUnitAndUpdateUml(+incoming);
          }
          this.addRelation(relation);
        }
      });*/
      if (this.loadingUnits === 0) {
        this.updateUml();
        this.emptyResults();
        this.showSpinner = false;

        let i = 0;
        this.units.forEach((unit: Unit) => {
          this.unitService.getAbsoluteName(+unit.id).subscribe((u: Unit) => {
            this.data.units.push(new VisibleUnit(data.id, u.name));

            i++;
            if (i === this.units.size) {
              this.relations.forEach((relation: Relation) => {
                this.data.relations.push(new VisibleRelation(relation.relationType, relation.incoming, relation.outgoing));
              });
              this.editor.data = this.data;
            }

          }, error => {
            console.log(error);
          });
        });

      }
    }, error => {
      console.log(error);
    });
  }

  private addUnit(unit: Unit) {
    this.units.set(unit.id.toString(), unit);
  }

  private getUnitById(id: string): Unit {
    return this.units.get(id);
  }

  private addRelation(relation: Relation) {
    this.relations.set(relation.id.toString(), relation);
  }

  private getRelationById(id: string): Relation {
    return this.relations.get(id);
  }

  private getNewUnitId() {
    return '0' + this.newUnitId++;
  }

  private getNewRelationId(): string {
    return '0' + this.newRelationId++;
  }

  private save() {
    if (this.changed) {
      this.changed = false;
      this.showSpinner = true;
      this.saveAll();
    }
  }

  private saveAll() {
    let i = 0;
    let createdUnits = 0;
    this.units.forEach((unit: Unit) => {
      i++;

      if (unit.id.toString().substring(0, 1) === '0') {
        createdUnits++;
        const unitToSave = {
          id: unit.id,
          name: unit.name,
          outgoingRelations: unit.outgoingRelations,
          incomingRelations: unit.incomingRelations,
          itineraries: [],
          definitionQuestions: [],
          listQuestions: [],
          testQuestions: []
        };
        unitToSave.id = '0';
        this.unitService.createUnit(unitToSave).subscribe((data: Unit) => {

          unit.id = data.id;
          unit.name = data.name;
          unit.incomingRelations.forEach((relation: Relation) => {
            relation.incoming = data.id.toString();
          });
          unit.outgoingRelations.forEach((relation: Relation) => {
            relation.outgoing = data.id.toString();
          });

          if (i === this.units.size) {
            this.saveUnitsAndRelations();
          }
        }, error => {
          console.log(error);
        });
      }
    });
    if (createdUnits === 0) {
      this.saveUnitsAndRelations();
    }
  }

  private saveUnitsAndRelations() {
    let i = 0;
    this.units.forEach((unit: Unit) => {
      const unitToSave = {
        id: unit.id,
        name: unit.name,
        outgoingRelations: unit.outgoingRelations,
        incomingRelations: unit.incomingRelations,
        itineraries: [],
        definitionQuestions: [],
        listQuestions: [],
        testQuestions: []
      };
      this.unitService.saveUnit(unitToSave).subscribe(() => {
        i++;
        if (i === this.units.size) {
          this.getUnit(15);
          this.updateUml();
        }
      }, error => {
        console.log(error);
      });
    });
  }



  // Uml

  private updateUml() {
    const element: any = this.umlDiv.nativeElement;
    element.innerHTML = '';
    try {
      const uml = this.parseUml(this.relations);
      mermaid.render('uml', uml, (svgCode, bindFunctions) => {
        element.innerHTML = svgCode;
        if (this.showUmlNodeOptions) {
          this.selectedTarget = this.findUnitTarget(this.selectedTarget.id.toString().substring(0, this.selectedTarget.id.length));
          this.drawUmlNodeOptions();
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  private updateUnitName() {
    const selectedUnit: Unit = this.getUnitById(this.selectedTarget.id.toString().substring(0, this.selectedTarget.id.length));
    selectedUnit.name = this.umlNodeOptions.nativeElement.firstChild.value;
    this.updateUml();
    this.setShowUmlNodeOptions(false);
    this.changed = true;
  }

  private createRelation(relationType): Unit {
    const selectedUnit: Unit = this.getUnitById(this.selectedTarget.id.toString().substring(0, this.selectedTarget.id.length));
    const newUnitName = 'Nueva unidad';
    const newUnit: Unit = {
      id: this.getNewUnitId().toString(),
      name: newUnitName,
      incomingRelations: [],
      outgoingRelations: []
    };
    const newRelation: Relation = {
      id: this.getNewRelationId().toString(),
      relationType,
      incoming: this.selectedTarget.id.toString().substring(0, this.selectedTarget.id.length),
      outgoing: newUnit.id.toString()
    };
    newUnit.outgoingRelations.push(newRelation);
    this.addUnit(newUnit);
    selectedUnit.incomingRelations.push(newRelation);
    this.addRelation(newRelation);
    this.updateUml();
    this.changed = true;
    return newUnit;
  }

  private findUnitTarget(id: string): HTMLInputElement {
    let found = false;
    let target: HTMLInputElement = null;
    this.umlDiv.nativeElement.firstChild.childNodes.forEach((childNode) => {
      const firstChild = childNode.firstChild as HTMLInputElement;
      if ((!found) && (firstChild) && (firstChild.id) && (firstChild.id.toString().substring(0, firstChild.id.length) === id.toString())) {
        target = firstChild;
        found = true;
      }
    });
    return target;
  }

  private drawUmlNodeOptions() {
    this.showGoToUnit = (this.selectedTarget.id.toString().substring(0, 1) !== '0');
    const input = this.umlNodeOptions.nativeElement.firstChild;
    input.style.left = (this.selectedTarget.getBoundingClientRect().left + window.pageXOffset) + 'px';
    input.style.top = (this.selectedTarget.getBoundingClientRect().top + window.pageYOffset) + 'px';
    input.style.width = (this.selectedTarget.getBoundingClientRect().width) + 'px';
    input.style.height = (this.selectedTarget.getBoundingClientRect().height) + 'px';
    input.value = (this.selectedTarget.nextSibling as HTMLInputElement).innerHTML;
    input.setSelectionRange(0, input.value.length);
    const optionsStyle = this.umlNodeOptions.nativeElement.lastChild.style;
    optionsStyle.left = (this.selectedTarget.getBoundingClientRect().right + window.pageXOffset) + 'px';
    optionsStyle.top = (this.selectedTarget.getBoundingClientRect().top + window.pageYOffset) + 'px';
  }

  private setShowUmlNodeOptions(showUmlNodeOptions: boolean) {
    this.showUmlNodeOptions = showUmlNodeOptions;
  }



  // Key event listener

  @HostListener('window:keydown', ['$event'])
  onKeyPress($event: KeyboardEvent) {
    if (($event.metaKey || $event.ctrlKey) && ($event.key == 's')) {
      $event.preventDefault();
      this.save();
    }
  }



  // Mouse event listener

  @HostListener('document:click', ['$event'])
  public documentClick(event: Event): void {
    const target = event.target as HTMLInputElement;

    // Search
    if ((target.id === 'result') || (target.id === 'unit-prefix') || (target.id === 'unit-name')) {
      this.getUnit(+this.results[this.arrowKeyLocation].id);
    } else if ((target.attributes) && (target.attributes['class']) &&
      ((target.attributes['class'].nodeValue === 'mat-form-field-flex') ||
        (target.attributes['class'].nodeValue.includes('mat-form-field-outline')) ||
        (target.attributes['class'].nodeValue === 'mat-form-field-infix') || (target.id === 'search-input'))) {
      this.setShowResults(true);
    } else {
      this.setShowResults(false);
    }

    // Uml
    if ((target.tagName === 'rect') || (target.tagName === 'text')) {
      this.selectedTarget = target;
      if (target.tagName === 'text') {
        this.selectedTarget = target.previousElementSibling as HTMLInputElement;
      }
      this.setShowUmlNodeOptions(true);
      this.drawUmlNodeOptions();
    } else if (target.tagName === 'path') {

    } else if (target.id === 'association-incoming-button') {
      this.selectedTarget = this.findUnitTarget(this.createRelation(RelationType.ASSOCIATION).id);
      this.drawUmlNodeOptions();
    } else if (target.id === 'aggregation-incoming-button') {
      this.selectedTarget = this.findUnitTarget(this.createRelation(RelationType.AGGREGATION).id);
      this.drawUmlNodeOptions();
    } else if (target.id === 'composition-incoming-button') {
      this.selectedTarget = this.findUnitTarget(this.createRelation(RelationType.COMPOSITION).id);
      this.drawUmlNodeOptions();
    } else if (target.id === 'inheritance-incoming-button') {
      this.selectedTarget = this.findUnitTarget(this.createRelation(RelationType.INHERITANCE).id);
      this.drawUmlNodeOptions();
    } else if (target.id === 'use-incoming-button') {
      this.selectedTarget = this.findUnitTarget(this.createRelation(RelationType.USE).id);
      this.drawUmlNodeOptions();
    } else if (target.id === 'association-outgoing-button') {

    } else if (target.id === 'aggregation-outgoing-button') {

    } else if (target.id === 'composition-outgoing-button') {

    } else if (target.id === 'inheritance-outgoing-button') {

    } else if (target.id === 'use-outgoing-button') {

    } else if ((target.id !== 'uml-edit-input') && (target.id !== 'uml-node-options')) {
      this.setShowUmlNodeOptions(false);
    }
  }



  // Search

  private search() {
    if (this.validSearchField()) {
      this.unitService.searchByNameContaining(this.searchField).subscribe((data: any) => {
        this.results = data;
        this.arrowKeyLocation = 0;
      }, error => {
        console.log(error);
      });
    } else {
      this.emptyResults();
    }
  }

  private validSearchField() {
    const invalidChars = ['?', '/', '\\', '[', ']', ';', '#'];
    for (const ch of invalidChars) {
      if (this.searchField.includes(ch)) {
        return false;
      }
    }
    const invalidCharsToSearchAlone = [' ', '.', '%'];
    for (const ch of invalidCharsToSearchAlone) {
      if (this.searchField.split(ch).length === (this.searchField.length + 1)) {
        return false;
      }
    }
    return true;
  }

  private setShowResults(showResults: boolean) {
    if (showResults) {
      this.search();
    } else {
      this.emptyResults();
    }
    this.showResults = showResults;
  }

  private emptyResults() {
    this.results = [];
  }

  private keyDown(event: KeyboardEvent) {
    if ((event.key === this.ENTER_KEY) && (this.results.length > 0)) {
      this.getUnit(+this.results[this.arrowKeyLocation].id);
    } else if ((event.key === this.ARROW_UP_KEY) && (this.arrowKeyLocation > 0)) {
      this.arrowKeyLocation--;
    } else if ((event.key === this.ARROW_DOWN_KEY) && (this.arrowKeyLocation < (this.results.length - 1))) {
      this.arrowKeyLocation++;
    }
  }

  private setActive(i: number) {
    this.arrowKeyLocation = i;
  }

  private getUnitPrefix(completeName: string) {
    const nameLength = completeName.split(this.UNIT_NAME_SEPARATOR)[completeName.split(this.UNIT_NAME_SEPARATOR).length - 1].length;
    return completeName.substring(0, completeName.length - nameLength);
  }

  private getUnitName(completeName: string) {
    return completeName.split(this.UNIT_NAME_SEPARATOR)[completeName.split(this.UNIT_NAME_SEPARATOR).length - 1];
  }



  // Routing

  private goToUnit(id) {
    this.router.navigate(['/units/' + id + '/cards']);
  }



  // Uml parser

  private parseUml(relations: any) {
    const parsedRelations = this.getRelationsDiagram(relations);
    if (parsedRelations === '') {
      throw new Error('Invalid data. Unable to display uml');
    } else {
      return 'classDiagram\n' + parsedRelations;
    }
  }

  private getRelationsDiagram(relations: any): string {
    let uml = '';
    let connector = '';
    relations.forEach((relation: any) => {
      switch (relation.relationType) {
        case RelationType.ASSOCIATION: { connector = '<--'; break; }
        case RelationType.AGGREGATION: { connector = '"1"o--"many"'; break; }
        case RelationType.COMPOSITION: { connector = '"0"*--"0..n"'; break; }
        case RelationType.INHERITANCE: { connector = '<|--'; break; }
        case RelationType.USE: { connector = '--'; break; }
        default: { throw new Error('Unrecognized uml relation type'); }
      }
      uml += this.parseUnitName(relation.incoming.toString()) + connector + this.parseUnitName(relation.outgoing.toString()) + '\n';
    });
    return uml;
  }

  private parseUnitName(id: string): string {
    let name = id;
    const unit = this.getUnitById(id);
    if (unit) {
      name += unit.name;
    }
    return name;
  }

}

class VisibleUnit implements Unit {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

class VisibleRelation implements Relation {
  relationType: string;
  incoming: string;
  outgoing: string;

  constructor(relationType: string, incoming: string, outgoing: string) {
    this.relationType = relationType;
    this.incoming = incoming;
    this.outgoing = outgoing;
  }
}
