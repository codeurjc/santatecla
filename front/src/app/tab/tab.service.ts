import { Injectable } from '@angular/core';
import {LoginService} from '../auth/login.service';

@Injectable()
export class TabService {

  units = false;
  unit = '';
  unitId: number;

  courses = false;
  course = '';
  courseId: number;

  lessons = false;
  lesson = '';

  modules = false;
  module = '';
  moduleId: number;

  constructor(private loginService: LoginService) {}

  emptyAll() {
    this.units = false;
    this.unit = '';
    this.courses = false;
    this.course = '';
    this.lessons = false;
    this.lesson = '';
    this.modules = false;
    this.module = '';
  }

  setHome() {
    this.emptyAll();
  }

  setUnits() {
    this.emptyAll();
    this.units = true;
  }

  setUnit(unitName: string, unitId) {
    this.emptyAll();
    this.units = true;
    this.unit = unitName;
    this.unitId = unitId;
  }

  setCourses() {
    this.emptyAll();
    this.courses = true;
  }

  setCourse(courseName: string) {
    this.emptyAll();
    this.courses = true;
    this.course = courseName;
  }

  setLesson(unitName: string, unitId: number, lessonName: string) {
    this.emptyAll();
    this.units = true;
    this.unit = unitName;
    this.unitId = unitId;
    this.lessons = true;
    this.lesson = lessonName;
  }

  setLessonInModule(name: string, id: number, moduleName: string, moduleId: number, lessonName: string) {
    this.emptyAll();
    if (this.loginService.isAdmin) {
      this.units = true;
      this.unit = name;
      this.unitId = id;
    } else {
      this.courses = true;
      this.course = name;
      this.courseId = id;
    }
    this.module = moduleName;
    this.moduleId = moduleId;
    this.lessons = true;
    this.lesson = lessonName;
  }

  setModule(name: string, unitId: number, moduleName: string) {
    this.emptyAll();
    if (this.loginService.isAdmin) {
      this.units = true;
      this.unit = name;
      this.unitId = unitId;
      this.modules = true;
      this.module = moduleName;
    } else {
      this.courses = true;
      this.course = name;
    }
  }

}
