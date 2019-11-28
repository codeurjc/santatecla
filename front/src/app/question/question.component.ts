import {Component, OnInit, SystemJsNgModuleLoader} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {LoginService} from '../auth/login.service';
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
import {Itineray} from '../itinerary/itinerary.model';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  templateUrl: './question.component.html',
  styleUrls: [
    './question.component.css'
  ]
})

export class QuestionComponent implements OnInit {
  questions: Question[];
  definitionQuestions: DefinitionQuestion[];
  listQuestions: ListQuestion[];
  testQuestions: TestQuestion[];

  definitionQuestion: DefinitionQuestion;
  listQuestion: ListQuestion;
  testQuestion: TestQuestion;

  questionTypes = ['DefinitionQuestion', 'ListQuestion', 'TestQuestion'];

  // Add Question attributes
  subtype: string;
  questionInput: string;
  answerInput: string;
  possibleAnswers: Map<string, boolean>;
  correct: boolean;
  correctTestAnswerSelected: boolean;

  unit: Unit;
  unitId: number;
  itinerariesTabs: Itineray[];

  constructor(
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

    // Add Question attributes
    this.subtype = 'DefinitionQuestion';
    this.resetAddQuestionForm();

    this.activatedRoute.params.subscribe(params => {
      this.unitId = params.unitId;
    });

    this.unitService.getUnit(this.unitId).subscribe((data: Unit) => {
      this.unit = {
        id: data.id,
        name: data.name,
        itineraries: data.itineraries
      };
      this.itinerariesTabs = this.unit.itineraries;
    });

    this.getQuestions();

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
      (error) => console.log(error)
    );
  }

  sendTestQuestion() {
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

  addPossibleListAnswer() {
    this.possibleAnswers = this.possibleAnswers.set(this.answerInput, this.correct);
    this.answerInput = '';
  }

  addPossibleTestAnswer() {
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
