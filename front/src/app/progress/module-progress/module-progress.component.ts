import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { ProgressService } from '../progress.service';
import {LoginService} from '../../auth/login.service';
import {Course} from '../../course/course.model';
import {UserResult} from '../items/userResult.model';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../../course/course.service';
import {StudentProgressItem} from '../items/studentProgressItem.model';
import {ModuleFormat} from '../items/moduleFormat.model';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatIconRegistry} from '@angular/material';
import {TdDigitsPipe} from '@covalent/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-module-progress',
  templateUrl: './module-progress.component.html',
  styleUrls: ['./module-progress.component.css']
})

export class ModuleProgressComponent implements OnInit {
  courseId: number;
  course: Course;
  courses: Course[];
  moduleResults: UserResult[];
  classResults: StudentProgressItem[];
  courseFormat: ModuleFormat[];
  moduleFormat: ModuleFormat;
  moduleExtendedResults: StudentProgressItem[];
  columnsToDisplay = ['name', 'realization', 'average'];
  classColumnsToDisplay = ['name'];
  extendedColumnsToDisplay = ['name'];
  moduleResultsReady = false;
  classResultsReady = false;
  extendedInfo = false;
  chosenInfoToShow = 'Todo';
  histogram = [];
  xAxisLabel = 'Tema';
  yAxisLabel = 'Media';

  constructor(private courseService: CourseService,
              private loginService: LoginService,
              private activatedRoute: ActivatedRoute,
              private progressService: ProgressService,
              private _changeDetectorRef: ChangeDetectorRef,
              private _iconRegistry: MatIconRegistry,
              private _domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.courseId = params.courseId;
      this.courseService.getCourse(this.courseId).subscribe((data: Course) => {
        this.course = data;
      }, error => {console.log(error); });

      this.progressService.getModuleProgress(this.courseId).subscribe((data: UserResult[]) => {
        this.moduleResults = data;
        this.buildHistogramData();
        this.moduleResultsReady = true;
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

    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        'https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent.svg'));
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

  axisDigits(val: any): any {
    return new TdDigitsPipe().transform(val);
  }

  axisDate(val: string): string {
    return new DatePipe('en').transform(val, 'hh a');
  }

  buildHistogramData() {
    for (let module of this.moduleResults) {
      this.histogram.push({'name': module.name, 'value': 516});
    }
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
