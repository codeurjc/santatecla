import { Slide } from './../slide/slide.model';
import { Itineray } from './itinerary.model';
import { Component, ViewChild, OnInit } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';

import { ItineraryService } from './itinerary.service';

@Component({
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css']
})

export class ItineraryComponent implements OnInit {

  editorTypeJSON: boolean;
  editorType: string;

  public editorOptions: JsonEditorOptions;
  public data: any;

  itinerary: Itineray;
  name: string;
  itineraries: Itineray[];
  slides: Slide[];

  @ViewChild(JsonEditorComponent, null) editor: JsonEditorComponent;

  constructor( private itineraryService: ItineraryService ) {}

  ngOnInit() {

    this.editorTypeJSON = true;
    this.editorType = 'Botones';

    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ['code', 'text', 'tree', 'view'];
    this.editorOptions.mode = 'code';
    this.itineraryService.getItinerary(12).subscribe(d => this.data = d);

    this.itineraryService.getItinerary(12).subscribe((data: Itineray) => {
      this.itinerary = {
        id: data['id'],
        name: data['name'],
        itineraries: data['itineraries'],
        slides: data['slides']
      };
      this.name = this.itinerary.name;
      this.itineraries = this.itinerary.itineraries;
      this.slides = this.itinerary.slides;
    });

  }

  changeEditorType() {
    if (this.editorTypeJSON) {
      this.editorTypeJSON = false;
      this.editorType = 'JSON';
    } else {
      this.editorTypeJSON = true;
      this.editorType = 'Botones';
    }
  }

}
