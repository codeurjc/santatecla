import {Component, OnInit, SystemJsNgModuleLoader} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {LoginService} from '../auth/login.service';
import {Question} from './question.model';
import {QuestionService} from './question.service';
import {DefinitionQuestionService} from './definitionQuestion/definitionQuestion.service';
import {ListQuestionService} from './listQuestion/listQuestion.service';
import {DefinitionQuestion} from './definitionQuestion/definitionQuestion.model';
import {ListQuestion} from './listQuestion/listQuestion.model';

@Component({
  templateUrl: './question.component.html'
})

export class QuestionComponent implements OnInit {
  questions: Question[];
  definitionQuestion: DefinitionQuestion;
  listQuestion: ListQuestion;
  subtype: string;

  constructor(
    private questionService: QuestionService,
    private definitionService: DefinitionQuestionService,
    private listService: ListQuestionService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.subtype = 'Definition';
    this.questionService.getQuestions().subscribe((data: Question[]) => {
      this.questions = data;
    },
      (error) => console.log(error)
    );
  }

  /*sendQuestion(text: string) {
    if (this.subtype === 'Definition') {
      this.definitionQuestion = {
        questionText: text,
        subtype: 'Definition',
        type: 'Open'
      };
      this.definitionService.addDefinitionQuestion(this.definitionQuestion).subscribe(
        (_) => {},
        (error) => console.log(error)
      );
    } else {
      this.listService.addListQuestion(this.listQuestion);
    }
  }*/
}
