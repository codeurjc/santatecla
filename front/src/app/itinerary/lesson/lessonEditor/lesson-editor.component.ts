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
import {LessonSlidesToolComponent} from '../lessonTools/lesson-slides-tool.component';
import {DefinitionQuestion} from '../../../question/definitionQuestion/definitionQuestion.model';
import {ListQuestion} from '../../../question/listQuestion/listQuestion.model';
import {TestQuestion} from '../../../question/testQuestion/testQuestion.model';
import {QuestionService} from '../../../question/question.service';
import {AddQuestionDialogComponent} from '../../../question/addQuestionDialog/addQuestionDialog.component';
import {MatDialog} from '@angular/material/dialog';
import {AnswerQuestionDialogComponent} from '../../../question/answerQuestionDialog/answerQuestionDialog.component';
import {Question} from '../../../question/question.model';
import {UnitsBlocksToolComponent} from '../../module/moduleEditor/units-blocks-tool.component';
import {UnitsQuestionsToolComponent} from '../lessonTools/units-questions-tool.component';


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

  newQuestionsIds: number[];
  questions: Question[];
  questionsCount: number;

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
              private cardService: CardService,
              private questionService: QuestionService,
              public dialog: MatDialog) {
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
    this.newQuestionsIds = [];

    this.lessonService.getLesson(this.lessonId).subscribe((data: Lesson) => {
      this.lesson = {
        id: data.id,
        name: data.name,
        slides: data.slides,
        questionsIds: data.questionsIds
      };
      this.loadQuestions();
      this.lessonContent = '== ' + this.lesson.name + '\n';
      this.lessonContentExtended = '';
      this.slidesToContent(this.lesson.slides);
      this.extendContent(this.lessonContent);
    });
  }

  loadQuestions() {
    this.questions = [];
    this.lesson.questionsIds.forEach((questionId) => {
      this.questions.push();
    });
    this.lesson.questionsIds.forEach((questionId, index) => {
      this.questionService.getQuestion(questionId).subscribe((data: Question) => {
        this.questions.splice(index, 0, data);
      });
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
        contentEmbebed = await this.questionService.getUnitQuestion(unit, content1).toPromise().catch((error) => console.log(error));
        if (typeof contentEmbebed !== 'undefined') {
          this.extractedData.splice(contentCounter, 1, '*Ejercicio ' + content2 + '* ' + contentEmbebed.questionText);
          let exist = false;
          this.newQuestionsIds.forEach((question) => {
            if (question === contentEmbebed.id) {
              exist = true;
              return;
            }
          });
          if (!exist) { this.newQuestionsIds.splice(content2, 0, contentEmbebed.id); }
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

    if (type === 'image') {
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

    this.addExtractedData(content);
  }

  convertImage(bytes: any) {
    return 'data:image/png;base64,' + btoa(new Uint8Array(bytes).reduce((data, byte) =>
      data + String.fromCharCode(byte),
      ''));
  }

  contentCounterFunction(content: string) {
    this.contentCount = 0;
    this.questionsCount = 0;
    let lines: string[];
    lines = content.split('\n');
    lines.forEach((line: string) => {
      let words: string[];
      words = line.split('.');
      if (words[0] === 'insert') {
        this.contentCount = this.contentCount + 1;
        if (words[1].split('/')[0] === 'question') {
          this.questionsCount = this.questionsCount + 1;
        }
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
    for (let i = 0; i < this.questionsCount; i++) {
      this.newQuestionsIds.push();
    }
    this.position = [];
    let counter = 0;
    let contentCounter = 0;
    let questionCounter = 0;
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
          this.getEmbebedContent(Number(parameters[1]), questionCounter, Number(parameters[2]), content, contentCounter, 'question');
          questionCounter = questionCounter + 1;
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
        this.updateQuestionsBlocks(this.lesson.questionsIds, this.newQuestionsIds);
        this.contentToItinerary(this.lessonContent);
        this.lessonService.updateLesson(this.lesson).subscribe();
        this.progress = (1 / (this.contentHTML.length)) * 100;
      }
    }
  }

  updateQuestionsBlocks(questions, newQuestions) {
    const toAdd = newQuestions.filter(x => !questions.includes(x));
    const toDelete = questions.filter(x => !newQuestions.includes(x));

    toAdd.forEach(q => {
      this.questionService.addBlockToQuestion(this.unitId, q, this.lesson.id).subscribe(
        () => {},
        (err) => console.log(err)
      );
    });

    toDelete.forEach(q => {
      this.questionService.deleteQuestionBlock(this.unitId, q, this.lesson.id).subscribe(
        () => {},
        (err) => console.log(err)
      );
    });
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
    this.lesson.questionsIds = this.newQuestionsIds;
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

  openCardsBottomSheet(): void {
    this.bottomSheet.open(UnitsCardsToolComponent);
  }

  openImageBottomSheet(): void {
    this.bottomSheet.open(ImageComponent);
  }

  openSlidesBottomSheet(): void {
    this.bottomSheet.open(LessonSlidesToolComponent);
  }

  openQuestionsBottomSheet(): void {
    this.bottomSheet.open(UnitsQuestionsToolComponent);
  }

  nextSlide() {
    this.contentSlide++;
    this.progress = this.progress + ((1 / (this.contentHTML.length)) * 100);
  }

  prevSlide() {
    this.contentSlide--;
    this.progress = this.progress - ((1 / (this.contentHTML.length)) * 100);
  }

  scrollText() {
    const div = document.getElementById('slide-area-editor');
    const div2 = document.getElementById('text-area-editor');
    div.scrollTop = div2.scrollTop;
  }

  openQuestion(questionID: number, subtype: string) {
    switch (subtype) {
      case 'DefinitionQuestion': {
        this.getDefinitionQuestion(questionID);
        break;
      }
      case 'ListQuestion': {
        this.getListQuestion(questionID);
        break;
      }
      case 'TestQuestion': {
        this.getTestQuestion(questionID);
        break;
      }
      default: {
        console.log('Not valid');
        break;
      }
    }
  }

  getDefinitionQuestion(questionID: number) {
    this.questionService.getUnitDefinitionQuestion(this.unitId, questionID).subscribe(
      (data: DefinitionQuestion) => {
        this.openAnswerQuestionDialog(data);
      }
    );
  }

  getListQuestion(questionID: number) {
    this.questionService.getUnitListQuestion(this.unitId, questionID).subscribe(
      (data: ListQuestion) => {
        this.openAnswerQuestionDialog(data);
      }
    );
  }

  getTestQuestion(questionID: number) {
    this.questionService.getUnitTestQuestion(this.unitId, questionID).subscribe(
      (data: TestQuestion) => {
        this.openAnswerQuestionDialog(data);
      }
    );
  }

  openAnswerQuestionDialog(answeringQuestion) {
    const dialogRef = this.dialog.open(AnswerQuestionDialogComponent, {
      width: '600px',
      data: {unitId: this.unitId, question: answeringQuestion}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.ngOnInit();
      }
    });
  }
}
