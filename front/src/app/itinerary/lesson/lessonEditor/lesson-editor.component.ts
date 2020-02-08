import { Unit } from '../../../unit/unit.model';
import { SlideService } from '../../../slide/slide.service';
import { Lesson } from '../lesson.model';
import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatBottomSheet} from '@angular/material/bottom-sheet';

import { LessonService } from '../lesson.service';
import { LoginService } from '../../../auth/login.service';
import { UnitService } from '../../../unit/unit.service';

import Asciidoctor from 'asciidoctor';
import {Slide} from '../../../slide/slide.model';
import {DefinitionQuestionService} from '../../../question/definitionQuestion/definitionQuestion.service';
import {UnitsCardsToolComponent} from '../lessonTools/units-cards-tool.component';
import {TabService} from '../../../tab/tab.service';
import {UnitLessonService} from '../unit-lesson.service';
import {CourseService} from '../../../course/course.service';
import {Course} from '../../../course/course.model';
import {ModuleService} from '../../module/module.service';
import {Module} from '../../module/module.model';
import {ImageService} from '../../../images/image.service';
import {ImageComponent} from '../../../images/image.component';
import {CardService} from '../../../card/card.service';


function convertToHTML(text) {
  const asciidoctor = Asciidoctor();
  const html = asciidoctor.convert(text);
  return(html);
}

@Component({
  selector: 'app-lesson-editor',
  templateUrl: './lesson-editor.component.html',
  styleUrls: ['./lesson-editor.component.css']
})

export class LessonEditorComponent implements OnInit {

  contentHTML: any[];
  contentSlide: number;
  progress: number;

  index: string;

  lessonContent: any;
  lessonContentExtended: string;

  slidesContentExtended: string[];

  extractedData: string[];
  position: number[];

  unit: Unit;
  lesson: Lesson;

  unitId: number;
  moduleId: number;
  lessonId: number;

  contentCount: number;

  showSpinner = false;
  componentsChecker: number;

  subSlide: boolean;

  constructor(private slideService: SlideService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private dialogService: TdDialogService,
              private loginService: LoginService,
              private lessonService: LessonService,
              private definitionQuestionService: DefinitionQuestionService,
              private unitService: UnitService,
              private courseService: CourseService,
              private moduleService: ModuleService,
              private bottomSheet: MatBottomSheet,
              private unitLessonService: UnitLessonService,
              private tabService: TabService,
              private imageService: ImageService,
              private cardService: CardService) {
    this.showSpinner = true;
  }

  ngOnInit() {

    this.contentSlide = 0;

    this.activatedRoute.params.subscribe(params => {
      this.unitId = params.unitId;
      this.lessonId = params.lessonId;

      this.lessonService.getLesson(this.lessonId).subscribe((lesson: Lesson) => {
        if (this.loginService.isAdmin) {
          this.moduleId = params.moduleId;
          this.unitService.getUnit(this.unitId).subscribe((unit: Unit) => {
            if (typeof this.moduleId === 'undefined') {
              this.tabService.setLesson(unit.name, this.unitId, lesson.name);
            } else {
              this.moduleService.getModule(this.moduleId).subscribe((module: Module) => {
                this.tabService.setLessonInModule(unit.name, this.unitId, module.name, module.id, lesson.name);
              });
            }
          });
        } else {
          this.moduleId = params.moduleId;
          this.moduleService.getModule(this.moduleId).subscribe((module: Module) => {
            this.courseService.getCourse(this.unitId).subscribe((course: Course) => {
                this.tabService.setLessonInModule(course.name, course.id, module.name, module.id, lesson.name);
            });
          });
        }
        this.loadItinerary();
      });
    });

  }

  loadItinerary() {
    this.lessonService.getLesson(this.lessonId).subscribe((data: Lesson) => {
      this.lesson = {
        id: data.id,
        name: data.name,
        slides: data.slides
      };
      this.lessonContent = '== ' + this.lesson.name + '\n';
      this.lessonContentExtended = '';
      this.slidesToContent(this.lesson.slides);
      this.extendContent(this.lessonContent);
    });
  }

  viewHTMLVersion() {
    this.contentHTML = [];
    this.slidesContentExtended = this.lessonContentExtended.split('===');
    if (!this.loginService.isAdmin) {
      this.index = '=== Índice\n\n';
      this.lesson.slides.forEach( (slide: Slide) => {
        this.index = this.index + '. ' + slide.name + '\n';
      });
      this.contentHTML.push(convertToHTML(this.index));
    }
    let counter = 0;
    this.slidesContentExtended.forEach( (slide: string) => {
      if (counter !== 0) {
        this.contentHTML.push(convertToHTML('=== ' + slide + '\n'));
      }
      counter = counter + 1;
    });
  }

  slidesToContent(slides: Slide[]) {
    if (slides.length === 0) {
      this.showSpinner = false;
    } else {
      slides.forEach((slide: Slide) => {
        this.lessonContent = this.lessonContent + slide.content + '// ' + slide.id + '\n\n';
      });
    }
  }

  async getEmbebedContent(content1: any, content2: any, unit: any, content: string, contentCounter: number, type: string) {
    let contentEmbebed;
    if (+unit) {
      if (type === 'card') {
        contentEmbebed = await this.unitService.getCard(+content1, +unit).toPromise().catch((error) => console.log(error));
        if (typeof contentEmbebed !== 'undefined') {
          this.extractedData.splice(contentCounter, 1, contentEmbebed.content);
        } else {
          this.extractedData.splice(contentCounter, 1, 'ERROR\n');
        }
      } else if (type === 'slide') {
        this.subSlide = true;
        contentEmbebed = await this.unitLessonService.getSlideFormLesson(+content1, +content2, +unit).toPromise().catch((error) => console.log(error));
        if (typeof contentEmbebed !== 'undefined') {
          this.extractedData.splice(contentCounter, 1, contentEmbebed.content.split('=== ')[1]);
        } else {
          this.extractedData.splice(contentCounter, 1, 'ERROR\n');
        }
      } else if (type === 'question') {
        /* contentEmbebed = await this.definitionQuestionService.getDefinitionQuestion(content1).toPromise();
        const url = 'http://localhost:4200/#/units/' + unit + '/itineraries/11/definitionQuestion/' + content1;
        this.extractedData.splice(contentCounter, 1, contentEmbebed.questionText + '\n\n- ' + url + '[Resolver^]'); */
      } else if (type === 'image') {
        contentEmbebed = await this.imageService.getImage(content1).toPromise().catch((error) => console.log(error));
        if (typeof contentEmbebed !== 'undefined') {
          const image = this.convertImage(contentEmbebed.image);
          const img = '++++\n' +
            '<img class="img-lesson" src="' + image + '">\n' +
            '++++\n' +
            '\n';
          this.extractedData.splice(contentCounter, 1, img);
        } else {
          this.extractedData.splice(contentCounter, 1, 'ERROR\n');
        }
      }
    } else {
      if (type === 'card') {
        contentEmbebed = await this.cardService.getCardByName(unit, content1).toPromise().catch((error) => console.log(error));
        if ((typeof contentEmbebed === 'undefined') || (contentEmbebed.length > 1)) {
          this.extractedData.splice(contentCounter, 1, 'ERROR\n');
        } else {
          this.extractedData.splice(contentCounter, 1, contentEmbebed[0].content);
        }
      } else if (type === 'slide') {
        this.subSlide = true;
        contentEmbebed = await this.slideService.getSlideByName(unit, content2, content1).toPromise().catch((error) => console.log(error));
        if ((typeof contentEmbebed === 'undefined') || (contentEmbebed.length > 1)) {
          this.extractedData.splice(contentCounter, 1, 'ERROR\n');
        } else {
          this.extractedData.splice(contentCounter, 1, contentEmbebed[0].content.split('=== ')[1]);
        }
      }
    }

    this.addExtractedData(content);
  }

  convertImage(bytes: any) {
    return 'data:image/png;base64,' + btoa(new Uint8Array(bytes).reduce((data, byte) =>
      data + String.fromCharCode(byte),
      ''));
  }

  contentCounterFunction(content: string) {
    this.contentCount = 0;
    let lines: string[];
    lines = content.split('\n');
    lines.forEach((line: string) => {
      let words: string[];
      words = line.split('.');
      if (words[0] === 'insert') {
        this.contentCount = this.contentCount + 1;
      }
    });
  }

  extendContent(content: string) {
    this.subSlide = false;
    this.contentCounterFunction(content);
    this.extractedData = [];
    for (let i = 0; i < this.contentCount; i++) {
      this.extractedData.push('');
    }
    this.position = [];
    let counter = 0;
    let contentCounter = 0;
    let lines: string[];
    lines = content.split('\n');
    lines.forEach((line: string) => {
      let words: string[];
      words = line.split('.');
      if (words[0] === 'insert') {
        let parameters: string[];
        parameters = words[1].split('/');
        if (parameters[0] === 'card') {
          this.position.push(counter);
          this.getEmbebedContent(parameters[1], null, parameters[2], content, contentCounter, 'card');
          contentCounter = contentCounter + 1;
        } else if (parameters[0] === 'slide') {
          this.position.push(counter);
          this.getEmbebedContent(parameters[1], parameters[2], parameters[3], content, contentCounter, 'slide');
          contentCounter = contentCounter + 1;
        } else if (parameters[0] === 'question') {
          this.position.push(counter);
          this.getEmbebedContent(Number(parameters[1]), null, Number(parameters[2]), content, contentCounter, 'question');
          contentCounter = contentCounter + 1;
        } else if (parameters[0] === 'image') {
          this.position.push(counter);
          this.getEmbebedContent(Number(parameters[1]), null, null, content, contentCounter, 'image');
          contentCounter = contentCounter + 1;
        }
      }
      this.addExtractedData(content);
      counter = counter + 1;
    });
  }

  addExtractedData(content: string) {
    this.componentsChecker = 0;
    this.lessonContentExtended = '';
    let lines: string[];
    lines = content.split('\n');
    for (let i = 0; i < this.position.length; i ++) {
      lines[this.position[i]] = this.extractedData[i];
    }
    lines.forEach((line: string) => {
      this.lessonContentExtended = this.lessonContentExtended + line + '\n';
    });
    this.extractedData.forEach((component: string) => {
      if (component !== '') {
        this.componentsChecker = this.componentsChecker + 1;
      }
    });
    if (this.componentsChecker === this.contentCount) {
      if (this.subSlide) {
        this.extendContent(this.lessonContentExtended);
      } else {
        this.showSpinner = false;
        this.viewHTMLVersion();
        this.progress = (1 / (this.contentHTML.length)) * 100;
      }
    }
  }

  contentToItinerary(content: string) {
    let slidesContent: string[];
    slidesContent = content.split('=== ');
    if (slidesContent[0].split(' ')[0] === '==') {
      this.lesson.name = '';
      for (let i = 1; i < slidesContent[0].split(' ').length; i ++) {
        this.lesson.name = this.lesson.name + slidesContent[0].split(' ')[i] + ' ';
      }
      this.lesson.name = this.lesson.name.split('\n')[0];
    }
    this.contentToSlides(slidesContent);
  }

  contentToSlides(content: string[]) {
    this.lesson.slides = [];
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
      this.lesson.slides.push(slide);
    }
  }

  updateHTMLView() {
    this.contentToItinerary(this.lessonContent);
    this.showSpinner = true;
    this.lessonService.updateLesson(this.lesson).subscribe((_) => {
      this.loadItinerary();
    }, (error) => {
      console.error(error);
    });
  }

  openBottomSheet(): void {
    this.bottomSheet.open(UnitsCardsToolComponent);
  }

  openImageBottomSheet(): void {
    this.bottomSheet.open(ImageComponent);
  }

  nextSlide() {
    this.contentSlide++;
    this.progress = this.progress + ((1 / (this.contentHTML.length)) * 100);
  }

  prevSlide() {
    this.contentSlide--;
    this.progress = this.progress - ((1 / (this.contentHTML.length)) * 100);
  }

  scrollSlides() {
    const div = document.getElementById('slide-area-editor');
    const div2 = document.getElementById('text-area-editor');
    div2.scrollTop = div.scrollTop;
  }

  scrollText() {
    const div = document.getElementById('slide-area-editor');
    const div2 = document.getElementById('text-area-editor');
    div.scrollTop = div2.scrollTop;
  }

}
