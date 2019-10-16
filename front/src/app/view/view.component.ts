import { UmlParser } from './uml.parser';
import { Unit } from './../unit/unit.model';
import { ViewService } from './view.service';
import { Component, ViewChild, OnInit, AfterContentInit } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';

declare var mermaid: any;

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
  public arrowkeyLocation = 0;

  @ViewChild(JsonEditorComponent, null) editor: JsonEditorComponent;
  public editorOptions: JsonEditorOptions;
  public data: any;

  @ViewChild('uml') umlDiv;
  private umlParser: UmlParser;

  constructor(private viewService: ViewService) {}

  ngOnInit() {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ['code', 'text', 'tree', 'view'];
    this.editorOptions.mode = 'code';
    this.umlParser = new UmlParser();
    this.viewService.getUnits().subscribe((data: any) => {
      this.data = data;
      this.updateUml();
    }, error => {
      console.log(error);
    });
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
    this.viewService.getUnit(id).subscribe((data: any) => {
      this.data = [data];
      this.updateUml();
      this.emptyResults();
    }, error => {
      console.log(error);
    });
  }

  search() {
    if (this.validSearchField()) {
      this.viewService.searchByNameContaining(this.searchField).subscribe((data: any) => {
        this.results = data;
        this.arrowkeyLocation = 0;
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
      this.getUnit(this.results[this.arrowkeyLocation].id);
    } else if ((event.key === this.ARROW_UP_KEY) && (this.arrowkeyLocation > 0)) {
      this.arrowkeyLocation--;
    } else if ((event.key === this.ARROW_DOWN_KEY) && (this.arrowkeyLocation < (this.results.length - 1))) {
      this.arrowkeyLocation++;
    }
  }

  setActive(i: number) {
    this.arrowkeyLocation = i;
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
      this.viewService.save(this.data).subscribe((data: any) => {
      }, error => {
        console.log(error);
      });
    }
  }

}
