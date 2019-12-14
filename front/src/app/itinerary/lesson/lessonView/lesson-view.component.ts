import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '../../../auth/login.service';
import {TabService} from '../../../tab/tab.service';
import {Module} from '../../module/module.model';
import {Unit} from '../../../unit/unit.model';
import {Course} from '../../../course/course.model';
import {Lesson} from '../lesson.model';
import {UnitService} from '../../../unit/unit.service';
import {ModuleService} from '../../module/module.service';
import {LessonService} from '../lesson.service';

@Component({
  selector: 'app-lesson-view',
  templateUrl: './lesson-view.component.html',
  styleUrls: ['./lesson-view.component.css']
})

export class LessonViewComponent implements OnInit {

  unitId: number;
  moduleId: number;
  lessonId: number;

  lesson: Lesson;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private loginService: LoginService,
              private tabService: TabService,
              private unitService: UnitService,
              private moduleService: ModuleService,
              private lessonService: LessonService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.unitId = params.unitId;
      this.moduleId = params.moduleId;
      this.lessonId = params.lessonId;
      this.unitService.getUnit(this.unitId).subscribe((unit: Unit) => {
        this.moduleService.getModule(this.moduleId).subscribe((module: Module) => {
          this.lessonService.getLesson(this.lessonId).subscribe((lesson: Lesson) => {
            this.lesson = lesson;
            this.tabService.setLessonInModule(unit.name, this.unitId, module.name, this.moduleId, lesson.name);
          });
        });
      });
    });
  }

}
