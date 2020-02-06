import { Unit } from '../unit/unit.model';
import { UnitService } from '../unit/unit.service';
import { Component, ViewChild, OnInit, AfterContentInit, ElementRef, HostListener, OnDestroy } from '@angular/core';
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

  private UNIT_NAME_SEPARATOR = '/';

  private searchField = '';
  private results: Unit[] = [];

  private parentLevel = 1;
  private childrenLevel = 3;
  private selectLevelOptions = [0, 1, 2, 3, -1];

  private focusedUnits: Map<string, Unit> = new Map<string, Unit>();
  private units: Map<string, Unit> = new Map<string, Unit>();
  private relations = new Map<string, Relation>();
  private remainingUnits = 0;
  private remainingFocusedUnits = 0;

  private showMenu = true;

  private newUnitId = 0;
  private newRelationId = 0;

  private changed = false;
  private showSpinner = false;

  private showDiagram = false;
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
    window.scroll(0, 0);
    window.document.body.style.overflow = 'hidden';
    this.focusUnit();
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

  private focusUnit() {
    this.units.clear();
    this.relations.clear();
    if (this.focusedUnits.size === 0) {
      this.showDiagram = false;
    } else {
      this.showSpinner = true;
      this.remainingUnits = 0;
      this.remainingFocusedUnits = this.focusedUnits.size;
      Array.from(this.focusedUnits.keys()).forEach((id) => {
        this.remainingFocusedUnits--;
        if (this.isNewId(id.toString())) {
          this.addUnit(this.focusedUnits.get(id));
        } else {
          this.getUnitAndUpdateUml(+id, new Set<number>(), this.parentLevel, this.childrenLevel);
        }
        if ((this.remainingUnits === 0) && (this.remainingFocusedUnits === 0)) {
          this.updateUml();
          this.showSpinner = false;
          this.showDiagram = true;
        }
      });
    }
  }

  private getUnitAndUpdateUml(id: number, visited: Set<number>, remainingParentLevel: number, remainingChildrenLevel: number) {
    this.remainingUnits--;
    visited.add(id);
    this.unitService.getUnit(id).subscribe((data: Unit) => {
      this.addUnit(data);
      this.remainingUnits += data.incomingRelations.length + data.outgoingRelations.length + 1;

      data.incomingRelations.forEach((relation: Relation) => {
        this.remainingUnits--;
        if (!this.getRelationById(relation.id.toString())) {
          const outgoing = +relation.outgoing;
          if (remainingChildrenLevel !== 0) {
            if (!visited.has(outgoing)) {
              this.getUnitAndUpdateUml(outgoing, visited, 0, remainingChildrenLevel - 1);
            }
            this.addRelation(relation);
          }
        }
      });

      data.outgoingRelations.forEach((relation: Relation) => {
        this.remainingUnits--;
        if (!this.getRelationById(relation.id.toString())) {
          const incoming = +relation.incoming;
          if (remainingParentLevel !== 0) {
            if (!visited.has(incoming)) {
              this.getUnitAndUpdateUml(incoming, visited, remainingParentLevel - 1, 0);
            }
            this.addRelation(relation);
          }
        }
      });

      if ((this.remainingUnits === 0) && (this.remainingFocusedUnits === 0)) {
        this.updateUml();
        this.showSpinner = false;
        this.showDiagram = true;
      }

    }, error => {
      console.log(error);
    });
  }

  private getFocusedUnits(): Unit[] {
    return Array.from(this.units.values()).filter((unit: Unit) => this.focusedUnits.has(unit.id.toString()));
  }

  private reloadLevels(newParentLevel, newChildrenLevel) {
    if (newParentLevel != null) {
      if (newParentLevel !== this.parentLevel) {
        this.parentLevel = newParentLevel;
        this.focusUnit();
      }
    } else if (newChildrenLevel != null) {
      if (newChildrenLevel !== this.childrenLevel) {
        this.childrenLevel = newChildrenLevel;
        this.focusUnit();
      }
    }
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

  private isNewId(id: string): boolean {
    return id.substring(0, 1) === '0';
  }

  private save(goToUnit, createSeparateUnit) {
    if (this.changed) {
      this.changed = false;
      this.showSpinner = true;

      const unitsToCreate: Unit[] = [];
      this.units.forEach((unit: Unit) => {
        if (this.isNewId(unit.id.toString())) {
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
          const oldId = unit.id.toString();
          unit.id = data.id;
          unit.name = data.name;
          unit.incomingRelations.forEach((relation: Relation) => {
            relation.incoming = data.id.toString();
          });
          unit.outgoingRelations.forEach((relation: Relation) => {
            relation.outgoing = data.id.toString();
          });
          if (this.focusedUnits.get(oldId)) {
            this.focusedUnits.delete(oldId);
            this.focusedUnits.set(unit.id.toString(), unit);
          }

          i++;
          if (i === unitsToCreate.length) {
            this.saveUnitsAndRelations(goToUnit, createSeparateUnit);
          }
        }, error => {
          console.log(error);
        });
      });
      if (unitsToCreate.length === 0) {
        this.saveUnitsAndRelations(goToUnit, createSeparateUnit);
      }
    }
  }

  private saveUnitsAndRelations(goToUnit, createSeparateUnit) {
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
        if (this.isNewId(relation.id.toString())) {
          relation.id = '0';
        }
      });
      unitToSave.outgoingRelations.forEach((relation: Relation) => {
        if (this.isNewId(relation.id.toString())) {
          relation.id = '0';
        }
      });
      unitsToSave.push(unitToSave);
    });
    this.unitService.saveUnits(unitsToSave).subscribe(() => {
      if (createSeparateUnit) {
        this.createSeparateUnit();
      } else {
        this.focusUnit();
      }
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

  private getSelectedUnitId(target): string {
    return target.id.toString().substring(1, target.id.length);
  }

  private updateUnitName() {
    const selectedUnit: Unit = this.getUnitById(this.getSelectedUnitId(this.selectedTarget));
    const newName = this.umlNodeOptions.nativeElement.firstChild.value;
    this.changed = ((this.changed) || ((newName) && (selectedUnit.name !== newName)));
    selectedUnit.name = (newName ? newName : selectedUnit.name);
    this.setShowUmlNodeOptions(false);
    this.setShowUmlPathOptions(false);
    this.updateUml();
  }

  private createUnit(relationType): Unit {
    const selectedUnit: Unit = this.getUnitById(this.getSelectedUnitId(this.selectedTarget));
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
      incoming: this.getSelectedUnitId(this.selectedTarget),
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

  private createSeparateUnit() {
    if (this.changed) {
      this.save(null, true);
    } else {
      const id = this.getNewUnitId().toString();
      const newUnit: Unit = {
        id: id,
        name: 'Nueva unidad',
        incomingRelations: [],
        outgoingRelations: []
      };
      this.addUnit(newUnit);
      this.focusedUnits.set(id.toString(), newUnit);
      this.focusUnit();
      this.changed = true;
    }
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

  private initCreatingRelation() {
    this.creatingRelation = {
      outgoing: this.getSelectedUnitId(this.selectedTarget),
      boundingClientRect: this.selectedTarget.getBoundingClientRect(),
      relationType: null
    };
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

  private deleteUnit() {
    const dialogRef = this.dialog.open(ConfirmActionComponent, {
      data: {
        confirmText: 'Se eliminará definitivamente la unidad y su contenido.',
        button1: 'Cancelar',
        button2: 'Eliminar'}
    });
    dialogRef.afterClosed().subscribe(result => {
      window.scroll(0, 0);
      if (result === 1) {
        this.unitService.deleteUnit(+this.getSelectedUnitId(this.selectedTarget)).subscribe(() => {
          if (this.focusedUnits.has(this.getSelectedUnitId(this.selectedTarget))) {
            let focused = false;
            this.focusedUnits.forEach((focusedUnit) => {
              this.getUnitById(focusedUnit.id.toString()).incomingRelations.forEach((relation: Relation) => {
                if ((!focused) && (focusedUnit.id.toString() !== relation.outgoing.toString())) {
                  this.focusedUnits.set(relation.outgoing.toString(), this.getUnitById(relation.outgoing.toString()));
                  focused = true;
                }
              });
            });
          }
          this.focusUnit();
        });
      }
    });
  }

  private deleteRelation() {
    const dialogRef = this.dialog.open(ConfirmActionComponent, {
      data: {
        confirmText: 'Se eliminará la relación',
        button1: 'Cancelar',
        button2: 'Eliminar'}
    });
    dialogRef.afterClosed().subscribe(result => {
      window.scroll(0, 0);
      if (result === 1) {
        const splittedRelation: string[] = this.selectedTarget.id.split('-');
        const incoming = splittedRelation[0];
        const outgoing = splittedRelation[1];
        const relationType = this.getRelationTypeEquivalent(splittedRelation[2]);
        this.units.get(incoming).incomingRelations.forEach((relation: Relation) => {
          if ((relation.outgoing.toString() === outgoing) && (relation.relationType === relationType)) {
            this.unitService.deleteRelation(+relation.id).subscribe(() => {
              this.focusUnit();
            });
          }
        });
      }
    });
  }

  private findUnitTarget(id: string): HTMLInputElement {
    let found = false;
    let target: HTMLInputElement = null;
    this.umlDiv.nativeElement.firstChild.childNodes.forEach((childNode) => {
      const firstChild = childNode.firstChild as HTMLInputElement;
      if ((!found) && (firstChild) && (firstChild.id) && (this.getSelectedUnitId(firstChild) === id.toString())) {
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
      this.save(null, false);
    }
  }



  // Mouse event listener

  @HostListener('document:click', ['$event'])
  public documentClick(event: Event): void {
    const target = event.target as HTMLInputElement;

    if (!this.creatingRelation) {

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
        this.initCreatingRelation();
        this.creatingRelation.relationType = RelationType.COMPOSITION;
        this.closeUmlNodeOptions();
      } else if ((target.id === 'inheritance-outgoing-button') || (target.parentElement.id === 'inheritance-outgoing-button')) {
        this.initCreatingRelation();
        this.creatingRelation.relationType = RelationType.INHERITANCE;
        this.closeUmlNodeOptions();
      } else if ((target.id === 'aggregation-outgoing-button') || (target.parentElement.id === 'aggregation-outgoing-button')) {
        this.initCreatingRelation();
        this.creatingRelation.relationType = RelationType.AGGREGATION;
        this.closeUmlNodeOptions();
      } else if ((target.id === 'association-outgoing-button') || (target.parentElement.id === 'association-outgoing-button')) {
        this.initCreatingRelation();
        this.creatingRelation.relationType = RelationType.ASSOCIATION;
        this.closeUmlNodeOptions();
      } else if ((target.id === 'use-outgoing-button') || (target.parentElement.id === 'use-outgoing-button')) {
        this.initCreatingRelation();
        this.creatingRelation.relationType = RelationType.USE;
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
        this.createRelation(this.creatingRelation.relationType, this.getUnitById(this.getSelectedUnitId(target)), this.getUnitById(this.creatingRelation.outgoing));
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
      const id = this.getSelectedUnitId(target);
      if (this.changed) {
        const dialogRef = this.dialog.open(ConfirmActionComponent, {
          data: {
            confirmText: 'Se han realizado cambios',
            button1: 'Guardar',
            button2: 'Descartar'}
        });
        dialogRef.afterClosed().subscribe(result => {
          if (result === 1) {
            this.goToUnit(id);
          } else if (result === 2) {
            this.save(id, false);
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
      }, error => {
        console.log(error);
      });
    } else {
      this.emptyResults();
    }
  }

  private emptyResults() {
    this.results = [];
  }

  private getUnitPrefix(completeName: string) {
    const nameLength = completeName.split(this.UNIT_NAME_SEPARATOR)[completeName.split(this.UNIT_NAME_SEPARATOR).length - 1].length;
    return completeName.substring(0, completeName.length - nameLength);
  }

  private getUnitName(completeName: string) {
    return completeName.split(this.UNIT_NAME_SEPARATOR)[completeName.split(this.UNIT_NAME_SEPARATOR).length - 1];
  }

  private selectUnit(result: Unit) {
    const id = result.id.toString();
    if (this.focusedUnits.has(id)) {
      this.focusedUnits.delete(id);
    } else {
      this.focusedUnits.set(id, this.getUnitById(id));
    }
    if (this.changed) {
      this.save(null, false);
    } else {
      this.focusUnit();
    }
  }



  // Routing

  private goToUnit(id) {
    this.router.navigate(['/unit/' + id]);
  }



  // Uml parser

  private parseUml(relations: any) {
    const parsedRelations = this.getRelationsDiagram(relations);
    if (parsedRelations !== '') {
      return 'classDiagram\n' + parsedRelations;
    } else {
      throw new Error('Invalid data. Unable to display uml');
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
    Array.from(this.focusedUnits.keys()).forEach((focusedUnitId) => {
      const unit = this.getUnitById(focusedUnitId);
      if (((unit.outgoingRelations.length === 0) && (unit.incomingRelations.length === 0)) ||
        ((this.parentLevel === 0) && (this.childrenLevel === 0)) ||
        ((unit.outgoingRelations.length === 0) && (this.childrenLevel === 0)) ||
        ((this.parentLevel === 0) && (unit.incomingRelations.length === 0))) {
        uml += this.parseUnitName(unit.id.toString()) + '<|--|>' + this.parseUnitName(unit.id.toString()) + '\n';
      }
    });
    return uml;
  }

  private parseUnitName(id: string): string {
    let name = "";
    if (this.focusedUnits.has(id.toString())) {
      name = 'F';
    } else {
      name = 'N';
    }
    name += id;
    const unit = this.getUnitById(id);
    if (unit) {
      name += unit.name;
    }
    return name;
  }

}
