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

@Component({
  templateUrl: './question.component.html',
  styleUrls: [
    './question.component.css'
  ]
})

export class QuestionComponent implements OnInit {
  questions: Question[];
  definitionQuestion: DefinitionQuestion;
  listQuestion: ListQuestion;
  testQuestion: TestQuestion;
  subtype: string;

  possibleAnswers: string[];
  correctAnswers: string[];

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
    this.questionService.getQuestions().subscribe((data: Question[]) => {
      this.questions = data;
    },
      (error) => console.log(error)
    );
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
  }

  sendDefinitionQuestion(text: string) {
    this.definitionQuestion = {
      questionText: text,
      subtype: 'DefinitionQuestion'
    };
    this.definitionQuestionService.addDefinitionQuestion(this.definitionQuestion).subscribe(
      (_) => {},
      (error) => console.log(error)
    );
  }

  sendListQuestion(text: string) {
    this.listQuestion = {
      questionText: text,
      subtype: 'ListQuestion',
      possibleAnswers: this.possibleAnswers,
      correctAnswers: this.correctAnswers
    };
    this.listQuestionService.addListQuestion(this.listQuestion).subscribe(
      (_) => {},
      (error) => console.log(error)
    );
  }

  sendTestQuestion(text: string) {
    this.testQuestion = {
      questionText: text,
      subtype: 'TestQuestion',
      possibleAnswers: ['TODO']
    };
    this.testQuestionService.addTestQuestion(this.testQuestion).subscribe(
      (_) => {},
      (error) => console.log(error)
    );
  }

  addPossibleAnswer(answer: string) {
    this.possibleAnswers.concat(answer);
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
