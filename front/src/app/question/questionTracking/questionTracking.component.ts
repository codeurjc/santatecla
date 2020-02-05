import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {QuestionService} from '../question.service';
import {Question} from '../question.model';
import {MatTableDataSource} from '@angular/material';
import {Answer} from '../answer.model';
import {TabService} from '../../tab/tab.service';
import {UnitService} from '../../unit/unit.service';
import {Unit} from '../../unit/unit.model';


@Component({
  selector: 'app-question-tracking',
  templateUrl: './questionTracking.component.html',
  styleUrls: ['../question.component.css']
})

export class QuestionTrackingComponent implements OnInit {
  unitId: number;
  questionId: number;
  questionType: string;

  question: Question;
  unitName: string;

  displayedColumnsNotCorrected: string[] = ['answer', 'correct', 'wrong'];
  dataSourceNotCorrected;

  displayedColumnsCorrected: string[] = ['result', 'answer'];
  dataSourceCorrected;

  correctCount: number;
  wrongCount: number;
  uncorrectedCount = 0;

  resultsReady = false;

  pieChartResults = [];
  barChartResults = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private questionService: QuestionService,
    private tabService: TabService,
    private unitService: UnitService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.unitId = params.unitId;
      this.questionId = params.questionId;
      this.questionType = params.questionType;

      if (this.questionType === 'TestQuestion') {
        this.getCorrectWrongAnswerCount();
        this.questionService.getTestQuestionWrongAnswerCount(this.unitId, this.questionId).subscribe((data: any) => {
          for (const element of data) {
            this.barChartResults.push({name: element[0], value: element[1]});
          }
        }, error => { console.log(error); });

        this.questionService.getUnitTestQuestion(this.unitId, this.questionId).subscribe((data: any) => {
          this.question = data;
          this.getUnitNameAndSetTab();
        }, error => { console.log(error); });
      } else if (this.questionType === 'ListQuestion') {
        this.getCorrectWrongAnswerCount();
        this.questionService.getListQuestionWrongAnswerCount(this.unitId, this.questionId).subscribe((data: any) => {
          for (const element of data) {
            this.barChartResults.push({name: element[0], value: element[1]});
          }
        }, error => { console.log(error); });

        this.questionService.getUnitListQuestion(this.unitId, this.questionId).subscribe((data: any) => {
          this.question = data;
          this.getUnitNameAndSetTab();
        }, error => { console.log(error); });
      } else if (this.questionType === 'DefinitionQuestion') {

        this.questionService.getQuestionCorrectCount(this.unitId, this.questionId).subscribe((data: number) => {
          this.correctCount = data;
          this.questionService.getQuestionWrongCount(this.unitId, this.questionId).subscribe((data: number) => {
            this.wrongCount = data;
            this.questionService.getUncorrectedDefinitionAnswers(this.unitId, this.questionId).subscribe((data: number) => {
              this.uncorrectedCount = data;
              this.buildCorrectWrongChart();
              this.resultsReady = true;
            }, error => { console.log(error); });
          }, error => { console.log(error); });
        }, error => { console.log(error); });

        // init data source
        this.dataSourceNotCorrected = new MatTableDataSource<Answer>();
        this.dataSourceCorrected = new MatTableDataSource<Answer>();

        this.questionService.getUnitDefinitionQuestion(this.unitId, this.questionId).subscribe((data: any) => {
          this.question = data;
          this.getUnitNameAndSetTab();
        }, error => { console.log(error); });

        this.questionService.getUnitDefinitionAnswersNotCorrected(this.unitId, this.questionId).subscribe((data: Answer[]) => {
          this.dataSourceNotCorrected.data = data;
        }, error => { console.log(error); });

        this.questionService.getUnitDefinitionAnswersCorrected(this.unitId, this.questionId).subscribe((data: Answer[]) => {
          this.dataSourceCorrected.data = data;
        }, error => { console.log(error); });
      }
    });
  }

  getUnitNameAndSetTab() {
    this.unitService.getUnitName(this.unitId).subscribe((data: any) => {
      this.unitName = data.response;
      this.tabService.setQuestion(this.questionId, this.question.questionText, this.unitName, this.unitId);
    }, error => { console.log(error); });
  }

  buildCorrectWrongChart() {
    this.pieChartResults.push({name: 'Respuestas Correctas', value: this.correctCount});
    this.pieChartResults.push({name: 'Respuestas Incorrectas', value: this.wrongCount});
    this.pieChartResults.push({name: 'Respuestas Sin Corregir', value: this.uncorrectedCount});
  }

  getCorrectWrongAnswerCount() {
    this.questionService.getQuestionCorrectCount(this.unitId, this.questionId).subscribe((data: number) => {
      this.correctCount = data;
      this.questionService.getQuestionWrongCount(this.unitId, this.questionId).subscribe((data: number) => {
        this.wrongCount = data;
        this.resultsReady = true;
        this.buildCorrectWrongChart();
      }, error => { console.log(error); });
    }, error => { console.log(error); });
  }

  correctAnswer(questionID: number) {
  }

  wrongAnswer(questionID: number) {
  }
}
