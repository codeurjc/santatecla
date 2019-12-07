import {Component, OnInit, ViewChild} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Question} from './question.model';
import {QuestionService} from './question.service';
import {DefinitionQuestionService} from './definitionQuestion/definitionQuestion.service';
import {ListQuestionService} from './listQuestion/listQuestion.service';
import {DefinitionQuestion} from './definitionQuestion/definitionQuestion.model';
import {ListQuestion} from './listQuestion/listQuestion.model';
import {TestQuestion} from './testQuestion/testQuestion.model';
import {TestQuestionService} from './testQuestion/testQuestion.service';
import {Unit} from '../unit/unit.model';
import {UnitService} from '../unit/unit.service';
import {Lesson} from '../itinerary/lesson/lesson.model';
import {LoginService} from '../auth/login.service';
import {MatDialog} from '@angular/material/dialog';
import {DefinitionAnswer} from './definitionQuestion/definitionAnswer.model';
import {AnswerDefinitionDialogComponent} from './answerQuestionDialog/answerDefinitionDialog.component';

@Component({
  selector: 'app-questions',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {

  questions: Question[];
  definitionQuestions: DefinitionQuestion[];
  listQuestions: ListQuestion[];
  testQuestions: TestQuestion[];

  definitionQuestion: DefinitionQuestion;
  listQuestion: ListQuestion;
  testQuestion: TestQuestion;

  questionTypes: string[];
  questionTypeNames: Map<string, string>;

  // Add Question attributes
  subtype: string;
  questionInput: string;
  answerInput: string;
  possibleAnswers: Map<string, boolean>;
  correct: boolean;
  correctTestAnswerSelected: boolean;

  unit: Unit;
  unitId: number;
  itinerariesTabs: Lesson[];

  constructor(
    public loginService: LoginService,
    public dialog: MatDialog,
    private questionService: QuestionService,
    private definitionQuestionService: DefinitionQuestionService,
    private listQuestionService: ListQuestionService,
    private testQuestionService: TestQuestionService,
    private unitService: UnitService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }
  ngOnInit() {

    this.questions = [];
    this.initQuestionTypes();

    // Add Question attributes
    this.subtype = 'DefinitionQuestion';
    this.resetAddQuestionForm();

    this.activatedRoute.params.subscribe(params => {
      this.unitId = params.unitId;
    });

    this.getQuestions();

  }

  initQuestionTypes() {
    this.questionTypes = ['DefinitionQuestion', 'ListQuestion', 'TestQuestion'];

    this.questionTypeNames = new Map<string, string>();
    this.questionTypeNames.set('DefinitionQuestion', 'Definición');
    this.questionTypeNames.set('ListQuestion', 'Listado');
    this.questionTypeNames.set('TestQuestion', 'Test');
  }

  getQuestions() {
    this.questions = [];

    this.unitService.getUnitDefinitionQuestions(this.unitId).subscribe((data: DefinitionQuestion[]) => {
      this.definitionQuestions = data;
      this.questions = this.questions.concat(data);
    });

    this.unitService.getUnitListQuestions(this.unitId).subscribe((data: ListQuestion[]) => {
      this.listQuestions = data;
      this.questions = this.questions.concat(data);
    });

    this.unitService.getUnitTestQuestions(this.unitId).subscribe((data: TestQuestion[]) => {
      this.testQuestions = data;
      this.questions = this.questions.concat(data);
    });
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
    this.unitService.addUnitDefinitionQuestion(this.unitId, this.definitionQuestion).subscribe(
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
    this.unitService.addUnitListQuestion(this.unitId, this.listQuestion).subscribe(
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
    this.unitService.addUnitTestQuestion(this.unitId, this.testQuestion).subscribe(
      (_) => {
        this.resetAddQuestionForm();
        // TODO Remove it
        this.ngOnInit();
      },
      (error) => console.log(error)
    );
  }

  deleteTestQuestion(questionID: number) {
    this.unitService.deleteUnitQuestion(this.unitId, questionID).subscribe(
      (_) => {
        // TODO Remove it
        this.ngOnInit();
      },
      (error) => {
        console.log(error);
        this.ngOnInit();
      }
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

  resetAddQuestionForm() {
    this.questionInput = '';
    this.answerInput = '';
    this.possibleAnswers = new Map();
    this.correct = false;
    this.correctTestAnswerSelected = false;
  }

  sendDefinitionAnswer(questionID: number) {
    if (this.answerInput === '') {
      // TODO
      console.log('error: inputs cannot be empty');
      return;
    }
    const answer: DefinitionAnswer = {
      answerText: this.answerInput,
      user: this.loginService.getCurrentUser(),
      unitId: this.unitId
    };
    this.unitService.addUnitDefinitionAnswer(this.unitId, questionID, answer).subscribe(
      (_) => {
        // TODO Remove it
        this.ngOnInit();
      },
      (error) => {
        console.log(error);
        this.ngOnInit();
      }
    );
  }

  openAnswerDialog(q: Question): void {
    const dialogRef = this.dialog.open(AnswerDefinitionDialogComponent, {
      width: '250px',
      data: {question: q, answerInput: this.answerInput}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.answerInput = result;
      if ((typeof this.answerInput !== 'undefined') && (this.answerInput !== '')) {
        this.sendDefinitionAnswer(q.id);
      }
    });
  }


}
