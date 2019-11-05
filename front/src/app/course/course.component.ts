import {Component, OnInit} from '@angular/core';
import {Course} from './course.model';
import {LoginService} from '../auth/login.service';
import {CourseService} from './course.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  templateUrl: './course.component.html'
})

export class CourseComponent implements OnInit {
  course: Course;
  id: number;

  constructor(private loginService: LoginService,
              private courseService: CourseService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.courseId;
      this.courseService.getCourse(this.id).subscribe((data: Course) => {
        this.course = data;
      }, error => {console.log(error); });
    });
  }

  navigateUnit(id: number) {
    this.router.navigate(['units/' + id + '/cards']);
  }

  navigateHome() {
    this.router.navigate(['student']);
  }
}
