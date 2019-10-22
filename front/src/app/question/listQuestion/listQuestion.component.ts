import {Component, OnInit, SystemJsNgModuleLoader} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {LoginService} from '../../auth/login.service';
import {ListQuestion} from './listQuestion.model';
import {ListQuestionService} from './listQuestion.service';

@Component({
  templateUrl: './listQuestion.component.html'
})

export class ListQuestionComponent implements OnInit {
  question: ListQuestion;
  choosenListAnswers: string[];
  availableListAnswers: string[];
  questionDone: boolean;
  questionListCorrect: boolean;
  questionListCorrectAnswers: string[];
  id: number;

  constructor(
    private questionService: ListQuestionService,
    private activatedRoute: ActivatedRoute) {
    this.questionDone = false;
    this.choosenListAnswers = [];
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.questionId;
      this.questionService.getListQuestion(this.id).subscribe((data: ListQuestion) => {
        this.question = data;
        this.availableListAnswers = this.question.possibleAnswers;
        this.questionListCorrectAnswers = this.question.correctAnswer;
      }, error => {
      });
    });
  }

  newChoosenAnswer(answer: string) {
    this.choosenListAnswers.push(answer);
    this.availableListAnswers.splice(this.availableListAnswers.indexOf(answer), 1);
  }

  deleteChoosenAnswer(answer: string) {
    this.availableListAnswers.push(answer);
    this.choosenListAnswers.splice(this.choosenListAnswers.indexOf(answer), 1);
  }

  correctListAnswer() {
    if (this.choosenListAnswers.length === this.questionListCorrectAnswers.length) {
      this.questionListCorrect = true;
      for (let i = 0; i < this.questionListCorrectAnswers.length; i++) {
        if (!this.choosenListAnswers.includes(this.questionListCorrectAnswers[i])) {
          this.questionListCorrect = false;
          break;
        }
      }
    } else {
      this.questionListCorrect = false;
    }
    this.questionDone = true;
  }

}