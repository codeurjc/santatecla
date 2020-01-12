import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DefinitionQuestion} from '../definitionQuestion/definitionQuestion.model';
import {QuestionComponent} from '../question.component';
import {DefinitionAnswer} from '../definitionQuestion/definitionAnswer.model';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../auth/login.service';
import {UnitService} from '../../unit/unit.service';
import {DefinitionQuestionService} from '../definitionQuestion/definitionQuestion.service';

export interface DialogData {
  question: DefinitionQuestion;
  answerInput: string;
}

@Component({
  templateUrl: './answerDefinitionDialog.component.html',
  styleUrls: ['../question.component.css']
})

export class AnswerDefinitionDialogComponent implements OnInit {

  questionAnswer: DefinitionAnswer;
  definitionAnswers: DefinitionAnswer[];
  questionDone: boolean;

  unitId: number;

  constructor(
    private router: Router,
    private unitService: UnitService,
    private definitionQuestionService: DefinitionQuestionService,
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute,
    public dialogRef: MatDialogRef<QuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
    this.questionAnswer = {answerText: ''};
    this.activatedRoute.params.subscribe(params => {

      this.unitId = params.unitId;

      this.definitionQuestionService.getUserAnswers(this.data.question.id, this.loginService.getCurrentUser().id).subscribe(
        (data: DefinitionAnswer[]) => {
          this.definitionAnswers = data;
        });
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
