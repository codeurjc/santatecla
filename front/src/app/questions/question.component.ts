import {Component, OnInit, SystemJsNgModuleLoader} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {LoginService} from '../auth/login.service';
import {Question} from './question.model';
import {QuestionService} from './question.service';

@Component({
  templateUrl: './question.component.html'
})

export class QuestionComponent implements OnInit {
  questions: Question[];

  constructor(
    private questionService: QuestionService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.questionService.getQuestions().subscribe((data: Question[]) => {
      this.questions = data;
    },
      (error) => console.log(error)
    );
  }
}
