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
import {Slide} from '../slide/slide.model';

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

  contentHTML: any;
  itineraryContent: any;

  unit: Unit;
  itinerary: Itineray;

  unitId: number;
  itineraryId: number;

  itineraryTabs: Itineray[];

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
        slides: data.slides
      };
      this.itineraryContent = '== ' + this.itinerary.name + '\n';
      this.slidesToContent(this.itinerary.slides);
      this.contentHTML = convertToHTML(this.itineraryContent);
    });

  }

  slidesToContent(slides: Slide[]) {
    slides.forEach((slide: Slide) => {
      this.itineraryContent = this.itineraryContent + slide.content;
    });
  }

  contentToItinerary(content: string) {
    let slidesContent: string[];
    slidesContent = content.split('===');
    if (slidesContent[0].split(' ')[0] === '==') {
      this.itinerary.name = '';
      for (let i = 1; i < slidesContent[0].split(' ').length; i ++) {
        this.itinerary.name = this.itinerary.name + slidesContent[0].split(' ')[i].split('\n')[0];
      }
    }
    this.contentToSlides(slidesContent);
  }

  contentToSlides(content: string[]) {
    this.itinerary.slides = [];
    let slide: Slide;
    for (let i = 1; i < content.length; i ++) {
      slide = { name: '', content: ''};
      let lines: string[];
      lines = content[i].split('\n');
      slide.name = lines[0].split(' ')[1];
      slide.content = '=== ' + slide.name + '\n';
      for (let j = 1; j < lines.length - 1; j ++) {
        slide.content = slide.content + lines[j] + '\n';
      }
      this.itinerary.slides.push(slide);
    }
  }

  updateHTMLView() {
    this.contentToItinerary(this.itineraryContent);
    this.itineraryService.updateItinerary(this.itinerary).subscribe((_) => {
      this.contentHTML = convertToHTML(this.itineraryContent);
    }, (error) => {
      console.error(error);
    });
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

  navigateQuestion(id: number) {
    this.router.navigate(['/units/' + this.unitId + '/itineraries/' + this.itineraryId + '/definitionQuestion/' + id]);
  }

  navigateListQuestion(id: number) {
    this.router.navigate(['/units/' + this.unitId + '/itineraries/' + this.itineraryId + '/listQuestion/' + id]);
  }

  navigateTestQuestion(id: number) {
    this.router.navigate(['/units/' + this.unitId + '/itineraries/' + this.itineraryId + '/testQuestion/' + id]);
  }
}
