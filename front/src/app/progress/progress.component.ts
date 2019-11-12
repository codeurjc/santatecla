import { Itineray } from './../itinerary/itinerary.model';
import { Component, OnInit} from '@angular/core';
import { ProgressService } from './progress.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Unit } from '../unit/unit.model';
import {LoginService} from '../auth/login.service';
import {Course} from '../course/course.model';

@Component({
  templateUrl: './progress.component.html',
  styleUrls: [
    './progress.component.css'
  ]
})

export class ProgressComponent implements OnInit {
  chosenCourse: Course;
  courses: Course[];

  constructor(private progressService: ProgressService,
              private loginService: LoginService) {}

  ngOnInit() {
    this.progressService.getTeacherCourses(this.loginService.getCurrentUser().id).subscribe((data: Course[]) => {
      this.courses = data;
    }, error => {console.log(error);});
  }
}
