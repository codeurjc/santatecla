import { Component, OnInit} from '@angular/core';
import { ProgressService } from './progress.service';
import { Unit } from '../unit/unit.model';
import {LoginService, User} from '../auth/login.service';
import {Course} from '../course/course.model';
import {UserResult} from './userResult.model';
import {UnitResult} from './unitResult.model';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../course/course.service';
import {Block} from '../itinerary/block.model';
import {Lesson} from '../itinerary/lesson/lesson.model';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})

export class ProgressComponent implements OnInit {
  courseId: number;
  course: Course;
  chosenCourse: Course;
  students: User[];
  courses: Course[];
  classResults: UserResult[];
  showingClassResults;
  columnsToDisplay;
  bestUser: User;
  worstUser: User;
  ready = false;
  chosenInfoToShow: string;

  constructor(private courseService: CourseService,
              private loginService: LoginService,
              private activatedRoute: ActivatedRoute,
              private progressService: ProgressService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.courseId = params.courseId;
      this.courseService.getCourse(this.courseId).subscribe((data: Course) => {
        this.course = data;
        console.log(this.course);
      }, error => {console.log(error); });
    });
  }

  applyFilterStudent(value: string) {
    this.showingClassResults = [];
    for (let result of this.classResults) {
      if (result.name.toLowerCase().includes(value.toLowerCase())) {
        this.showingClassResults.push(result);
      }
    }
  }
}
