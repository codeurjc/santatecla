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
import {UnitService} from '../unit/unit.service';
import {Lesson} from '../itinerary/lesson/lesson.model';
import {LoginService} from '../auth/login.service';
import {MatDialog} from '@angular/material/dialog';
import {DefinitionAnswer} from './definitionQuestion/definitionAnswer.model';
import {AnswerDefinitionDialogComponent} from './answerQuestionDialog/answerDefinitionDialog.component';
import {ConfirmActionComponent} from '../confirmAction/confirm-action.component';
import {AddQuestionDialogComponent} from './addQuestionDialog/addQuestionDialog.component';

const QUESTION_TYPES = [
  {id: 'DefinitionQuestion', name: 'Definición'},
  {id: 'ListQuestion', name: 'Listado'},
  {id: 'TestQuestion', name: 'Test'},
];

@Component({
  selector: 'app-questions',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {

  displayedColumns: string[] = ['question', 'subtype', 'edit', 'delete'];
  showSpinner = false;

  questions: Question[];
  definitionQuestions: DefinitionQuestion[];
  listQuestions: ListQuestion[];
  testQuestions: TestQuestion[];

  definitionQuestion: DefinitionQuestion;
  listQuestion: ListQuestion;
  testQuestion: TestQuestion;

  questionTypes: Map<string, string>;

  answerInput: string;

  confirmDialog = {
    text: 'Se eliminará el ejercicio permanentemente',
    button1: 'Cancelar',
    button2: 'Borrar'
  };

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

    this.showSpinner = true;

    this.questions = [];
    this.questionTypes = new Map();
    for (const entry of QUESTION_TYPES) {
      this.questionTypes.set(entry.id, entry.name);
    }

    this.answerInput = '';

    this.activatedRoute.params.subscribe(params => {
      this.unitId = params.unitId;
    });

    // this.getQuestions();
    this.getAllQuestions();
  }

  getQuestions() {
    this.unitService.getUnitQuestions(this.unitId).subscribe((data: Question[]) => {
      this.questions = data;
    });
  }

  getAllQuestions() {
    this.questions = [];

    this.unitService.getUnitDefinitionQuestions(this.unitId).subscribe((data: DefinitionQuestion[]) => {
      this.definitionQuestions = data;
      this.questions = this.questions.concat(data);
      this.showSpinner = false;
    });

    this.unitService.getUnitListQuestions(this.unitId).subscribe((data: ListQuestion[]) => {
      this.listQuestions = data;
      this.questions = this.questions.concat(data);
      this.showSpinner = false;
    });

    this.unitService.getUnitTestQuestions(this.unitId).subscribe((data: TestQuestion[]) => {
      this.testQuestions = data;
      this.questions = this.questions.concat(data);
      this.showSpinner = false;
    });
  }

  editQuestion(questionID: number) {
    console.log('TODO');
  }

  deleteQuestion(questionID: number) {
    const dialogRef = this.dialog.open(ConfirmActionComponent, {
      width: '400px',
      data: {confirmText: this.confirmDialog.text, button1: this.confirmDialog.button1, button2: this.confirmDialog.button2}
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
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
    });
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

  openAddQuestionDialog() {
    const dialogRef = this.dialog.open(AddQuestionDialogComponent, {
      width: '600px',
      data: {unitId: this.unitId}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
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
