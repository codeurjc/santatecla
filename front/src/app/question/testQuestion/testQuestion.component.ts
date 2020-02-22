import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {LoginService} from '../../auth/login.service';
import {TestQuestion} from './testQuestion.model';
import {TestAnswer} from './testAnswer.model';
import {TestQuestionService} from './testQuestion.service';

@Component({
  templateUrl: './testQuestion.component.html'
})

export class TestQuestionComponent implements OnInit {

  question: TestQuestion;
  questionAnswer: TestAnswer;
  questionDone: boolean;
  id: number;
  subtype: string;
  chosenAnswer: string;
  correct: boolean;
  alreadyDone: boolean;
  unitId: number;
  itineraryId: number;


  constructor(
    private router: Router,
    private questionService: TestQuestionService,
    public loginService: LoginService,
    private activatedRoute: ActivatedRoute) {
    this.questionDone = false;
    this.alreadyDone = false;
    this.correct = false;
  }

  ngOnInit() {
    this.questionAnswer = {answerText: ''};
    this.questionAnswer = {answerText: ''};
    this.activatedRoute.params.subscribe(params => {
      this.id = params.questionId;
      this.itineraryId = params.itineraryId;
      this.unitId = params.unitId;
      this.questionService.getTestQuestion(this.id).subscribe((data: TestQuestion) => {
        this.question = data;
        this.subtype = data.subtype;
      }, error => {
      });

      this.questionService.getUserAnswers(this.id, this.loginService.getCurrentUser().id).subscribe((data: TestAnswer[]) => {
        if (data.length != 0) {
          this.alreadyDone = true;
          console.log(data);
          for (let answer of data){
            if (answer[2] === true) {
              this.correct = true;
              break;
            }
          }
        }
      });
    });
  }

  correctType1Answer() {
    if (this.chosenAnswer === this.question.correctAnswer) {
      this.correct = true;
    } else {
      this.correct = false;
    }
    this.questionAnswer = {user: this.loginService.getCurrentUser(), correct: this.correct, answerText: this.chosenAnswer, unitId: this.unitId};
    console.log(this.questionAnswer);
    this.questionService.addTestAnswer(this.id, this.questionAnswer).subscribe(
      (_) => {
        this.questionDone = true;
      },
      (error) => console.log(error));
  }

  return(){
    this.router.navigate(['/units/' + this.unitId + '/itineraries/' + this.itineraryId]);
  }
}
