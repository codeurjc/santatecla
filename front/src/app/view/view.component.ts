import { UmlParser } from './uml.parser';
import { Unit } from '../unit/unit.model';
import { ViewService } from './view.service';
import { Component, ViewChild, OnInit, AfterContentInit } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { Router } from '@angular/router';
import { Relation } from '../relation/relation.model';

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

  public searchField = '';
  public showResults = false;
  public results: Unit[] = [];
  public arrowKeyLocation = 0;

  @ViewChild(JsonEditorComponent, null) editor: JsonEditorComponent;
  public editorOptions: JsonEditorOptions;
  public data: any;

  @ViewChild('uml') umlDiv;
  private umlParser: UmlParser;

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
      theme: 'forest',
      logLevel: 3,
      flowchart: { curve: 'basis' },
      gantt: { axisFormat: '%m/%d/%Y' },
      sequence: { actorMargin: 50 },
    });
  }

  private updateUml() {
    if (this.editor.isValidJson()) {
      const element: any = this.umlDiv.nativeElement;
      element.innerHTML = '';
      mermaid.render('uml', this.umlParser.jsonToUml(this.data), (svgCode, bindFunctions) => {
        element.innerHTML = svgCode;
      });
    }
  }

  getUnit(id: number) {
    this.viewService.getUnit(id).subscribe((data: Unit) => {
      this.setData(data);
      this.updateUml();
      this.setShowResults(false);
    }, error => {
      console.log(error);
    });
  }

  private setData(data: any) {
    const visibleData = new VisibleUnit(data);
    this.data = visibleData.getSortedData();
  }

  search() {
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

  validSearchField() {
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

  setShowResults(showResults: boolean) {
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

  keyDown(event: KeyboardEvent) {
    if ((event.key === this.ENTER_KEY) && (this.results.length > 0)) {
      this.getUnit(this.results[this.arrowKeyLocation].id);
    } else if ((event.key === this.ARROW_UP_KEY) && (this.arrowKeyLocation > 0)) {
      this.arrowKeyLocation--;
    } else if ((event.key === this.ARROW_DOWN_KEY) && (this.arrowKeyLocation < (this.results.length - 1))) {
      this.arrowKeyLocation++;
    }
  }

  setActive(i: number) {
    this.arrowKeyLocation = i;
  }

  getUnitPrefix(completeName: string) {
    const nameLength = completeName.split(this.UNIT_NAME_SEPARATOR)[completeName.split(this.UNIT_NAME_SEPARATOR).length - 1].length;
    return completeName.substring(0, completeName.length - nameLength);
  }

  getUnitName(completeName: string) {
    return completeName.split(this.UNIT_NAME_SEPARATOR)[completeName.split(this.UNIT_NAME_SEPARATOR).length - 1];
  }

  save(event: KeyboardEvent) {
    event.preventDefault();
    if (this.editor.isValidJson()) {
      this.viewService.saveUnit(this.data).subscribe((data: any) => {
      }, error => {
        console.log(error);
      });
    }
  }

  handle(event: MouseEvent) {
    const target = <HTMLInputElement>event.target;
    if ((target.tagName === 'text') || (target.tagName ==='rect')) {
      this.goToUnit(target.id);
    }
  }

  goToUnit(id) {
    this.router.navigate(['/units/' + id + '/cards']);
  }

}
