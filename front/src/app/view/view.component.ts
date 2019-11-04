import { Unit } from '../unit/unit.model';
import { UnitService } from '../unit/unit.service';
import { Component, ViewChild, OnInit, AfterContentInit, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { Router } from '@angular/router';
import { Relation } from '../relation/relation.model';
import { RelationType } from '../relation/relation.type';
import { RelationService } from "../relation/relation.service";

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

  private data = [];
  private relations = new Map<string, Relation>();
  private relationIds = new Map<string, string>();

  private units: Map<string, Unit> = new Map<string, Unit>();
  private changedUnits: Map<string, Unit> = new Map<string, Unit>();

  private newUnitId = 0;
  private newRelationId = 0;

  private validChange = false;
  private showSpinner = false;

  private visited = new Set<number>();

  @ViewChild('uml') umlDiv;

  @ViewChild('umlNodeOptions') umlNodeOptions: ElementRef;
  private selectedTarget: HTMLInputElement;
  private showUmlNodeOptions = false;
  private showGoToUnit = true;

  private focusedUnit: Unit;



  constructor(private router: Router, private unitService: UnitService, private relationService: RelationService) {}

  ngOnInit() {
    window.document.body.style.overflow = 'hidden';
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.mode = 'code';
    this.initialize();
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

  private initialize() {
    this.unitService.getUnits().subscribe((units: Unit[]) => {
      units.forEach((unit: Unit) => {
        this.addUnit(unit);
        unit.incomingRelations.forEach((relation: Relation) => {
          this.addRelation(relation.id, relation);
        });
        unit.outgoingRelations.forEach((relation: Relation) => {
          this.addRelation(relation.id, relation);
        });
      });

      this.focusUnit(15);

    });
  }

  private addRelation(id: string, relation: Relation) {
    if (!this.relationIds.get(this.getRelationHash(relation))) {
      this.relations.set(id.toString(), relation);
      this.relationIds.set(this.getRelationHash(relation), id.toString());
    }
  }

  private addUnit(data: Unit) {
    this.units.set(data.id.toString(), {
      id: data.id.toString(),
      name: data.name,
      incomingRelations: data.incomingRelations,
      outgoingRelations: data.outgoingRelations
    });
  }



  // Data (json)

  private focusUnit(id: number) {
    this.emptyResults();
    this.showSpinner = true;
    this.focusedUnit = this.getUnitById(id.toString());
    this.setData(this.focusedUnit, false);
    this.updateJson(false);
    this.showSpinner = false;
  }

  private setData(data: Unit, changed: boolean) {
    this.data = [];
    this.relations = new Map();
    this.visited = new Set<number>();
    this.getIncomingRelations(data);
    this.getOutgoingRelations(data);
    this.updateJson(changed);
  }

  private getIncomingRelations(data: Unit) {
    this.visited.add(+data.id);
    data.incomingRelations.forEach((relation: any) => {
      const outgoing = relation.outgoing;
      let key = relation.id;
      if (!key) {
        key = this.getNewRelationId();
      }
      if (!this.relations.get(key)) {
        this.addRelation(key, relation);
        this.data.push(new VisibleRelation(relation.relationType, this.getAbsoluteName(this.getUnitById(relation.incoming)), this.getAbsoluteName(this.getUnitById(outgoing))));
      }
      if (!this.visited.has(+outgoing)) {
        this.getIncomingRelations(this.getUnitById(outgoing));
      }
    });
  }

  private getOutgoingRelations(data: any) {
    this.visited.add(+data.id);
    if (data.outgoingRelations.length < 0) {
      const relation = data.outgoingRelations[0];
      let key = relation.id;
      if (!key) {
        key = this.getNewRelationId();
      }
      this.data.push(new VisibleRelation(relation.relationType, this.getAbsoluteName(this.getUnitById(relation.incoming)), this.getAbsoluteName(this.getUnitById(relation.outgoing))));
      this.addRelation(key, relation);
      if (!this.visited.has(+relation.incoming)) {
        this.getOutgoingRelations(this.getUnitById(relation.incoming));
      }
    }
  }

  private getParent(unit: Unit): Unit {
    if (unit.outgoingRelations[0]) {
      return this.units.get(unit.outgoingRelations[0].incoming.toString());
    } else {
      return null;
    }
  }

  getAbsoluteName(unit: Unit): string {
    if (unit) {
      return this.getAbsoluteName(this.getParent(unit)) + this.UNIT_NAME_SEPARATOR + unit.name;
    } else {
      return '';
    }
  }

  private getRelationHash(relation: Relation): string {
    return relation.relationType + '-' + relation.incoming + '-' + relation.outgoing;
  }

  private getUnitById(id: string): Unit {
    id = id.toString();
    let unit = this.units.get(id);
    if (unit) {
      return unit;
    } else {
      unit = this.changedUnits.get(id);
      if (unit) {
        return unit;
      } else {
        return null;
      }
    }
  }

  private getUnitId(unitAbsoluteName: string): string {
    // TODO upload algorithm
    let id: string;
    let found = false;
    this.changedUnits.forEach((unit) => {
      if ((!found) && (this.getAbsoluteName(unit) === unitAbsoluteName)) {
        found = true;
        id = unit.id;
      }
    });
    if (!found) {
      this.units.forEach((unit) => {
        if ((!found) && (this.getAbsoluteName(unit) === unitAbsoluteName)) {
          found = true;
          id = unit.id;
        }
      });
    }
    return id;
  }

  private getNewUnitId() {
    return this.newUnitId++;
  }

  private getNewRelationId(): string {
    return '0' + this.newRelationId++;
  }

  private updateJson(changed: boolean) {
    const isValidJson = this.isValidJson();
    this.validChange = (changed && isValidJson);
    if (isValidJson) {
      this.updateUml();
    }
  }

  private isValidJson(): boolean {
    return ((this.validRelations()) && (this.editor.isValidJson()));
  }

  private validRelations(): boolean {
    let valid = true;
    this.data.forEach((relation: VisibleRelation) => {
      if ((valid) && (Object.values(RelationType).indexOf(relation.relationType) === -1)) {
        valid = false;
      }
    });
    return valid;
  }

  private save() {
    if (this.validChange) {
      this.showSpinner = true;
      if (this.changedUnits.size > 0) {
        this.saveUnitsAndRelations();
      } else {
        this.saveRelations();
      }
    }
  }

  private saveUnitsAndRelations() {
    let i = 0;
    this.changedUnits.forEach((unit: Unit) => {
      this.unitService.saveUnit(unit).subscribe((data: Unit) => {
        unit.id = data.id.toString();
        this.addUnit(unit);

        i++;
        if (i === this.changedUnits.size) {
          this.saveRelations();
        }
      }, error => {
        console.log(error);
      });
    });
  }

  private saveRelations() {

    const visibleUnits = new Map<number, Unit>();
    const newIncomingRelations = new Map<number, Relation[]>();
    const newOutgoingRelations = new Map<number, Relation[]>();

    let i = 0;
    this.data.forEach((visibleRelation: VisibleRelation) => {
      const relation: Relation = {
        id: null,
        relationType: visibleRelation.relationType,
        incoming: this.getUnitId(visibleRelation.incoming),
        outgoing: this.getUnitId(visibleRelation.outgoing)
      };
      const relationId = this.relationIds.get(this.getRelationHash(relation));
      if ((relationId) && (relationId.toString().substring(0, 1) !== '0')) {
        relation.id = relationId;
      } else {
        relation.id = '0';
      }

      this.relationService.saveRelation(relation).subscribe((data: Relation) => {

        const incoming = this.getUnitById(data.incoming);
        const outgoing = this.getUnitById(data.outgoing);
        const newIncomingRelation = newIncomingRelations.get(+incoming.id);
        if (!newIncomingRelation) {
          newIncomingRelations.set(+incoming.id, [data]);
        } else {
          newIncomingRelation.push(data);
        }
        const newOutgoingRelation = newOutgoingRelations.get(+outgoing.id);
        if (!newOutgoingRelation) {
          newOutgoingRelations.set(+outgoing.id, [data]);
        } else {
          newOutgoingRelation.push(data);
        }

        visibleUnits.set(+incoming.id, incoming);
        visibleUnits.set(+outgoing.id, outgoing);

        i++;
        if (i === this.data.length) {

          newIncomingRelations.forEach((relations: Relation[], key: number) => {
            const unit = visibleUnits.get(+key);
            unit.incomingRelations = relations;
          });
          newOutgoingRelations.forEach((relations: Relation[], key: number) => {
            const unit = visibleUnits.get(+key);
            unit.outgoingRelations = relations;
          });

          let j = 0;
          visibleUnits.forEach((unit: Unit) => {
            this.unitService.saveUnit(unit).subscribe((data: Unit) => {
              this.getUnitById(data.id.toString()).name = data.name;
              this.getUnitById(data.id.toString()).incomingRelations = data.incomingRelations;
              this.getUnitById(data.id.toString()).outgoingRelations = data.outgoingRelations;

              j++;
              if (j === visibleUnits.size) {
                this.changedUnits.clear();
                this.setData(this.focusedUnit, false);
                this.showSpinner = false;
                this.validChange = false;
              }

            }, error => {
              console.log(error);
            });
          });
        }
      }, error => {
        console.log(error);
      });
    });
  }



  // Data (uml)

  private updateUml() {
    const element: any = this.umlDiv.nativeElement;
    element.innerHTML = '';
    try {
      const uml = this.jsonToUml(this.data);
      mermaid.render('uml', uml, (svgCode, bindFunctions) => {
        element.innerHTML = svgCode;
        if (this.showUmlNodeOptions) {
          this.selectedTarget = this.findUnitTarget(this.selectedTarget.id.toString().substring(1, this.selectedTarget.id.length));
          this.drawUmlNodeOptions();
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  private updateUnitName() {
    const selectedUnit: Unit = this.getUnitById(this.selectedTarget.id.toString().substring(1, this.selectedTarget.id.length));
    selectedUnit.name = this.umlNodeOptions.nativeElement.firstChild.value;
    this.units.delete(selectedUnit.id);
    this.changedUnits.set(selectedUnit.id, selectedUnit);
    this.setData(this.focusedUnit, true);
    this.setShowUmlNodeOptions(false);
  }

  private createRelation(relationType): Unit {
    const selectedUnit: Unit = this.getUnitById(this.selectedTarget.id.toString().substring(1, this.selectedTarget.id.length));
    const newUnitName = 'Nueva unidad';
    const newUnit: Unit = {
      id: '0' + this.getNewUnitId(),
      name: newUnitName,
      incomingRelations: [],
      outgoingRelations: []
    };
    const newRelation = new VisibleRelation(relationType, this.selectedTarget.id.toString().substring(1, this.selectedTarget.id.length), newUnit.id.toString());
    newUnit.outgoingRelations.push(newRelation);
    this.changedUnits.set(newUnit.id.toString(), newUnit);
    selectedUnit.incomingRelations.push(newRelation);
    this.setData(this.focusedUnit, true);
    return newUnit;
  }

  private findUnitTarget(id: string): HTMLInputElement {
    let found = false;
    let target: HTMLInputElement = null;
    this.umlDiv.nativeElement.firstChild.childNodes.forEach((childNode) => {
      const firstChild = childNode.firstChild as HTMLInputElement;
      if ((!found) && (firstChild) && (firstChild.id) && (firstChild.id.toString().substring(1, firstChild.id.length) === id.toString())) {
        target = firstChild;
        found = true;
      }
    });
    return target;
  }

  private drawUmlNodeOptions() {
    this.showGoToUnit = (this.selectedTarget.id.toString().substring(1, 2) !== '0');
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
      this.focusUnit(+this.results[this.arrowKeyLocation].id);
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
      this.focusUnit(+this.results[this.arrowKeyLocation].id);
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

  private jsonToUml(json: any) {
    const relations = this.getRelationsDiagram(json);
    if (relations === '') {
      throw new Error('Invalid data. Unable to display uml');
    } else {
      return 'classDiagram\n' + relations;
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
      let incomingId = this.getUnitId(relation.incoming);
      if (incomingId === this.focusedUnit.id) { incomingId = 'f' + incomingId; } else { incomingId = 'd' + incomingId; }
      let outgoingId = this.getUnitId(relation.outgoing);
      if (outgoingId === this.focusedUnit.id) { outgoingId = 'f' + outgoingId; } else { outgoingId = 'd' + outgoingId; }
      uml += incomingId + relation.incoming + connector + outgoingId + relation.outgoing + '\n';
    });
    return uml;
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
