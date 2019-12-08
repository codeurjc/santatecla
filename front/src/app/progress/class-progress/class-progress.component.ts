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
  courseFormat: ModuleFormat[];
  moduleFormat: ModuleFormat;
  moduleExtendedResults: StudentProgressItem[];
  classColumnsToDisplay = ['name'];
  extendedColumnsToDisplay = ['name'];
  classResultsReady = false;
  extendedInfo = false;

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
        console.log(this.classResults);
      }, error => {console.log(error); });

      this.progressService.getModuleFormat(this.courseId).subscribe((data: ModuleFormat[]) => {
        this.courseFormat = data;

        for (let module of this.courseFormat) {
          this.classColumnsToDisplay.push(module.moduleName);
        }

        this.classColumnsToDisplay.push('studentAverage');
        this.classResultsReady = true;
      }, error => {console.log(error); });

    });
  }

  showModuleExtendedInfo(moduleId: number, moduleName: string) {
    this.classResultsReady = false;
    this.progressService.getExtendedModuleInfo(this.courseId, moduleId).subscribe((data: StudentProgressItem[]) => {
      this.moduleExtendedResults = data;
      this.classResultsReady = true;
      this.extendedInfo = true;
    }, error => {console.log(error); });

    for (let module of this.courseFormat){
      if (module.moduleName === moduleName){
        this.moduleFormat = module;
      }
    }

    for (let question of this.moduleFormat.questions){
      this.extendedColumnsToDisplay.push(question);
    }

    this.extendedColumnsToDisplay.push('studentAverage');
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
