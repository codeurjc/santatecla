import { Injectable } from '@angular/core';

@Injectable()
export class TabService {

  units = false;
  unit = '';
  courses = false;
  course = '';

  constructor() {}

  setHome() {
    this.units = false;
    this.unit = '';
    this.courses = false;
    this.course = '';
  }

  setUnits() {
    this.units = true;
    this.unit = '';
    this.courses = false;
    this.course = '';
  }

  setUnit(unitName: string) {
    this.units = true;
    this.unit = unitName;
    this.courses = false;
    this.course = '';
  }

  setCourses() {
    this.units = false;
    this.unit = '';
    this.courses = true;
    this.course = '';
  }

  setCourse(courseName: string) {
    this.units = false;
    this.unit = '';
    this.courses = true;
    this.course = courseName;
  }

}
