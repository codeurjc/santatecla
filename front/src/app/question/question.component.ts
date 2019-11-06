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

  constructor(
    private questionService: QuestionService,
    private definitionQuestionService: DefinitionQuestionService,
    private listQuestionService: ListQuestionService,
    private testQuestionService: TestQuestionService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.subtype = 'DefinitionQuestion';
    this.questionService.getQuestions().subscribe((data: Question[]) => {
      this.questions = data;
    },
      (error) => console.log(error)
    );
  }

  sendQuestion(text: string) {
    switch (this.subtype) {
      case 'DefinitionQuestion':
        this.definitionQuestion = {
          questionText: text,
          subtype: 'DefinitionQuestion'
        };
        this.definitionQuestionService.addDefinitionQuestion(this.definitionQuestion).subscribe(
          (_) => {},
          (error) => console.log(error)
        );
        break;
      case 'ListQuestion':
          this.listQuestion = {
            questionText: text,
            subtype: 'ListQuestion',
            possibleAnswers: ['TODO']
          };
          this.listQuestionService.addListQuestion(this.listQuestion).subscribe(
            (_) => {},
            (error) => console.log(error)
          );
          break;
      case 'TestQuestion':
        this.testQuestion = {
          questionText: text,
          subtype: 'TestQuestion',
          possibleAnswers: ['TODO']
        };
        this.testQuestionService.addTestQuestion(this.testQuestion).subscribe(
          (_) => {},
          (error) => console.log(error)
        );
        break;
      default:
        break;
    }
  }
}
