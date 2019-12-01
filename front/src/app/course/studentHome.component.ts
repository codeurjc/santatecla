import {Component, OnInit} from '@angular/core';
import {LoginService} from '../auth/login.service';
import {StudentHomeService} from './studentHome.service';
import {Course} from './course.model';
import {Router} from '@angular/router';
import {TabService} from '../tab/tab.service';

@Component({
  templateUrl: './studentHome.component.html',
  styleUrls: ['./course.component.css']
})

export class StudentHomeComponent implements OnInit {
  courses: Course[];

  constructor(private loginService: LoginService,
              private courseService: StudentHomeService,
              private router: Router,
              private tabService: TabService) {
    this.courses = [];
  }

  ngOnInit(): void {
    this.courseService.getUserCourses(this.loginService.getCurrentUser().id).subscribe((data: Course[]) => {
      this.courses = data;
    }, error => {console.log(error); });
  }

  navigateCourse(id: number) {
    this.router.navigate(['course/' + id]);
  }
}
