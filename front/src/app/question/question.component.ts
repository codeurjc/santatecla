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
import {ViewService} from '../view/view.service';
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
  subtype: string;

  possibleAnswers: Map<string, boolean>;
  correct: boolean;

  unit: Unit;
  unitId: number;
  itinerariesTabs: Itineray[];

  constructor(
    private questionService: QuestionService,
    private definitionQuestionService: DefinitionQuestionService,
    private listQuestionService: ListQuestionService,
    private testQuestionService: TestQuestionService,
    private viewService: ViewService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.subtype = 'DefinitionQuestion';
    this.questions = [];
    this.possibleAnswers = new Map();
    this.activatedRoute.params.subscribe(params => {
      this.unitId = params['unitId'];
    });

    this.viewService.getUnit(this.unitId).subscribe((data: Unit) => {
      this.unit = {
        id: data['id'],
        name: data['name'],
        itineraries: data['itineraries']
      };
      this.itinerariesTabs = this.unit.itineraries;
    });

    this.viewService.getUnitDefinitionQuestions(this.unitId).subscribe((data: DefinitionQuestion[]) => {
      this.definitionQuestions = data;
      this.questions = this.questions.concat(data);
    });

    this.viewService.getUnitListQuestions(this.unitId).subscribe((data: ListQuestion[]) => {
      this.listQuestions = data;
      this.questions = this.questions.concat(data);
    });

    this.viewService.getUnitTestQuestions(this.unitId).subscribe((data: TestQuestion[]) => {
      this.testQuestions = data;
      this.questions = this.questions.concat(data);
    });
  }

  sendDefinitionQuestion(text: string) {
    this.definitionQuestion = {
      questionText: text,
      subtype: 'DefinitionQuestion'
    };
    this.viewService.addUnitDefinitionQuestion(this.unitId, this.definitionQuestion).subscribe(
      (_) => {
          this.ngOnInit();
        },
      (error) => console.log(error)
    );
  }

  sendListQuestion(text: string) {
    let ca = [];
    this.possibleAnswers.forEach((value: boolean, key: string) => {
      if (value) {
        ca = ca.concat(key);
      }
    });
    this.listQuestion = {
      questionText: text,
      subtype: 'ListQuestion',
      possibleAnswers: Array.from(this.possibleAnswers.keys()),
      correctAnswers: ca
    };
    this.viewService.addUnitListQuestion(this.unitId, this.listQuestion).subscribe(
      (_) => {
        this.ngOnInit();
      },
      (error) => console.log(error)
    );
  }

  sendTestQuestion(text: string) {
    this.testQuestion = {
      questionText: text,
      subtype: 'TestQuestion',
      possibleAnswers: ['TODO']
    };
    this.viewService.addUnitTestQuestion(this.unitId, this.testQuestion).subscribe(
      (_) => {},
      (error) => console.log(error)
    );
  }

  addPossibleAnswer(answer: string) {
    this.possibleAnswers = this.possibleAnswers.set(answer, this.correct);
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
