import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DefinitionQuestionService } from './definitionQuestion.service';
import { DefinitionQuestion } from './definitionQuestion.model';

@Component({
  templateUrl: './definitionQuestion.component.html',
  styleUrls: [
    '../app.component.css'
  ]
})

export class DefinitionQuestionComponent implements OnInit {

  questions: DefinitionQuestion[];

  constructor(
    private router: Router,
    private questionService:DefinitionQuestionService){
  }

  ngOnInit() {
    this.questionService.getDefinitionQuestions().subscribe((data:DefinitionQuestion[]) => {
        this.questions = data;
      }, error => {

      });
  }

}
