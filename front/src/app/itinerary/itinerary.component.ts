import { Component, ViewChild, OnInit } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';

@Component({
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css']
})

export class ItineraryComponent implements OnInit {
  public editorOptions: JsonEditorOptions;
  public data: any;
  @ViewChild(JsonEditorComponent, null) editor: JsonEditorComponent;

  constructor() {}

  ngOnInit() {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ['code', 'text', 'tree', 'view'];
    this.editorOptions.mode = 'code';
    this.data = {
      "products": [
        {
          "name": "car",
          "product": [
            {
              "name": "honda",
              "model": [
                {
                  "id": "civic",
                  "name": "civic"
                },
                {
                  "id": "accord",
                  "name": "accord"
                },
                {
                  "id": "crv",
                  "name": "crv"
                },
                {
                  "id": "pilot",
                  "name": "pilot"
                },
                {
                  "id": "odyssey",
                  "name": "odyssey"
                }
              ]
            }
          ]
        }
      ]
    };
  }

}
