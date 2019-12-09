import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {QuestionComponent} from '../question.component';
import {DefinitionQuestion} from '../definitionQuestion/definitionQuestion.model';
import {ListQuestion} from '../listQuestion/listQuestion.model';
import {TestQuestion} from '../testQuestion/testQuestion.model';
import {LoginService} from '../../auth/login.service';
import {Question} from '../question.model';
import {QuestionService} from '../question.service';

const QUESTION_TYPES = [
  {id: 'DefinitionQuestion', name: 'Definición'},
  {id: 'ListQuestion', name: 'Listado'},
  {id: 'TestQuestion', name: 'Test'},
];

export interface DialogData {
  isEditing: boolean;
  unitId: number;
  question: Question;
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
    private questionService: QuestionService,
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute,
    public dialogRef: MatDialogRef<QuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {

    this.questionTypes = QUESTION_TYPES;

    // Add Question attributes
    this.subtype = 'DefinitionQuestion';
    this.resetAddQuestionForm();

    if (this.data.isEditing) {
      this.setEditQuestionForm();
    }

  }

  resetAddQuestionForm() {
    this.questionInput = '';
    this.answerInput = '';
    this.possibleAnswers = new Map();
    this.correct = false;
    this.correctTestAnswerSelected = false;
  }

  setEditQuestionForm() {
    this.subtype = this.data.question.subtype
    this.questionInput = this.data.question.questionText;
    this.answerInput = '';
    this.correct = false;

    if (this.subtype === 'ListQuestion') {
      this.possibleAnswers = new Map();
      for (const answer of this.data.question.possibleAnswers) {
        this.possibleAnswers.set(answer, this.data.question.correctAnswers.includes(answer));
      }
    }

    if (this.subtype === 'TestQuestion') {
      this.possibleAnswers = new Map();
      for (const answer of this.data.question.possibleAnswers) {
        this.possibleAnswers.set(answer, answer === this.data.question.correctAnswer);
        if (!this.correctTestAnswerSelected) {
          this.correctTestAnswerSelected = answer === this.data.question.correctAnswer
        }
      }
    }
  }

  setQuestion(subtype: string) {
    this.subtype = subtype;
    this.resetAddQuestionForm();
  }

  sendQuestion() {
    switch (this.subtype) {
      case 'DefinitionQuestion': {
        this.sendDefinitionQuestion();
        break;
      }
      case 'ListQuestion': {
        this.sendListQuestion();
        break;
      }
      case 'TestQuestion': {
        this.sendTestQuestion();
        break;
      }
      default: {
        console.log('Not valid');
        break;
      }
    }
    this.dialogRef.close(1);
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

    if (!this.data.isEditing) {
      this.questionService.addUnitDefinitionQuestion(this.data.unitId, this.definitionQuestion).subscribe(
        (_) => {
          this.resetAddQuestionForm();
        },
        (error) => console.log(error)
      );
    } else {
      this.questionService.editUnitDefinitionQuestion(this.data.unitId, this.data.question.id, this.definitionQuestion).subscribe(
        (_) => {
          this.resetAddQuestionForm();
        },
        (error) => console.log(error)
      );
    }
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

    if (!this.data.isEditing) {
      this.questionService.addUnitListQuestion(this.data.unitId, this.listQuestion).subscribe(
      (_) => {
          this.resetAddQuestionForm();
        },
        (error) => {
          console.log(error);
          this.ngOnInit();
        }
      );
    } else {
      this.questionService.editUnitListQuestion(this.data.unitId, this.data.question.id, this.listQuestion).subscribe(
        (_) => {
          this.resetAddQuestionForm();
        },
        (error) => {
          console.log(error);
          this.ngOnInit();
        }
      );
    }

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
    if (!this.data.isEditing) {
      this.questionService.addUnitTestQuestion(this.data.unitId, this.testQuestion).subscribe(
        (_) => {
          this.resetAddQuestionForm();
        },
        (error) => console.log(error)
      );
    } else {
      this.questionService.editUnitTestQuestion(this.data.unitId, this.data.question.id, this.testQuestion).subscribe(
        (_) => {
          this.resetAddQuestionForm();
        },
        (error) => console.log(error)
      );
    }
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
      this.correct = false;
      this.correctTestAnswerSelected = true;
    } else {
      this.possibleAnswers.set(this.answerInput, false);
    }
    this.answerInput = '';
  }

  onNoClick(): void {
    this.dialogRef.close(2);
  }

  changeTextArea(event: Event) {
    this.fitContent(event.target as HTMLTextAreaElement);
  }

  fitContent(textArea: HTMLTextAreaElement) {
    textArea.style.overflow = 'hidden';
    textArea.style.height = '0px';
    textArea.style.height = textArea.scrollHeight + 'px';
  }
}
