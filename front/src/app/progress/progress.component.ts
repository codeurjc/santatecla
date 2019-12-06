import { Component, OnInit} from '@angular/core';
import { ProgressService } from './progress.service';
import {LoginService, User} from '../auth/login.service';
import {Course} from '../course/course.model';
import {UserResult} from './items/userResult.model';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../course/course.service';
import {StudentProgressItem} from './items/studentProgressItem.model';
import {ModuleFormat} from './items/moduleFormat.model';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})

export class ProgressComponent implements OnInit {
  courseId: number;
  course: Course;
  courses: Course[];
  moduleResults: UserResult[];
  classResults: StudentProgressItem[];
  moduleFormat: ModuleFormat[];
  columnsToDisplay = ['name', 'realization', 'average'];
  classColumnsToDisplay = ['name'];
  ready = false;
  chosenInfoToShow = 'Todo';

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

      this.progressService.getModuleProgress(this.courseId).subscribe((data: UserResult[]) => {
        this.moduleResults = data;
      }, error => {console.log(error); });

      this.progressService.getClassProgress(this.courseId).subscribe((data: StudentProgressItem[]) => {
        this.classResults = data;
        console.log(this.classResults);
      }, error => {console.log(error); });

      this.progressService.getModuleFormat(this.courseId).subscribe((data: ModuleFormat[]) => {
        this.moduleFormat = data;

        for (let module of this.moduleFormat) {
          this.classColumnsToDisplay.push(module.moduleName);
        }

        this.classColumnsToDisplay.push('studentAverage');
        this.ready = true;
      }, error => {console.log(error); });
    });
  }

  /*applyFilterStudent(value: string) {
    this.showingClassResults = [];
    for (let result of this.classResults) {
      if (result.name.toLowerCase().includes(value.toLowerCase())) {
        this.showingClassResults.push(result);
      }
    }
  }*/
}
