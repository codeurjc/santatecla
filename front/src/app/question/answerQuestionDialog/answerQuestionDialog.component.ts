import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DefinitionQuestion} from '../definitionQuestion/definitionQuestion.model';
import {DefinitionAnswer} from '../definitionQuestion/definitionAnswer.model';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../auth/login.service';
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
    this.initAnswers();
    this.getPreviousUserAnswers();

    this.activatedRoute.params.subscribe(params => {
      this.unitId = params.unitId;
    });

  }

  initAnswers() {
    this.definitionAnswer = {answerText: ''};
    this.listAnswer = {answer: [], correct: false};
    this.testAnswer = {answerText: '', correct: false};
    this.definitionAnswers = [];
    this.listAnswers = [];
    this.testAnswers = [];
  }

  getPreviousUserAnswers() {
    this.definitionQuestionService.getUserAnswers(this.data.question.id, this.loginService.getCurrentUser().id).subscribe(
      (data: DefinitionAnswer[]) => {
        this.definitionAnswers = data;
      });
    this.listQuestionService.getUserAnswers(this.data.question.id, this.loginService.getCurrentUser().id).subscribe(
      (data: ListAnswer[]) => {
        this.listAnswers = data;
      });
    this.testQuestionService.getUserAnswers(this.data.question.id, this.loginService.getCurrentUser().id).subscribe(
      (data: TestAnswer[]) => {
        this.testAnswers = data;
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
