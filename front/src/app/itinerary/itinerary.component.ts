import { Unit } from '../unit/unit.model';
import { SlideService } from '../slide/slide.service';
import { Itineray } from './itinerary.model';
import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ItineraryService } from './itinerary.service';
import { LoginService } from '../auth/login.service';
import { ViewService } from '../view/view.service';

import Asciidoctor from 'asciidoctor';

function convertToHTML(text) {
  const asciidoctor = Asciidoctor();
  const html = asciidoctor.convert(text);
  return(html);
}

@Component({
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css']
})

export class ItineraryComponent implements OnInit {

  textConversion: any;

  unit: Unit;
  itinerary: Itineray;
  name: string;
  itineraries: Itineray[];
  itineraryTabs: Itineray[];

  unitId: number;
  itineraryId: number;

  constructor(private itineraryService: ItineraryService,
              private slideService: SlideService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private dialogService: TdDialogService,
              private loginService: LoginService,
              private viewService: ViewService ) {}

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.unitId = params.unitId;
      this.itineraryId = params.itineraryId;
    });

    this.viewService.getUnit(this.unitId).subscribe((data: Unit) => {
      this.unit = {
        id: data.id,
        name: data.name,
        itineraries: data.itineraries
      };
      this.itineraryTabs = this.unit.itineraries;
    });

    this.itineraryService.getItinerary(this.itineraryId).subscribe((data: Itineray) => {
      this.itinerary = {
        id: data.id,
        name: data.name,
        content: data.content
      };
      this.name = this.itinerary.name;
      this.textConversion = convertToHTML(this.itinerary.content);
    });
  }

    updateHTMLView() {
      this.itineraryService.updateItinerary(this.itinerary).subscribe((_) => {
        this.textConversion = convertToHTML(this.itinerary.content);
      }, (error) => {
        console.error(error);
      });
    }

    navigateQuestion(id: number) {
    this.router.navigate(['/units/' + this.unitId + '/itineraries/' + this.itineraryId + '/definitionQuestion/' + id]);
    }

    navigateListQuestion(id: number) {
    this.router.navigate(['/units/' + this.unitId + '/itineraries/' + this.itineraryId + '/listQuestion/' + id]);
    }

    navigateTestQuestion(id: number) {
    this.router.navigate(['/units/' + this.unitId + '/itineraries/' + this.itineraryId + '/testQuestion/' + id]);
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
