import {Component, OnInit} from '@angular/core';
import {LoginService} from '../auth/login.service';
import {CourseService} from './course.service';
import {Course} from './course.model';

@Component({
  templateUrl: './course.component.html'
})

export class CourseComponent implements OnInit {
  coursesIds: number[];
  courses: Course[];

  constructor(private loginService: LoginService,
              private courseService: CourseService) {
    this.courses = [];
  }

  ngOnInit(): void {
    this.courseService.getUserCourses(this.loginService.getCurrentUser().id).subscribe((data : number[]) => {
      this.coursesIds = data;
      for (let id of this.coursesIds) {
        this.courseService.getCourse(id).subscribe((data2: Course) => {
          this.courses.push(data2);
        }, error => {console.log(error); });
      }
    }, error => {console.log(error); });
  }
}
