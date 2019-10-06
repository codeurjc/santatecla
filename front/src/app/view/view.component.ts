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
    }, error => {});
  }

  getUnit(id: number) {
    this.viewService.getUnit(id).subscribe((data: any) => {
      this.data = data;
    }, error => {});
  }

  search() {
    if (this.searchField === '') {
      this.results = [];
    }
    this.viewService.searchByNameContaining(this.searchField).subscribe((data: any) => {
      this.results = data;
      this.arrowkeyLocation = 0;
    }, error => {});
  }

  setShowResults(showResults: boolean) {
    this.showResults = showResults;
    if (showResults) {
      this.search();
    } else {
      this.results = [];
    }
  }

  keyDown(event: KeyboardEvent) {
    if (event.key === this.ENTER_KEY) {
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

}
