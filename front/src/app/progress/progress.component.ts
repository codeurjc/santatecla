import { Component, OnInit} from '@angular/core';
import { ProgressService } from './progress.service';
import { Unit } from '../unit/unit.model';
import {LoginService, User} from '../auth/login.service';
import {Course} from '../course/course.model';
import {UserResult} from './userResult.model';

@Component({
  templateUrl: './progress.component.html',
  styleUrls: [
    './progress.component.css'
  ]
})

export class ProgressComponent implements OnInit {
  chosenCourse: Course;
  students: User[];
  courses: Course[];
  units: Unit[];
  classResults: UserResult[];
  columnsToDisplay;
  bestUser: User;
  worstUser: User;
  ready = false;
  chosenInfoToShow: string;

  constructor(private progressService: ProgressService,
              private loginService: LoginService) {
  }

  ngOnInit() {
    this.progressService.getTeacherCourses(this.loginService.getCurrentUser().id).subscribe((data: Course[]) => {
      this.courses = data;
    }, error => {console.log(error);});
  }

  newChosenCourse(course: Course) {
    this.columnsToDisplay = ['name'];
    this.chosenCourse = course;
    this.students = this.chosenCourse.students;
    this.units = this.chosenCourse.units;
    this.chosenInfoToShow = 'Todo';
    for (let unit of this.units) {
      this.columnsToDisplay.push(unit.name);
    }
    this.progressService.getClassProgress(this.chosenCourse.id).subscribe((data: UserResult[]) => {
        this.classResults = data;
        this.ready = true;
        console.log(this.classResults);
        }, error => {console.log(error); } );
    this.progressService.getBestStudent(this.chosenCourse.id).subscribe((data: User) => {
      this.bestUser = data;
    }, error => {console.log(error); });
    this.progressService.getWorstStudent(this.chosenCourse.id).subscribe((data: User) => {
      this.worstUser = data;
    }, error => {console.log(error); });
  }
}
