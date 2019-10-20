import { Unit } from './../unit/unit.model';
import { ViewService } from './view.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';

@Component({
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {

  private UNIT_NAME_SEPARATOR = '.';
  private ENTER_KEY = 'Enter';
  private ARROW_UP_KEY = 'ArrowUp';
  private ARROW_DOWN_KEY = 'ArrowDown';

  public editorOptions: JsonEditorOptions;
  public data: any;

  @ViewChild(JsonEditorComponent, null) editor: JsonEditorComponent;

  public searchField = '';
  public showResults = false;
  public results: Unit[] = [];
  public arrowkeyLocation = 0;

  constructor(private viewService: ViewService) {}

  ngOnInit() {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ['code', 'text', 'tree', 'view'];
    this.editorOptions.mode = 'code';
    this.viewService.getUnits().subscribe((data: any) => {
      this.data = data;
    }, error => {
      console.log(error);
    });
  }

  getUnit(id: number) {
    this.viewService.getUnit(id).subscribe((data: any) => {
      this.data = [data];
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
      this.results = [];
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
      this.results = [];
    }
    this.showResults = showResults;
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
