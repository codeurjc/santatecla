import {Component, OnInit} from '@angular/core';
import {Course} from './course.model';
import {LoginService} from '../auth/login.service';
import {CourseService} from './course.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TabService} from '../tab/tab.service';
import {Unit} from '../unit/unit.model';

@Component({
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {
  course: Course;
  id: number;
  bestUnit: Unit;
  worstUnit: Unit;
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
        for (let unit of this.course.units) {
          this.courseService.getUserDistinctAnswerCount(+unit.id, this.loginService.getCurrentUser().id).subscribe((data2: number) => {
            unit.questionsDone = data2;
          }, error => { console.log(error); } );
        }

        this.courseService.getUserBestUnit(this.id, this.loginService.getCurrentUser().id).subscribe((best: Unit) => {
          this.bestUnit = best;
        }, error => { console.log(error); });

        this.courseService.getUserWorstUnit(this.id, this.loginService.getCurrentUser().id).subscribe((worst: Unit) => {
          this.worstUnit = worst;
        }, error => {console.log(error); });
      }, error => {console.log(error); });
    });
  }

  navigateHome() {
    this.router.navigate(['student']);
  }
}
