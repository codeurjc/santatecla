import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { ProgressService } from '../progress.service';
import {LoginService} from '../../auth/login.service';
import {Course} from '../../course/course.model';
import {UserResult} from '../items/userResult.model';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../../course/course.service';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-module-progress',
  templateUrl: './module-progress.component.html',
  styleUrls: ['./module-progress.component.css']
})

export class ModuleProgressComponent implements OnInit {
  courseId: number;
  course: Course;
  moduleResults: UserResult[];
  columnsToDisplay = ['name', 'realization', 'average'];
  moduleResultsReady = false;
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
    });

    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        'https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent.svg'));
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
