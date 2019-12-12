import { Unit } from '../unit/unit.model';
import { UnitService } from '../unit/unit.service';
import { Component, ViewChild, OnInit, AfterContentInit, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { Router } from '@angular/router';
import { Relation } from '../relation/relation.model';
import { RelationType } from '../relation/relation.type';
import { TdDialogService } from '@covalent/core';
import {TabService} from '../tab/tab.service';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmActionComponent} from '../confirmAction/confirm-action.component';

declare var mermaid: any;

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit, AfterContentInit, OnDestroy {

  confirmText = 'Se han realizado cambios';
  button1 = 'Guardar';
  button2 = 'Descartar';

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

  private focusedUnitId;
  private units: Map<string, Unit> = new Map<string, Unit>();
  private relations = new Map<string, Relation>();
  private remainingUnits = 0;

  private showMenu = true;
  private disableUpButton = false;

  private newUnitId = 0;
  private newRelationId = 0;

  private changed = false;
  private showSpinner = false;

  @ViewChild('uml') umlDiv;

  private selectedTarget: HTMLInputElement;
  @ViewChild('umlNodeOptions') umlNodeOptions: ElementRef;
  private showUmlNodeOptions = false;
  @ViewChild('umlPathOptions') umlPathOptions: ElementRef;
  private showUmlPathOptions = false;
  private selectedRelationType = '';
  @ViewChild('umlNewPath') umlNewPath: ElementRef;
  private creatingRelation = null;


  constructor(private router: Router, private unitService: UnitService, private dialogService: TdDialogService,
              private tabService: TabService, public dialog: MatDialog) {}

  ngOnInit() {
    this.tabService.setUnits();
    window.document.body.style.overflow = 'hidden';
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.mode = 'code';
    this.focusUnit(1);
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

  private focusUnit(id: number) {
    this.showSpinner = true;
    this.focusedUnitId = id;
    this.units.clear();
    this.relations.clear();
    this.remainingUnits = 0;
    this.getUnitAndUpdateUml(this.focusedUnitId, new Set<number>());
    this.unitService.getParent(id).subscribe((parent: Unit) => {
      this.disableUpButton = (parent === null);
    });
  }

  private getUnitAndUpdateUml(id: number, visited: Set<number>) {
    this.remainingUnits--;
    visited.add(id);
    this.unitService.getUnit(id).subscribe((data: Unit) => {
      this.addUnit(data);
      this.remainingUnits += data.incomingRelations.length + 1;
      data.incomingRelations.forEach((relation: Relation) => {
        this.remainingUnits--;
        if (!this.getRelationById(relation.id.toString())) {
          const outgoing = +relation.outgoing;
          if (!visited.has(outgoing)) {
            this.getUnitAndUpdateUml(outgoing, visited);
          }
          this.addRelation(relation);
        }
      });

      if (this.remainingUnits === 0) {
        this.updateUml();
        this.emptyResults();
        this.showSpinner = false;




        let i = 0;
        this.units.forEach((unit: Unit) => {
          this.unitService.getAbsoluteName(+unit.id).subscribe((u: Unit) => {
            this.data.units.push(new VisibleUnit(unit.id, u.name));
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

  private upLevelAbove() {
    this.unitService.getParent(this.focusedUnitId).subscribe((parent: Unit) => {
      this.focusUnit(+parent.id);
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

  private save(goToUnit) {
    if (this.changed) {
      this.changed = false;
      this.showSpinner = true;

      const unitsToCreate: Unit[] = [];
      this.units.forEach((unit: Unit) => {
        if (unit.id.toString().substring(0, 1) === '0') {
          unitsToCreate.push(unit);
        }
      });

      let i = 0;
      unitsToCreate.forEach((unit: Unit) => {
        const unitToCreate = {
          id: '0',
          name: unit.name,
          outgoingRelations: [],
          incomingRelations: [],
          itineraries: [],
          definitionQuestions: [],
          listQuestions: [],
          testQuestions: []
        };
        this.unitService.createUnit(unitToCreate).subscribe((data: Unit) => {
          unit.id = data.id;
          unit.name = data.name;
          unit.incomingRelations.forEach((relation: Relation) => {
            relation.incoming = data.id.toString();
          });
          unit.outgoingRelations.forEach((relation: Relation) => {
            relation.outgoing = data.id.toString();
          });

          i++;
          if (i === unitsToCreate.length) {
            this.saveUnitsAndRelations(goToUnit);
          }
        }, error => {
          console.log(error);
        });
      });
      if (unitsToCreate.length === 0) {
        this.saveUnitsAndRelations(goToUnit);
      }
    }
  }

  private saveUnitsAndRelations(goToUnit) {
    const unitsToSave: Unit[] = [];
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
      unitToSave.incomingRelations.forEach((relation: Relation) => {
        if (relation.id.toString().substring(0, 1) === '0') {
          relation.id = '0';
        }
      });
      unitToSave.outgoingRelations.forEach((relation: Relation) => {
        if (relation.id.toString().substring(0, 1) === '0') {
          relation.id = '0';
        }
      });
      unitsToSave.push(unitToSave);
    });
    this.unitService.saveUnits(unitsToSave).subscribe(() => {
      this.focusUnit(this.focusedUnitId);
      if (goToUnit) {
        this.goToUnit(goToUnit);
      }
    }, error => {
      console.log(error);
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
        this.updateUmlNodeOptions();
      });
    } catch (error) {}
  }

  private updateUnitName() {
    const selectedUnit: Unit = this.getUnitById(this.selectedTarget.id.toString().substring(0, this.selectedTarget.id.length));
    this.changed = ((this.changed) || (selectedUnit.name !== this.umlNodeOptions.nativeElement.firstChild.value));
    selectedUnit.name = this.umlNodeOptions.nativeElement.firstChild.value;
    this.setShowUmlNodeOptions(false);
    this.setShowUmlPathOptions(false);
    this.updateUml();
  }

  private createUnit(relationType): Unit {
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

  private createRelation(relationType, incoming: Unit, outgoing: Unit) {
    const newRelation: Relation = {
      id: this.getNewRelationId().toString(),
      relationType,
      incoming: incoming.id,
      outgoing: outgoing.id
    };
    const duplicateIncoming = this.checkDuplicateRelation(incoming, newRelation);
    const duplicateOutgoing = this.checkDuplicateRelation(outgoing, newRelation);
    if (!(duplicateIncoming && duplicateOutgoing)) {
      if (!duplicateIncoming) {
        incoming.incomingRelations.push(newRelation);
      }
      if (!duplicateOutgoing) {
        outgoing.outgoingRelations.push(newRelation);
      }
      this.addRelation(newRelation);
    }
    this.updateUml();
    this.changed = true;
  }

  private checkDuplicateRelation(unit: Unit, relation: Relation): boolean {
    let duplicate = false;
    unit.incomingRelations.forEach((incomingRelation: Relation) => {
      if ((!duplicate) && (incomingRelation.incoming.toString() === relation.incoming.toString()) && (incomingRelation.outgoing.toString() === relation.outgoing.toString())) {
        incomingRelation.relationType = relation.relationType;
        duplicate = true;
      }
    });
    unit.outgoingRelations.forEach((outgoingRelation: Relation) => {
      if ((!duplicate) && (outgoingRelation.incoming.toString() === relation.incoming.toString()) && (outgoingRelation.outgoing.toString() === relation.outgoing.toString())) {
        outgoingRelation.relationType = relation.relationType;
        duplicate = true;
      }
    });
    return duplicate;
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
    const input = this.umlNodeOptions.nativeElement.firstChild;
    const padding = '0.5rem';
    input.style.left = 'calc(' + (this.selectedTarget.getBoundingClientRect().left + window.pageXOffset) + 'px + ' + padding + ')';
    input.style.width = 'calc(' + (this.selectedTarget.getBoundingClientRect().width) + 'px - ' + padding + ' - ' + padding + ')';
    input.style.top = (this.selectedTarget.getBoundingClientRect().top + window.pageYOffset) + 'px';
    input.style.height = (this.selectedTarget.getBoundingClientRect().height) + 'px';
    const text = (this.selectedTarget.nextSibling as HTMLInputElement);
    if (text.innerHTML) { input.value = text.innerHTML; }
    text.innerHTML = '';
    input.focus();
    input.setSelectionRange(0, input.value.length);
    const optionsStyle = this.umlNodeOptions.nativeElement.lastChild.style;
    optionsStyle.left = (this.selectedTarget.getBoundingClientRect().right + window.pageXOffset) + 'px';
    optionsStyle.top = (this.selectedTarget.getBoundingClientRect().top + window.pageYOffset) + 'px';
  }

  private updateUmlNodeOptions() {
    if (this.showUmlNodeOptions) {
      this.drawUmlNodeOptions();
    } else {
      this.umlNodeOptions.nativeElement.firstChild.style.top = '120%';
      this.umlNodeOptions.nativeElement.lastChild.style.top = '120%';
    }
  }

  private setShowUmlNodeOptions(showUmlNodeOptions: boolean) {
    this.showUmlNodeOptions = showUmlNodeOptions;
  }

  private drawUmlPathOptions() {
    let relationType;
    if (this.selectedTarget.attributes[3]) { relationType = this.selectedTarget.attributes[3].nodeValue; }
    this.selectedRelationType = this.getRelationTypeEquivalent(relationType);
    const optionsStyle = this.umlPathOptions.nativeElement.firstChild.style;
    optionsStyle.left = (this.selectedTarget.getBoundingClientRect().right + window.pageXOffset) + 'px';
    optionsStyle.top = (this.selectedTarget.getBoundingClientRect().top + window.pageYOffset) + 'px';
  }

  private setShowUmlPathOptions(showUmlNodeOptions: boolean) {
    this.showUmlPathOptions = showUmlNodeOptions;
  }

  private changeRelationType(id: string, newRelationType: string) {
    const splittedRelation: string[] = id.split('-');
    const incoming = splittedRelation[0];
    const outgoing = splittedRelation[1];
    const relationType = this.getRelationTypeEquivalent(splittedRelation[2]);
    this.units.get(incoming).incomingRelations.forEach((relation: Relation) => {
      if ((relation.outgoing.toString() === outgoing) && (relation.relationType === relationType)) {
        relation.relationType = newRelationType;
      }
    });
    this.units.get(outgoing).outgoingRelations.forEach((relation: Relation) => {
      if ((relation.incoming.toString() === incoming) && (relation.relationType === relationType)) {
        relation.relationType = newRelationType;
      }
    });
    this.setShowUmlPathOptions(false);
    this.updateUml();
    this.changed = true;
  }

  private getRelationTypeEquivalent(relationType: string): string {
    let equivalent = RelationType.USE;
    if (relationType) {
      if (relationType.includes('composition')) {
        equivalent = RelationType.COMPOSITION;
      } else if (relationType.includes('extension')) {
        equivalent = RelationType.INHERITANCE;
      } else if (relationType.includes('aggregation')) {
        equivalent = RelationType.AGGREGATION;
      } else if (relationType.includes('dependency')) {
        equivalent = RelationType.ASSOCIATION;
      }
    }
    return equivalent;
  }



  // Key event listener

  @HostListener('window:keydown', ['$event'])
  onKeyPress($event: KeyboardEvent) {
    if (($event.metaKey || $event.ctrlKey) && ($event.key === 's')) {
      $event.preventDefault();
      this.save(null);
    }
  }



  // Mouse event listener

  @HostListener('document:click', ['$event'])
  public documentClick(event: Event): void {
    const target = event.target as HTMLInputElement;

    if (!this.creatingRelation) {

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
      if ((target.id === 'composition-incoming-button') || (target.parentElement.id === 'composition-incoming-button')) {
        this.selectedTarget = this.findUnitTarget(this.createUnit(RelationType.COMPOSITION).id);
        this.drawUmlNodeOptions();
      } else if ((target.id === 'inheritance-incoming-button') || (target.parentElement.id === 'inheritance-incoming-button')) {
        this.selectedTarget = this.findUnitTarget(this.createUnit(RelationType.INHERITANCE).id);
        this.drawUmlNodeOptions();
      } else if ((target.id === 'aggregation-incoming-button') || (target.parentElement.id === 'aggregation-incoming-button')) {
        this.selectedTarget = this.findUnitTarget(this.createUnit(RelationType.AGGREGATION).id);
        this.drawUmlNodeOptions();
      } else if ((target.id === 'association-incoming-button') || (target.parentElement.id === 'association-incoming-button')) {
        this.selectedTarget = this.findUnitTarget(this.createUnit(RelationType.ASSOCIATION).id);
        this.drawUmlNodeOptions();
      } else if ((target.id === 'use-incoming-button') || (target.parentElement.id === 'use-incoming-button')) {
        this.selectedTarget = this.findUnitTarget(this.createUnit(RelationType.USE).id);
        this.drawUmlNodeOptions();
      } else if ((target.id === 'composition-outgoing-button') || (target.parentElement.id === 'composition-outgoing-button')) {
        this.creatingRelation = {
          relationType: RelationType.COMPOSITION,
          outgoing: this.selectedTarget.id.toString(),
          boundingClientRect: this.selectedTarget.getBoundingClientRect()
        };
        this.closeUmlNodeOptions();
      } else if ((target.id === 'inheritance-outgoing-button') || (target.parentElement.id === 'inheritance-outgoing-button')) {
        this.creatingRelation = {
          relationType: RelationType.INHERITANCE,
          outgoing: this.selectedTarget.id.toString(),
          boundingClientRect: this.selectedTarget.getBoundingClientRect()
        };
        this.closeUmlNodeOptions();
      } else if ((target.id === 'aggregation-outgoing-button') || (target.parentElement.id === 'aggregation-outgoing-button')) {
        this.creatingRelation = {
          relationType: RelationType.AGGREGATION,
          outgoing: this.selectedTarget.id.toString(),
          boundingClientRect: this.selectedTarget.getBoundingClientRect()
        };
        this.closeUmlNodeOptions();
      } else if ((target.id === 'association-outgoing-button') || (target.parentElement.id === 'association-outgoing-button')) {
        this.creatingRelation = {
          relationType: RelationType.ASSOCIATION,
          outgoing: this.selectedTarget.id.toString(),
          boundingClientRect: this.selectedTarget.getBoundingClientRect()
        };
        this.closeUmlNodeOptions();
      } else if ((target.id === 'use-outgoing-button') || (target.parentElement.id === 'use-outgoing-button')) {
        this.creatingRelation = {
          relationType: RelationType.USE,
          outgoing: this.selectedTarget.id.toString(),
          boundingClientRect: this.selectedTarget.getBoundingClientRect()
        };
        this.closeUmlNodeOptions();
      } else if ((target.id === 'composition-relation-button') || (target.parentElement.id === 'composition-relation-button')) {
        this.changeRelationType(this.selectedTarget.id.toString(), RelationType.COMPOSITION);
      } else if ((target.id === 'inheritance-relation-button') || (target.parentElement.id === 'inheritance-relation-button')) {
        this.changeRelationType(this.selectedTarget.id.toString(), RelationType.INHERITANCE);
      } else if ((target.id === 'aggregation-relation-button') || (target.parentElement.id === 'aggregation-relation-button')) {
        this.changeRelationType(this.selectedTarget.id.toString(), RelationType.AGGREGATION);
      } else if ((target.id === 'association-relation-button') || (target.parentElement.id === 'association-relation-button')) {
        this.changeRelationType(this.selectedTarget.id.toString(), RelationType.ASSOCIATION);
      } else if ((target.id === 'use-relation-button') || (target.parentElement.id === 'use-relation-button')) {
        this.changeRelationType(this.selectedTarget.id.toString(), RelationType.USE);
      } else if ((target.id !== 'uml-edit-input') && (target.id !== 'uml-node-options')) {
        this.closeUmlNodeOptions();
      }
    } else {
      if ((target.tagName === 'rect') || (target.tagName === 'text')) {
        this.createRelation(this.creatingRelation.relationType, this.getUnitById(target.id.toString().substring(0, target.id.toString().length)), this.getUnitById(this.creatingRelation.outgoing));
      }
      this.creatingRelation = null;
      this.umlNewPath.nativeElement.setAttribute('d','');
    }
  }

  @HostListener('document:dblclick', ['$event'])
  public documentDoubleClick(event: Event): void {
    this.creatingRelation = null;
    const target = event.target as HTMLInputElement;
    if ((!this.showUmlNodeOptions) && ((target.tagName === 'rect') || (target.tagName === 'text'))) {
      const id = target.id.toString().substring(0, target.id.toString().length);
      if (this.changed) {
        const dialogRef = this.dialog.open(ConfirmActionComponent, {
          data: {confirmText: this.confirmText, button1: this.button1, button2: this.button2}
        });

        dialogRef.afterClosed().subscribe(result => {
          if (result === 1) {
            this.goToUnit(id);
          } else if (result === 2) {
            this.save(id);
          }
        });
      } else {
        this.goToUnit(id);
      }
    }
  }

  @HostListener('document:contextmenu', ['$event'])
  public documentRightClick(event: Event): void {
    event.preventDefault();
    this.creatingRelation = null;
    const target = event.target as HTMLInputElement;
    if ((!this.showUmlNodeOptions) && ((target.tagName === 'rect') || (target.tagName === 'text') || (target.tagName === 'path'))) {
      this.selectedTarget = target;
      if (target.tagName === 'path') {
        this.setShowUmlPathOptions(true);
        this.drawUmlPathOptions();
      } else {
        this.setShowUmlPathOptions(false);
        if (target.tagName === 'text') {
          this.selectedTarget = target.previousElementSibling as HTMLInputElement;
        }
        this.setShowUmlNodeOptions(true);
        this.drawUmlNodeOptions();
      }
    } else if ((target.id !== 'uml-edit-input') && (target.id !== 'uml-node-options')) {
      this.closeUmlNodeOptions();
    }
  }

  private closeUmlNodeOptions() {
    if (this.showUmlNodeOptions) {
      this.updateUnitName();
    }
    this.setShowUmlNodeOptions(false);
    this.setShowUmlPathOptions(false);
    this.updateUmlNodeOptions();
  }

  @HostListener('document:mousemove', ['$event'])
  private onMouseMove(event: MouseEvent) {
    if (this.creatingRelation) {
      this.umlNewPath.nativeElement.setAttribute('d',
        'M' + (this.creatingRelation.boundingClientRect.right + window.pageXOffset - (this.creatingRelation.boundingClientRect.width / 2)) +
        ' ' + (this.creatingRelation.boundingClientRect.top + window.pageYOffset + (this.creatingRelation.boundingClientRect.height / 2)) +
        ' L' + (this.creatingRelation.boundingClientRect.right + window.pageXOffset + 1 - (this.creatingRelation.boundingClientRect.width / 2)) +
        ' ' + (this.creatingRelation.boundingClientRect.top + window.pageYOffset + 1 + (this.creatingRelation.boundingClientRect.height / 2)) +
        ' L' + (event.clientX + 1) + ' ' + (event.clientY + 1) +
        ' L' + event.clientX + ' ' + event.clientY);
    } else {
      this.umlNewPath.nativeElement.setAttribute('d','');
    }
  }




  // Menu

  private setShowMenu(showMenu: boolean) {
    this.showMenu = showMenu;
  }



  // Search

  private search() {
    if (this.searchField.length > 0) {
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
    this.router.navigate(['/unit/' + id]);
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
