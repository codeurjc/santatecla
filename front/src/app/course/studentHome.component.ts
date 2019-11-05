import {Component, OnInit} from '@angular/core';
import {LoginService} from '../auth/login.service';
import {StudentHomeService} from './studentHome.service';
import {Course} from './course.model';
import {Router} from '@angular/router';

@Component({
  templateUrl: './studentHome.component.html'
})

export class StudentHomeComponent implements OnInit {
  courses: Course[];

  constructor(private loginService: LoginService,
              private courseService: StudentHomeService,
              private router: Router) {
    this.courses = [];
  }

  ngOnInit(): void {
    this.courseService.getUserCourses(this.loginService.getCurrentUser().id).subscribe((data: Course[]) => {
      console.log(data);
      this.courses = data;
    }, error => {console.log(error); });
  }

  navigateCourse(id: number) {
    this.router.navigate(['course/' + id]);
  }
}
