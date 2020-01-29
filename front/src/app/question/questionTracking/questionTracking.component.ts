import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {QuestionService} from '../question.service';


@Component({
  selector: 'app-question-tracking',
  templateUrl: './questionTracking.component.html',
  styleUrls: ['../question.component.css']
})

export class QuestionTrackingComponent implements OnInit {
  unitId: number;
  questionId: number;
  questionType: string;

  correctCount: number;
  wrongCount: number;

  resultsReady = false;

  chartResults = [];
  testChartResults = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private questionService: QuestionService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.unitId = params.unitId;
      this.questionId = params.questionId;
      this.questionType = params.questionType;

      this.questionService.getQuestionCorrectCount(this.unitId, this.questionId).subscribe((data: number) => {
        this.correctCount = data;
        this.questionService.getQuestionWrongCount(this.unitId, this.questionId).subscribe((data: number) => {
          this.wrongCount = data;
          this.resultsReady = true;
          this.buildCorrectWrongChart();
        }, error => { console.log(error); });
      }, error => { console.log(error); });

      if (this.questionType === 'TestQuestion') {
        this.questionService.getTestQuestionWrongAnswerCount(this.unitId, this.questionId).subscribe((data: any) => {
          for (let element of data) {
            this.testChartResults.push({name: element[0], value: element[1]});
          }
        }, error => { console.log(error); });
      }
    });
  }

  buildCorrectWrongChart() {
    this.chartResults.push({name: 'Respuestas Correctas', value: this.correctCount});
    this.chartResults.push({name: 'Respuestas Incorrectas', value: this.wrongCount});
  }
}
