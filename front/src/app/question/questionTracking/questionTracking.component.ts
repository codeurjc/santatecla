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

  correctCount: number;
  wrongCount: number;

  resultsReady = false;

  chartResults = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private questionService: QuestionService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.unitId = params.unitId;
      this.questionId = params.questionId;

      this.questionService.getQuestionCorrectCount(this.unitId, this.questionId).subscribe((data: number) => {
        this.correctCount = data;
        this.questionService.getQuestionWrongCount(this.unitId, this.questionId).subscribe((data: number) => {
          this.wrongCount = data;
          this.resultsReady = true;
          this.buildChartInfo();
        }, error => { console.log(error); });
      }, error => { console.log(error); });
    });
  }

  buildChartInfo() {
    this.chartResults.push({name: 'Respuestas Correctas', value: 51});
    this.chartResults.push({name: 'Respuestas Incorrectas', value: 85});
  }
}
