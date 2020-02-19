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

  unitId: number;
  itineraryId: number;

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
      this.itineraryId = params.itineraryId;
      this.unitId = params.unitId;
      this.questionService.getDefinitionQuestion(this.id).subscribe((data: DefinitionQuestion) => {
        this.question = data;
        this.subtype = data.subtype;
      }, error => {
      });
      console.log(this.loginService.getCurrentUser());
      /*this.questionService.getUserAnswers(this.id, this.loginService.getCurrentUser().id).subscribe((data: DefinitionAnswer[]) => {
        if (data.length != 0) {
          this.questionDone = true;
        }
      });*/
    });
  }

  sendAnswer() {
    this.questionAnswer.user = this.loginService.getCurrentUser();
    this.questionAnswer.unitId = this.unitId;
    this.questionService.addDefinitionAnswer(this.id, this.questionAnswer).subscribe(
      (_) => {
        this.questionDone = true;
      },
      (error) => console.log(error)
    );
  }

  return(){
    this.router.navigate(['/units/' + this.unitId + '/itineraries/' + this.itineraryId]);
  }
}
