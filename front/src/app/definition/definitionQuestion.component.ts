import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DefinitionQuestionService } from './definitionQuestion.service';
import { DefinitionQuestion } from './definitionQuestion.model';
import { DefinitionAnswer } from './definitionAnswer.model';
import { LoginService } from '../auth/login.service';

@Component({
  templateUrl: './definitionQuestion.component.html',
  styleUrls: [
    '../app.component.css'
  ]
})

export class DefinitionQuestionComponent implements OnInit {

  questions: DefinitionQuestion[];
  questionsType1: DefinitionQuestion[];
  questionTest: DefinitionQuestion;
  question1Test: DefinitionQuestion;
  questionAnswer : DefinitionAnswer;
  choosenAnswer: string;
  questionDone: boolean;
  question1Done: boolean;
  correct:boolean;

  constructor(
    private router: Router,
    private questionService:DefinitionQuestionService,
    private loginService: LoginService){
      this.questionDone = false;
      this.question1Done = false;
  }

  ngOnInit() {
    this.questionAnswer = { answerText : ''};
    this.questionService.getDefinitionQuestions().subscribe((data:DefinitionQuestion[]) => {
        this.questions = data;
        this.questionTest = this.questions[0];
      }, error => {

      });
    this.questionService.getDefinitionQuestionsType1().subscribe((data:DefinitionQuestion[])=> {
      this.questionsType1 = data;
      this.question1Test = this.questionsType1[0];
    }, error => {

    })
  }

  sendAnswer(){
    this.questionAnswer.user = this.loginService.getCurrentUser();
    this.questionService.addDefinitionAnswer(this.questionTest.id, this.questionAnswer).subscribe(
      (_) => {this.router.navigate(['/']);
              this.questionDone = true},
      (error) => console.log(error)
    )
  }

  correctType1Answer(){
    if(this.choosenAnswer == this.question1Test.correctAnswer){
      this.correct = true;
    }
    else{
      this.correct = false;
    }
    this.question1Done = true;
  }

}
