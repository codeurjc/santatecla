import { UmlParser } from './uml.parser';
import { Unit } from '../unit/unit.model';
import { ViewService } from './view.service';
import { Component, ViewChild, OnInit, AfterContentInit, ElementRef, HostListener } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { Router } from '@angular/router';
import { Relation } from '../relation/relation.model';
import { RelationType } from '../relation/relation.type';

declare var mermaid: any;

class VisibleUnit implements Unit {
  id: number;
  name: string;
  relations: VisibleRelation[] = [];

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    data.relations.forEach((relation: any) => {
      this.relations.push(new VisibleRelation(relation));
    });
  }

  getSortedData() {
    return {
      id: this.id,
      name: this.name,
      relations: this.relations
    }
  }
}

class VisibleRelation implements Relation {
  id: number;
  relationType: string;
  relatedTo: any;

  constructor(data: any) {
    this.id = data.id;
    this.relationType = data.relationType;
    this.relatedTo = new VisibleUnit(data.relatedTo).getSortedData();
  }
}

@Component({
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit, AfterContentInit {

  private UNIT_NAME_SEPARATOR = '.';
  private ENTER_KEY = 'Enter';
  private ARROW_UP_KEY = 'ArrowUp';
  private ARROW_DOWN_KEY = 'ArrowDown';

  private searchField = '';
  private showResults = false;
  private results: Unit[] = [];
  private arrowKeyLocation = 0;

  @ViewChild(JsonEditorComponent, null) editor: JsonEditorComponent;
  private editorOptions: JsonEditorOptions;
  private data: any;
  private changed: boolean = false;

  @ViewChild('uml') umlDiv;
  private umlParser: UmlParser;

  @ViewChild('umlNodeOptions') umlNodeOptions: ElementRef;
  private selectedTarget: HTMLInputElement;
  private showUmlNodeOptions = false;

  private showSpinner = false;

  constructor(private router: Router, private viewService: ViewService) {}

  ngOnInit() {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ['code', 'text', 'tree', 'view'];
    this.editorOptions.mode = 'code';
    this.umlParser = new UmlParser();
    this.getUnit(14);
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

  private updateJson(changed: boolean) {
    this.changed = changed;
    if (this.isValidJson()) {
      this.updateUml();
    }
  }

  private isValidJson(): boolean {
    return ((this.validRelations(this.data)) && (this.editor.isValidJson()));
  }

  private validRelations(data: VisibleUnit): boolean {
    let valid = true;
    data.relations.forEach((relation: VisibleRelation) => {
      if (valid) {
        if (Object.values(RelationType).indexOf(relation.relationType) === -1) {
          valid = false;
        }
        if (!this.validRelations(relation.relatedTo)) {
          valid = false;
        }
      }
    });
    return valid;
  }

  private updateUml() {
    const element: any = this.umlDiv.nativeElement;
    element.innerHTML = '';
    mermaid.render('uml', this.umlParser.jsonToUml(this.data), (svgCode, bindFunctions) => {
      element.innerHTML = svgCode;
      if (this.showUmlNodeOptions) {
        this.updateSelectedTarget();
        this.drawUmlNodeOptions();
      }
    });
  }

  private getUnit(id: number) {
    this.viewService.getUnit(id).subscribe((data: Unit) => {
      this.setData(data, false);
      this.emptyResults();
    }, error => {
      console.log(error);
    });
  }

  private setData(data: any, changed: boolean) {
    const visibleData = new VisibleUnit(data);
    this.data = visibleData.getSortedData();
    this.updateJson(changed);
  }

  private search() {
    if (this.validSearchField()) {
      this.viewService.searchByNameContaining(this.searchField).subscribe((data: any) => {
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
      this.getUnit(this.results[this.arrowKeyLocation].id);
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

  private save(event: KeyboardEvent) {
    if (this.changed) {
      if (event) { event.preventDefault(); }
      if (this.isValidJson()) {
        this.showSpinner = true;
        this.viewService.saveUnit(this.data).subscribe((data) => {
          this.setData(data, false);
          this.showSpinner = false;
        }, error => {
          console.log(error);
        });
      }
      this.changed = false;
    }
  }

  private updateUnitName() {
    const selectedUnit: VisibleUnit = this.findUnit(this.data, this.selectedTarget.id);
    selectedUnit.name = this.umlNodeOptions.nativeElement.firstChild.value;
    this.setData(this.data, true);
    this.setShowUmlNodeOptions(false);
  }

  private findUnit(data, id): VisibleUnit {
    let unit = null;
    if (data.id.toString() === id) {
      unit = data;
    } else {
      data.relations.forEach((relation: any) => {
        const u = this.findUnit(relation.relatedTo, id);
        if (u !== null) {
          unit = u;
        }
      });
    }
    return unit;
  }

  private createRelation(relationType): VisibleUnit {
    const selectedUnit: VisibleUnit = this.findUnit(this.data, this.selectedTarget.id);
    const newUnit: VisibleUnit = new VisibleUnit({
      id: 0,
      name: 'Nueva unidad',
      relations: []
    });
    selectedUnit.relations.push(new VisibleRelation({
      id: 0,
      relationType: relationType,
      relatedTo: newUnit
    }));
    this.setData(this.data, true);
    return newUnit;
  }

  @HostListener('document:click', ['$event'])
  public documentClick(event: Event): void {
    const target = <HTMLInputElement>event.target;

    // Search
    if ((target.id === 'result') || (target.id === 'unit-prefix') || (target.id === 'unit-name')) {
      this.getUnit(this.results[this.arrowKeyLocation].id);
    } else if ((target.attributes) && (target.attributes['class']) &&
      ((target.attributes['class'].nodeValue === 'mat-form-field-flex') || (target.attributes['class'].nodeValue.includes('mat-form-field-outline')) ||
      (target.attributes['class'].nodeValue === 'mat-form-field-infix') || (target.id === 'search-input'))) {
      this.setShowResults(true);
    } else {
      this.setShowResults(false);
    }

    // Uml
    if ((target.tagName === 'rect') || (target.tagName ==='text')) {
      this.selectedTarget = target;
      if (target.tagName === 'text') {
        this.selectedTarget = <HTMLInputElement>target.previousElementSibling;
      }
      this.setShowUmlNodeOptions(true);
      this.drawUmlNodeOptions();
    } else if (target.tagName === 'path') {

    } else if (target.id === 'create-association-button') {
      this.selectedTarget = this.findUnitTarget(this.createRelation(RelationType.ASSOCIATION).id);
      this.drawUmlNodeOptions();
    } else if (target.id === 'create-aggregation-button') {
      this.selectedTarget = this.findUnitTarget(this.createRelation(RelationType.AGGREGATION).id);
      this.drawUmlNodeOptions();
    } else if (target.id === 'create-composition-button') {
      this.selectedTarget = this.findUnitTarget(this.createRelation(RelationType.COMPOSITION).id);
      this.drawUmlNodeOptions();
    } else if (target.id === 'create-inheritance-button') {
      this.selectedTarget = this.findUnitTarget(this.createRelation(RelationType.INHERITANCE).id);
      this.drawUmlNodeOptions();
    } else if ((target.id !== 'uml-edit-input') && (target.id !== 'uml-node-options')) {
      this.setShowUmlNodeOptions(false);
    }
  }

  private findUnitTarget(id): HTMLInputElement {
    let found = false;
    let target: HTMLInputElement = null;
    this.selectedTarget.parentElement.parentElement.childNodes.forEach((childNode) => {
      const firstChild = <HTMLInputElement>childNode.firstChild;
      if ((!found) && (firstChild) && (firstChild.id === id.toString())) {
        target = firstChild;
        found = true;
      }
    });
    return target;
  }

  private drawUmlNodeOptions() {
    const input = this.umlNodeOptions.nativeElement.firstChild;
    input.style.left = (this.selectedTarget.getBoundingClientRect().left + window.pageXOffset) + 'px';
    input.style.top = (this.selectedTarget.getBoundingClientRect().top + window.pageYOffset) + 'px';
    input.style.width = (this.selectedTarget.getBoundingClientRect().width) + 'px';
    input.style.height = (this.selectedTarget.getBoundingClientRect().height) + 'px';
    input.value = (<HTMLInputElement>this.selectedTarget.nextSibling).innerHTML;
    input.setSelectionRange(0, input.value.length);
    const optionsStyle = this.umlNodeOptions.nativeElement.lastChild.style;
    optionsStyle.left = (this.selectedTarget.getBoundingClientRect().right + window.pageXOffset) + 'px';
    optionsStyle.top = (this.selectedTarget.getBoundingClientRect().top + window.pageYOffset) + 'px';
  }

  private updateSelectedTarget() {
    const id = this.selectedTarget.id;
    let found = false;
    this.umlDiv.nativeElement.firstChild.childNodes.forEach((childNode: HTMLInputElement) => {
      const firstChild = <HTMLInputElement> childNode.firstChild;
      if ((!found) && (childNode.firstChild) && (firstChild.id === id)) {
        this.selectedTarget = firstChild;
        found = true;
      }
    });
  }

  private setShowUmlNodeOptions(showUmlNodeOptions: boolean) {
    this.showUmlNodeOptions = showUmlNodeOptions;
  }

  private goToUnit(id) {
    this.router.navigate(['/units/' + id + '/cards']);
  }

}
