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

  setHome() {
    this.units = false;
    this.unit = '';
    this.courses = false;
    this.course = '';
    this.lessons = false;
    this.lesson = '';
  }

  setUnits() {
    this.units = true;
    this.unit = '';
    this.courses = false;
    this.course = '';
    this.lessons = false;
    this.lesson = '';
  }

  setUnit(unitName: string, unitId) {
    this.units = true;
    this.unit = unitName;
    this.unitId = unitId;
    this.courses = false;
    this.course = '';
    this.lessons = false;
    this.lesson = '';
  }

  setCourses() {
    this.units = false;
    this.unit = '';
    this.courses = true;
    this.course = '';
    this.lessons = false;
    this.lesson = '';
  }

  setCourse(courseName: string) {
    this.units = false;
    this.unit = '';
    this.courses = true;
    this.course = courseName;
    this.lessons = false;
    this.lesson = '';
  }

  setLesson(unitName: string, unitId: number, lessonName: string) {
    this.units = true;
    this.unit = unitName;
    this.unitId = unitId;
    this.courses = false;
    this.lessons = true;
    this.lesson = lessonName;
  }

}
