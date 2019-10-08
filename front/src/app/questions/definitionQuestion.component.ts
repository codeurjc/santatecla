import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DefinitionQuestionService } from './definitionQuestion.service';
import { DefinitionQuestion } from './definitionQuestion.model';
import { DefinitionAnswer } from './definitionAnswer.model';
import { LoginService } from '../auth/login.service';
import { ListQuestion } from './listQuestion.model';
import { ListQuestionService } from './listQuestion.service';

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
  listQuestion: ListQuestion
  correct:boolean;
  choosenListAnswers: string[];
  availableListAnswers: string[];
  questionListDone: boolean;
  questionListCorrect: boolean;
  questionListCorrectAnswers: string[];

  constructor(
    private router: Router,
    private questionService:DefinitionQuestionService,
    private loginService: LoginService, 
    private listService: ListQuestionService){
      this.questionDone = false;
      this.question1Done = false;
      this.questionListDone = false;
      this.choosenListAnswers = []
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

    this.listService.getListQuestions().subscribe((data:ListQuestion[])=> {
      this.listQuestion = data[0]
      this.availableListAnswers = this.listQuestion.possibleAnswers;
      this.questionListCorrectAnswers = this.listQuestion.correctAnswer;
    }, error => {

    })
  }

  sendAnswer(){
    this.questionAnswer.user = this.loginService.getCurrentUser();
    this.questionService.addDefinitionAnswer(this.questionTest.id, this.questionAnswer).subscribe(
      (_) => {this.router.navigate(['/definition']);
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

  newChoosenAnswer(answer:string){
    this.choosenListAnswers.push(answer);
    this.availableListAnswers.splice(this.availableListAnswers.indexOf(answer), 1);
  }

  deleteChoosenAnswer(answer:string){
    this.availableListAnswers.push(answer);
    this.choosenListAnswers.splice(this.choosenListAnswers.indexOf(answer), 1);
  }

  correctListAnswer(){
    if(this.choosenListAnswers.length == this.questionListCorrectAnswers.length){
      this.questionListCorrect = true;
      for(let i = 0; i<this.questionListCorrectAnswers.length; i++){
        if(!this.choosenListAnswers.includes(this.questionListCorrectAnswers[i])){
          this.questionListCorrect = false;
          break;
        }
      }
    }
    else{
      this.questionListCorrect = false;
    }
    this.questionListDone = true;
  }


}
