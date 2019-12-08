import {Component, Inject, OnInit} from '@angular/core';
import {DefinitionQuestion} from '../definitionQuestion/definitionQuestion.model';
import {ActivatedRoute, Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {QuestionComponent} from '../question.component';
import {ListQuestion} from '../listQuestion/listQuestion.model';
import {TestQuestion} from '../testQuestion/testQuestion.model';
import {UnitService} from '../../unit/unit.service';
import {LoginService} from '../../auth/login.service';

const QUESTION_TYPES = [
  {id: 'DefinitionQuestion', name: 'Definición'},
  {id: 'ListQuestion', name: 'Listado'},
  {id: 'TestQuestion', name: 'Test'},
];

export interface DialogData {
  unitId: number;
}

@Component({
  templateUrl: './addQuestionDialog.component.html',
  styleUrls: ['../question.component.css']
})

export class AddQuestionDialogComponent implements OnInit {

  questionTypes;

  definitionQuestion: DefinitionQuestion;
  listQuestion: ListQuestion;
  testQuestion: TestQuestion;

  // Add Question attributes
  subtype: string;
  questionInput: string;
  answerInput: string;
  possibleAnswers: Map<string, boolean>;
  correct: boolean;
  correctTestAnswerSelected: boolean;

  constructor(
    private router: Router,
    private unitService: UnitService,
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute,
    public dialogRef: MatDialogRef<QuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {

    this.questionTypes = QUESTION_TYPES;

    // Add Question attributes
    this.subtype = 'DefinitionQuestion';
    this.resetAddQuestionForm();
  }

  resetAddQuestionForm() {
    this.questionInput = '';
    this.answerInput = '';
    this.possibleAnswers = new Map();
    this.correct = false;
    this.correctTestAnswerSelected = false;
  }

  setQuestion(subtype: string) {
    this.subtype = subtype;
    this.resetAddQuestionForm();
  }

  sendDefinitionQuestion() {
    if (this.questionInput === '') {
      // TODO
      console.log('error: inputs cannot be empty');
      return;
    }
    this.definitionQuestion = {
      questionText: this.questionInput,
      subtype: 'DefinitionQuestion'
    };
    this.unitService.addUnitDefinitionQuestion(this.data.unitId, this.definitionQuestion).subscribe(
      (_) => {
        this.resetAddQuestionForm();
        // TODO Remove it
        this.ngOnInit();
      },
      (error) => console.log(error)
    );
  }

  sendListQuestion() {
    if (this.questionInput === '') {
      // TODO
      console.log('error: inputs cannot be empty');
      return;
    }
    let ca = [];
    this.possibleAnswers.forEach((value: boolean, key: string) => {
      if (value) {
        ca = ca.concat(key);
      }
    });
    this.listQuestion = {
      questionText: this.questionInput,
      subtype: 'ListQuestion',
      possibleAnswers: Array.from(this.possibleAnswers.keys()),
      correctAnswers: ca
    };
    this.unitService.addUnitListQuestion(this.data.unitId, this.listQuestion).subscribe(
      (_) => {
        this.resetAddQuestionForm();
        // TODO Remove it
        this.ngOnInit();
      },
      (error) => {
        console.log(error);
        this.ngOnInit();
      }
    );
  }

  sendTestQuestion() {
    if (this.questionInput === '') {
      // TODO
      console.log('error: inputs cannot be empty');
      return;
    }
    let ca = [];
    this.possibleAnswers.forEach((value: boolean, key: string) => {
      if (value) {
        ca = ca.concat(key);
      }
    });
    this.testQuestion = {
      questionText: this.questionInput,
      subtype: 'TestQuestion',
      possibleAnswers: Array.from(this.possibleAnswers.keys()),
      correctAnswer: ca[0]
    };
    this.unitService.addUnitTestQuestion(this.data.unitId, this.testQuestion).subscribe(
      (_) => {
        this.resetAddQuestionForm();
        // TODO Remove it
        this.ngOnInit();
      },
      (error) => console.log(error)
    );
  }
  addPossibleListAnswer() {
    if (this.answerInput === '') {
      // TODO
      console.log('error: inputs cannot be empty');
      return;
    }
    this.possibleAnswers = this.possibleAnswers.set(this.answerInput, this.correct);
    this.answerInput = '';
  }

  addPossibleTestAnswer() {
    if (this.answerInput === '') {
      // TODO
      console.log('error: inputs cannot be empty');
      return;
    }
    if (!this.correctTestAnswerSelected && this.correct) {
      this.possibleAnswers.set(this.answerInput, true);
      this.correctTestAnswerSelected = true;
    } else if (!this.correctTestAnswerSelected && !this.correct) {
      this.possibleAnswers.set(this.answerInput, false);
    } else {
      this.possibleAnswers.set(this.answerInput, false);
    }
    this.answerInput = '';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
