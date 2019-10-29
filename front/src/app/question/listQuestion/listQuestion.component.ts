import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {LoginService} from '../../auth/login.service';
import {ListQuestion} from './listQuestion.model';
import {ListQuestionService} from './listQuestion.service';
import {ListAnswer} from './listAnswer.model';

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
  questionAnswer: ListAnswer;
  id: number;
  alreadyDone: boolean;

  unitId: number;
  itineraryId: number;

  constructor(
    private questionService: ListQuestionService,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
    private router: Router) {
    this.questionDone = false;
    this.choosenListAnswers = [];
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.questionId;
      this.itineraryId = params.itineraryId;
      this.unitId = params.unitId;
      this.questionService.getListQuestion(this.id).subscribe((data: ListQuestion) => {
        this.question = data;
        this.availableListAnswers = this.question.possibleAnswers;
        this.questionListCorrectAnswers = this.question.correctAnswers;
      }, error => {
      });
    });

    this.questionService.getUserAnswers(this.id, this.loginService.getCurrentUser().id).subscribe((data: ListAnswer[]) => {
      if (data.length != 0) {
        this.alreadyDone = true;
        console.log(data);
        for (let answer of data){
          if (answer[2] === true) {
            this.questionListCorrect = true;
            break;
          }
        }
      }
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
    this.questionAnswer = {user: this.loginService.getCurrentUser(), correct: this.questionListCorrect};
    this.questionService.addAnswer(this.id, this.questionAnswer).subscribe(
      (_) => {
        this.questionDone = true;
      },
      (error) => console.log(error));
  }

  return(){
    this.router.navigate(['/units/' + this.unitId + '/itineraries/' + this.itineraryId]);
  }

}
