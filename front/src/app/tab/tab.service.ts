import { Injectable } from '@angular/core';

@Injectable()
export class TabService {

  units = false;
  unit = '';
  unitId: number;

  courses = false;
  course = '';

  lessons = false;
  lesson = '';

  constructor() {}

  emptyAll() {
    this.units = false;
    this.unit = '';
    this.courses = false;
    this.course = '';
    this.lessons = false;
    this.lesson = '';
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

}
