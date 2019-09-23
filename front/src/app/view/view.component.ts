import { Component, ViewChild, OnInit } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';

@Component({
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {
  public editorOptions: JsonEditorOptions;
  public data: any;
  @ViewChild(JsonEditorComponent, null) editor: JsonEditorComponent;

  constructor() {}

  ngOnInit() {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ['code', 'text', 'tree', 'view'];
    this.editorOptions.mode = 'code';
    this.data = {
      "Unidad 1": {
        "relations": [
          {
            "r1": "r1"
          },
          {
            "r2": "r2"
          }
        ]
      },
      "Unidad 2": {
        "relations": [
          {
            "r1": "r1"
          },
          {
            "r2": "r2"
          }
        ]
      }
    };
  }

}
