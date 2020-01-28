import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-question-tracking',
  templateUrl: './questionTracking.component.html',
  styleUrls: ['../question.component.css']
})

export class QuestionTrackingComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {}
}
