import {Component, OnInit} from '@angular/core';
import {Course} from './course.model';
import {LoginService} from '../auth/login.service';
import {CourseService} from './course.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TabService} from '../tab/tab.service';

@Component({
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {
  course: Course;
  id: number;
  showInfo = false;

  constructor(private loginService: LoginService,
              private courseService: CourseService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private tabService: TabService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.courseId;
      this.courseService.getCourse(this.id).subscribe((data: Course) => {
        this.course = data;
      }, error => {console.log(error); });
    });
  }

  navigateHome() {
    this.router.navigate(['student']);
  }
}
