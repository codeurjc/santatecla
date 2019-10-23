import {Component, OnInit, SystemJsNgModuleLoader} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {DefinitionQuestionService} from './definitionQuestion.service';
import {DefinitionQuestion} from './definitionQuestion.model';
import {DefinitionAnswer} from './definitionAnswer.model';
import {LoginService} from '../../auth/login.service';
import {ListQuestion} from '../listQuestion/listQuestion.model';
import {ListQuestionService} from '../listQuestion/listQuestion.service';

@Component({
  templateUrl: './definitionQuestion.component.html'
})

export class DefinitionQuestionComponent implements OnInit {

  question: DefinitionQuestion;
  questionAnswer: DefinitionAnswer;
  questionDone: boolean;
  id: number;
  subtype: string;
  chosenAnswer: string;
  correct: boolean;

  constructor(
    private router: Router,
    private questionService: DefinitionQuestionService,
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute) {
    this.questionDone = false;
  }

  ngOnInit() {
    this.questionAnswer = {answerText: ''};
    this.activatedRoute.params.subscribe(params => {
      this.id = params.questionId;
      this.questionService.getDefinitionQuestion(this.id).subscribe((data: DefinitionQuestion) => {
        this.question = data;
        this.subtype = data.subtype;
      }, error => {
      });
    });
  }

  sendAnswer() {
    this.questionAnswer.user = this.loginService.getCurrentUser();
    this.questionService.addDefinitionAnswer(this.id, this.questionAnswer).subscribe(
      (_) => {
        this.questionDone = true;
      },
      (error) => console.log(error)
    );
  }

  correctType1Answer() {
    if (this.chosenAnswer === this.question.correctAnswer) {
      this.correct = true;
    } else {
      this.correct = false;
    }
    this.questionDone = true;
  }
}
