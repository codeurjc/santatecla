import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '../../../auth/login.service';
import {TabService} from '../../../tab/tab.service';
import {Module} from '../../module/module.model';
import {Unit} from '../../../unit/unit.model';
import {Lesson} from '../lesson.model';
import {UnitService} from '../../../unit/unit.service';
import {ModuleService} from '../../module/module.service';
import {LessonService} from '../lesson.service';
import {UnitLessonService} from '../unit-lesson.service';
import {DefinitionQuestionService} from '../../../question/definitionQuestion/definitionQuestion.service';
import {Slide} from '../../../slide/slide.model';
import {CourseService} from '../../../course/course.service';
import {Course} from '../../../course/course.model';

import Asciidoctor from 'asciidoctor';

function convertToHTML(text) {
  const asciidoctor = Asciidoctor();
  const html = asciidoctor.convert(text);
  return(html);
}

@Component({
  selector: 'app-lesson-view',
  templateUrl: './lesson-view.component.html',
  styleUrls: ['./lesson-view.component.css']
})

export class LessonViewComponent implements OnInit {

  contentHtml: any[];

  lessonContent: any;
  lessonContentExtended: string;

  slidesContentExtended: string[];

  showSpinner = false;
  componentsChecker: number;

  extractedData: string[];
  position: number[];

  subSlide: boolean;
  contentCount: number;


  id: number;
  moduleId: number;
  lessonId: number;

  lesson: Lesson;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private loginService: LoginService,
              private tabService: TabService,
              private unitService: UnitService,
              private courseService: CourseService,
              private moduleService: ModuleService,
              private lessonService: LessonService,
              private unitLessonService: UnitLessonService,
              private definitionQuestionService: DefinitionQuestionService,
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {

      this.id = params.id;
      this.moduleId = params.moduleId;
      this.lessonId = params.lessonId;

      if (this.loginService.isAdmin) {
        this.unitService.getUnit(this.id).subscribe((unit: Unit) => {
          this.moduleService.getModule(this.moduleId).subscribe((module: Module) => {
            this.lessonService.getLesson(this.lessonId).subscribe((lesson: Lesson) => {
              this.lesson = lesson;
              this.tabService.setLessonInModule(unit.name, this.id, module.name, this.moduleId, lesson.name);
              this.loadItinerary();
            });
          });
        });
      } else {
        this.courseService.getCourse(this.id).subscribe((course: Course) => {
          this.moduleService.getModule(this.moduleId).subscribe((module: Module) => {
            this.lessonService.getLesson(this.lessonId).subscribe((lesson: Lesson) => {
              this.lesson = lesson;
              this.tabService.setLessonInModule(course.name, this.id, module.name, this.moduleId, lesson.name);
              this.loadItinerary();
            });
          });
        });
      }

    });
  }

  loadItinerary() {
    this.showSpinner = true;

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

  slidesToContent(slides: Slide[]) {
    if (slides.length === 0) {
      this.showSpinner = false;
    } else {
      slides.forEach((slide: Slide) => {
        this.lessonContent = this.lessonContent + slide.content + '// ' + slide.id + '\n\n';
      });
    }
  }

  viewHTMLVersion() {
    this.contentHtml = [];
    this.slidesContentExtended = this.lessonContentExtended.split('===');
    let counter = 0;
    this.slidesContentExtended.forEach( (slide: string) => {
      if (counter !== 0) {
        this.contentHtml.push(convertToHTML('=== ' + slide + '\n'));
      }
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
      }
    }
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
      if (words[0] === 'assert') {
        let parameters: string[];
        parameters = words[1].split('/');
        if (parameters[0] === 'card') {
          this.position.push(counter);
          this.getEmbebedContent(Number(parameters[1]), null, Number(parameters[2]), content, contentCounter, 'card');
          contentCounter = contentCounter + 1;
        } else if (parameters[0] === 'slide') {
          this.position.push(counter);
          this.getEmbebedContent(Number(parameters[1]), Number(parameters[2]), Number(parameters[3]), content, contentCounter, 'slide');
          contentCounter = contentCounter + 1;
        } else if (parameters[0] === 'question') {
          this.position.push(counter);
          this.getEmbebedContent(Number(parameters[1]), null, Number(parameters[2]), content, contentCounter, 'question');
          contentCounter = contentCounter + 1;
        }
      }
      this.addExtractedData(content);
      counter = counter + 1;
    });
  }

  contentCounterFunction(content: string) {
    this.contentCount = 0;
    let lines: string[];
    lines = content.split('\n');
    lines.forEach((line: string) => {
      let words: string[];
      words = line.split('.');
      if (words[0] === 'assert') {
        this.contentCount = this.contentCount + 1;
      }
    });
  }

  async getEmbebedContent(contentId: number, contentId2: number, unitId: number, content: string, contentCounter: number, type: string) {
    let contentEmbebed;
    if (type === 'card') {
      contentEmbebed = await this.unitService.getCard(contentId, unitId).toPromise();
      this.extractedData.splice(contentCounter, 1, contentEmbebed.content);
    } else if (type === 'slide') {
      this.subSlide = true;
      contentEmbebed = await this.unitLessonService.getSlideFormLesson(contentId, contentId2, unitId).toPromise();
      this.extractedData.splice(contentCounter, 1, '=' + contentEmbebed.content);
    } else if (type === 'question') {
      contentEmbebed = await this.definitionQuestionService.getDefinitionQuestion(contentId).toPromise();
      const url = 'http://localhost:4200/#/units/' + unitId + '/itineraries/11/definitionQuestion/' + contentId;
      this.extractedData.splice(contentCounter, 1, contentEmbebed.questionText + '\n\n- ' + url + '[Resolver^]');
    }
    this.addExtractedData(content);
  }

}
