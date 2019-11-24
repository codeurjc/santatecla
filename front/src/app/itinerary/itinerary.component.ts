import { Unit } from '../unit/unit.model';
import { SlideService } from '../slide/slide.service';
import { Itineray } from './itinerary.model';
import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ItineraryService } from './itinerary.service';
import { LoginService } from '../auth/login.service';
import { UnitService } from '../unit/unit.service';

import Asciidoctor from 'asciidoctor';
import {Slide} from '../slide/slide.model';
import {Card} from '../card/card.model';

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
  itineraryContentExtended: string;

  extractedData: string[];
  position: number[];

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
              private unitService: UnitService ) {}

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.unitId = params.unitId;
      this.itineraryId = params.itineraryId;
    });

    this.unitService.getUnit(this.unitId).subscribe((data: Unit) => {
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
      this.itineraryContentExtended = '';
      this.slidesToContent(this.itinerary.slides);
      this.resolveAfterSeconds(this.extendContent(this.itineraryContent)).then(value => {
        this.viewHTMLVersion();
      });
    });
  }

  viewHTMLVersion() {
    this.contentHTML = convertToHTML(this.itineraryContentExtended);
  }

  slidesToContent(slides: Slide[]) {
    slides.forEach((slide: Slide) => {
      this.itineraryContent = this.itineraryContent + slide.content + '// ' + slide.id + '\n\n';
    });
  }

  resolveAfterSeconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 1000);
    });
  }

  extendContent(content: string) {
    this.extractedData = [];
    this.position = [];
    let counter = 0;
    let lines: string[];
    lines = content.split('\n');
    lines.forEach((line: string) => {
      let words: string[];
      words = line.split('.');
      if (words[0] === 'assert') {
        let parameters: string[];
        parameters = words[1].split('/');
        if (parameters[0] === 'card') {
          this.position.push(counter);
          this.unitService.getCardByName(parameters[1], Number(parameters[2])).subscribe((data: Card) => {
            this.extractedData.push(data.content);
            this.addExtractedData(content);
          });
        }
      } else {
        this.addExtractedData(content);
      }
      counter = counter + 1;
    });
  }

  addExtractedData(content: string) {
    this.itineraryContentExtended = '';
    let lines: string[];
    lines = content.split('\n');
    for (let i = 0; i < this.position.length; i ++) {
      lines[this.position[i]] = this.extractedData[i];
    }
    lines.forEach((line: string) => {
      this.itineraryContentExtended = this.itineraryContentExtended + line + '\n';
    });
  }

  contentToItinerary(content: string) {
    let slidesContent: string[];
    slidesContent = content.split('=== ');
    if (slidesContent[0].split(' ')[0] === '==') {
      this.itinerary.name = '';
      for (let i = 1; i < slidesContent[0].split(' ').length; i ++) {
        this.itinerary.name = this.itinerary.name + slidesContent[0].split(' ')[i].split('\n')[0] + ' ';
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
      slide.name = lines[0];
      slide.content = '=== ' + slide.name + '\n';
      for (let j = 1; j < lines.length; j ++) {
        if (j < lines.length - 2) {
          if (!(lines[j].split(' ')[0] === '//')) {
            slide.content = slide.content + lines[j] + '\n';
          }
        } else {
          if ( (lines.length > 2) && ( j >= 2) ) {
            if (lines[j - 2].split(' ')[0] === '//') {
              slide.id = Number(lines[j - 2].split(' ')[1]);
            }
          }
        }
      }
      this.itinerary.slides.push(slide);
    }
  }

  updateHTMLView() {
    this.contentToItinerary(this.itineraryContent);
    this.itineraryService.updateItinerary(this.itinerary).subscribe((_) => {
      this.resolveAfterSeconds(this.extendContent(this.itineraryContent)).then(value => {
        this.viewHTMLVersion();
      });
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

  navigateToUnitQuestions() {
    this.router.navigate(['units', this.unitId, 'question']);
  }
}
