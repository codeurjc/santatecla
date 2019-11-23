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

  cardsCount: number;

  showSpinner = false;
  componentsChecker: number;

  constructor(private itineraryService: ItineraryService,
              private slideService: SlideService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private dialogService: TdDialogService,
              private loginService: LoginService,
              private unitService: UnitService ) {}

  ngOnInit() {

    this.showSpinner = true;

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
      this.extendContent(this.itineraryContent);
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

  async getEmbebedCards(cardId: number, unitId: number, content: string, cardsCounter: number) {
    let cardContent;
    cardContent = await this.unitService.getCardByName(cardId, unitId).toPromise();
    this.extractedData.splice(cardsCounter, 1, cardContent.content);
    this.addExtractedData(content, cardsCounter);
  }

  cardsCounterFunction(content: string) {
    this.cardsCount = 0;
    let lines: string[];
    lines = content.split('\n');
    lines.forEach((line: string) => {
      let words: string[];
      words = line.split('.');
      if (words[0] === 'assert') {
        let parameters: string[];
        parameters = words[1].split('/');
        if (parameters[0] === 'card') {
          this.cardsCount = this.cardsCount + 1;
        }
      }
    });
  }

  extendContent(content: string) {
    this.cardsCounterFunction(content);
    this.extractedData = [];
    for (let i = 0; i < this.cardsCount; i++) {
      this.extractedData.push('');
    }
    this.position = [];
    let counter = 0;
    let cardsCounter = 0;
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
          this.getEmbebedCards(Number(parameters[1]), Number(parameters[2]), content, cardsCounter);
          cardsCounter = cardsCounter + 1;
        } else {
          this.addExtractedData(content, cardsCounter);
        }
      }
      counter = counter + 1;
    });
  }

  addExtractedData(content: string, cardsCounter: number) {
    this.componentsChecker = 0;
    this.itineraryContentExtended = '';
    let lines: string[];
    lines = content.split('\n');
    for (let i = 0; i < this.position.length; i ++) {
      lines[this.position[i]] = this.extractedData[i];
    }
    lines.forEach((line: string) => {
      this.itineraryContentExtended = this.itineraryContentExtended + line + '\n';
    });
    this.extractedData.forEach((component: string) => {
      if (component !== '') {
        this.componentsChecker = this.componentsChecker + 1;
      }
    });
    if (this.componentsChecker === this.cardsCount) {
      this.showSpinner = false;
      this.viewHTMLVersion();
    }
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
    this.contentHTML = '';
    this.showSpinner = true;
    this.itineraryService.updateItinerary(this.itinerary).subscribe((_) => {
      this.extendContent(this.itineraryContent);
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
