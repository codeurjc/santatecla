import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DefinitionQuestion} from '../definitionQuestion/definitionQuestion.model';
import {DefinitionAnswer} from '../definitionQuestion/definitionAnswer.model';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService, User} from '../../auth/login.service';
import {UnitService} from '../../unit/unit.service';
import {DefinitionQuestionService} from '../definitionQuestion/definitionQuestion.service';
import {Question} from '../question.model';
import {ListQuestion} from '../listQuestion/listQuestion.model';
import {TestQuestion} from '../testQuestion/testQuestion.model';
import {ListAnswer} from '../listQuestion/listAnswer.model';
import {TestAnswer} from '../testQuestion/testAnswer.model';
import {QuestionService} from '../question.service';
import {ListQuestionService} from '../listQuestion/listQuestion.service';
import {TestQuestionService} from '../testQuestion/testQuestion.service';
import {LessonEditorComponent} from '../../itinerary/lesson/lessonEditor/lesson-editor.component';

const QUESTION_TYPES = [
  {id: 'DefinitionQuestion', name: 'Definición'},
  {id: 'ListQuestion', name: 'Listado'},
  {id: 'TestQuestion', name: 'Test'},
];

export interface DialogData {
  unitId: number;
  question: Question;
}

@Component({
  templateUrl: './answerQuestionDialog.component.html',
  styleUrls: ['../question.component.css']
})

export class AnswerQuestionDialogComponent implements OnInit {

  questionTypes;

  definitionAnswer: DefinitionAnswer;
  listAnswer: ListAnswer;
  testAnswer: TestAnswer;

  definitionAnswers: DefinitionAnswer[];
  listAnswers: ListAnswer[];
  testAnswers: TestAnswer[];

  subtype: string;

  // Form attributes
  availableListAnswers: string[];
  chosenListAnswers: string[];
  questionDone: boolean;

  unitId: number;

  constructor(
    private router: Router,
    private unitService: UnitService,
    private questionService: QuestionService,
    private definitionQuestionService: DefinitionQuestionService,
    private listQuestionService: ListQuestionService,
    private testQuestionService: TestQuestionService,
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute,
    public dialogRef: MatDialogRef<LessonEditorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
    this.questionTypes = QUESTION_TYPES;
    this.unitId = this.data.unitId;
    this.initAnswers();
    this.getPreviousUserAnswers();
  }

  initAnswers() {
    this.definitionAnswer = {answerText: ''};
    this.listAnswer = {answer: [], correct: false};
    this.testAnswer = {answerText: '', correct: false};
    this.definitionAnswers = [];
    this.listAnswers = [];
    this.testAnswers = [];

    this.subtype = this.data.question.subtype;
    this.availableListAnswers = this.data.question.possibleAnswers;
    this.chosenListAnswers = [];
  }

  getPreviousUserAnswers() {
    switch (this.subtype) {
      case 'DefinitionQuestion': {
        this.questionService.getDefinitionUserAnswers(this.unitId, this.data.question.id, this.loginService.getCurrentUser().id).subscribe(
          (data: DefinitionAnswer[]) => {
            this.definitionAnswers = data;
          });
        break;
      }
      case 'ListQuestion': {
        this.questionService.getListUserAnswers(this.unitId, this.data.question.id, this.loginService.getCurrentUser().id).subscribe(
          (data: ListAnswer[]) => {
            this.listAnswers = data;
          });
        break;
      }
      case 'TestQuestion': {
        this.questionService.getTestUserAnswers(this.unitId, this.data.question.id, this.loginService.getCurrentUser().id).subscribe(
          (data: TestAnswer[]) => {
            this.testAnswers = data;
          });
        break;
      }
      default: {
        console.log('Not valid');
        break;
      }
    }
  }

  sendAnswer() {
    switch (this.subtype) {
      case 'DefinitionQuestion': {
        this.sendDefinitionAnswer();
        break;
      }
      case 'ListQuestion': {
        this.sendListAnswer();
        break;
      }
      case 'TestQuestion': {
        this.sendTestAnswer();
        break;
      }
      default: {
        console.log('Not valid');
        break;
      }
    }
    this.dialogRef.close(1);
  }

  sendDefinitionAnswer() {
    if (this.definitionAnswer.answerText === '') {
      // TODO
      console.log('error: inputs cannot be empty');
      return;
    }
    this.definitionAnswer = {
      answerText: this.definitionAnswer.answerText,
      correct: false,
      corrected: false,
      justification: '',
      unitId: this.unitId,
      // TODO moduleId: 1
      user: this.loginService.getCurrentUser()
    };

    this.questionService.addUnitDefinitionAnswer(this.unitId, this.data.question.id, this.definitionAnswer).subscribe(
      (_) => {
        this.finishDefinitionQuestion();
      },
      (err) => console.log(err)
    );

  }

  finishDefinitionQuestion() {
    // TODO
    console.log('question done');
  }

  sendListAnswer() {

  }

  sendTestAnswer() {

  }

  newChosenAnswer(answer: string) {
    this.chosenListAnswers.push(answer);
    this.availableListAnswers.splice(this.availableListAnswers.indexOf(answer), 1);
  }

  deleteChosenAnswer(answer: string) {
    this.availableListAnswers.push(answer);
    this.chosenListAnswers.splice(this.chosenListAnswers.indexOf(answer), 1);
  }

  changeTextArea(event: Event) {
    this.fitContent(event.target as HTMLTextAreaElement);
  }

  fitContent(textArea: HTMLTextAreaElement) {
    textArea.style.overflow = 'hidden';
    textArea.style.height = '0px';
    textArea.style.height = textArea.scrollHeight + 'px';
  }

  onNoClick(): void {
    this.dialogRef.close(2);
  }
}
