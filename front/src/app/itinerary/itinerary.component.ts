import { Unit } from './../unit/unit.model';
import { Card } from './../card/card.model';
import { SlideService } from './../slide/slide.service';
import { Slide } from './../slide/slide.model';
import { Itineray } from './itinerary.model';
import { Component, ViewChild, OnInit } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { TdDialogService } from '@covalent/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ItineraryService } from './itinerary.service';
import { LoginService } from '../auth/login.service';
import { ViewService } from '../view/view.service';

@Component({
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css']
})

export class ItineraryComponent implements OnInit {

  editorTypeJSON: boolean;
  editorType: string;

  public editorOptions: JsonEditorOptions;
  public data: any;

  unit: Unit;
  itinerary: Itineray;
  name: string;
  itineraries: Itineray[];
  itineraries2: Itineray[];
  slides: Slide[];

  unitId: number;
  itineraryId: number;

  @ViewChild(JsonEditorComponent, null) editor: JsonEditorComponent;

  constructor(private itineraryService: ItineraryService,
              private slideService: SlideService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private dialogService: TdDialogService,
              private loginService: LoginService,
              private viewService: ViewService ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.unitId = params['unitId'];
      this.itineraryId = params['itineraryId'];
    });

    this.viewService.getUnit(this.unitId).subscribe((data: Unit) => {
      this.unit = {
        id: data['id'],
        name: data['name'],
        itineraries: data['itineraries']
      };
      this.itineraries2 = this.unit.itineraries;
    });

    this.editorTypeJSON = true;
    this.editorType = 'Botones';

    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ['code', 'text', 'tree', 'view'];
    this.editorOptions.mode = 'code';
    this.itineraryService.getItinerary(this.itineraryId).subscribe(d => this.data = d);

    this.itineraryService.getItinerary(this.itineraryId).subscribe((data: Itineray) => {
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

  removeSlide(slide: Slide) {
    this.dialogService.openConfirm({
      message: '¿ Seguro que desea eliminar la vista ' + slide.id + ' del itinerario "' + this.itinerary.name + '" ?',
      title: 'Confirmación',
      width: '500px',
      height: '175px'
  }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {
    this.itineraryService.removeSlide(this.itinerary, slide.id).subscribe(
      (_) => {
        this.ngOnInit();
      }, (error) => {
        console.error(error);
      });
      }
    });
  }

  removeSubSlide(slide: Slide, itinerary: Itineray) {
    this.itineraryService.removeSlide(itinerary, slide.id).subscribe(
      (_) => {
      }, (error) => {
        console.error(error);
      });
  }

  removeItinerary(itinerary: Itineray) {
    this.dialogService.openConfirm({
      message: '¿ Seguro que desea eliminar el itinerario "' + itinerary.name + '" del itinerario "' + this.itinerary.name + '" ?',
      title: 'Confirmación',
      width: '500px',
      height: '175px'
  }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {
        this.itineraryService.removeItinerary(this.itinerary, itinerary.id).subscribe(
          (_) => {
            this.ngOnInit();
          }, (error) => {
            console.error(error);
          });
      }
    });
  }

  deleteItinerary() {
    this.dialogService.openConfirm({
      message: '¿ Seguro que desea eliminar el itinerario "' + this.itinerary.name + '" ?',
      title: 'Confirmación',
      width: '500px',
      height: '175px'
  }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {
        this.itineraryService.deleteItinerary(this.itinerary).subscribe((_) => {
          this.router.navigate(['/']);
        }, (error) => {
          console.error(error);
        });
      }
    });
  }

  removeCard(slide: Slide, card: Card) {
    this.dialogService.openConfirm({
      message: '¿ Seguro que desea eliminar la ficha "' + card.name + '" de la vista ' + slide.id + ' ?',
      title: 'Confirmación',
      width: '500px',
      height: '175px'
  }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {
        this.slideService.removeCard(slide, card.id).subscribe(
          (_) => {
            this.ngOnInit();
          }, (error) => {
            console.error(error);
          });
      }
    });
  }

  navigateQuestion(id: number){
    this.router.navigate(['/definitionQuestion/' + id]);
  }

  navigateListQuestion(id: number){
    this.router.navigate(['/listQuestion/' + id]);
  }

  navigateToUnitCards() {
    this.router.navigate(['/units/' + this.unitId + '/cards']);
  }

  navigateToUnitProgress() {
    this.router.navigate(['/units/' + this.unitId + '/progress']);
  }

  navigateToUnitItinerary(itineraryId: number) {
    this.router.navigate(['/units/' + this.unitId + '/itineraries/' + itineraryId]);
  }
}
