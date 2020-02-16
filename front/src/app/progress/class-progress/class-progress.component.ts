import {Component, OnInit} from '@angular/core';
import { ProgressService } from '../progress.service';
import {LoginService} from '../../auth/login.service';
import {Course} from '../../course/course.model';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../../course/course.service';
import {StudentProgressItem} from '../items/studentProgressItem.model';
import {ModuleFormat} from '../items/moduleFormat.model';

@Component({
  selector: 'app-class-progress',
  templateUrl: './class-progress.component.html',
  styleUrls: ['./class-progress.component.css']
})

export class ClassProgressComponent implements OnInit {
  courseId: number;
  course: Course;
  classResults: StudentProgressItem[];
  showingClassResults: StudentProgressItem[];
  classColumnsToDisplay = ['name'];
  classResultsReady = false;

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
      }, error => {console.log(error); });

      this.progressService.getClassProgress(this.courseId).subscribe((data: StudentProgressItem[]) => {
        this.classResults = data;
        this.showingClassResults = this.classResults;
        this.classColumnsToDisplay.push('studentAverage');
        this.classResultsReady = true;
        console.log(this.classResults);
      }, error => {console.log(error); });
    });
  }

  applyFilterStudent(value: string) {
    this.showingClassResults = [];
    for (let result of this.classResults) {
      if (result.studentName.toLowerCase().includes(value.toLowerCase())) {
        this.showingClassResults.push(result);
      }
    }
  }


}
