import {Component, HostListener, OnInit} from '@angular/core';
import {LoginService, User} from '../auth/login.service';
import {Unit} from '../unit/unit.model';
import {CourseService} from './course.service';
import {NewCourseService} from './newCourse.service';
import {UnitService} from '../unit/unit.service';
import {Course} from './course.model';
import {Router} from '@angular/router';

@Component({
  templateUrl: './newCourse.component.html',
  styleUrls: ['./course.component.css']
})

export class NewCourseComponent implements OnInit {
  courseName: string;
  courseDescription: string;
  showingStudents: User[];
  students: User[];
  showingUnits: Unit[];
  units: Unit[];
  chosenUnits: Unit[];
  chosenStudents: User[];
  showStudentOptions = false;
  showUnitOptions = false;
  searchStudentField: string;
  searchUnitField: string;
  arrowStudentKeyLocation = 0;
  arrowUnitKeyLocation = 0;
  course: Course;

  constructor(private courseService: NewCourseService, private unitService: UnitService,
              private loginService: LoginService, private routing: Router) {
    this.chosenStudents = [];
    this.chosenUnits = [];
  }

  ngOnInit(): void {
    this.courseService.getUnits().subscribe((data: Unit[]) => {
      this.units = data;
    }, error => {console.log(error); } );

    this.courseService.getUsers().subscribe((data: User[]) => {
      this.students = data;
      console.log(this.students);
    }, error => {console.log(error); } );
  }

  addStudent(student: User) {
    if (this.checkStudentInclude(student)) {
      this.chosenStudents.push(student);
    }
  }

  addUnit(unit: Unit) {
    if (this.checkUnitInclude(unit)) {
      this.chosenUnits.push(unit);
    }
  }

  checkStudentInclude(newStudent: User) {
    for (let student of this.chosenStudents) {
      if (student.id === newStudent.id) {
        return false;
      }
    }
    return true;
  }

  checkUnitInclude(newUnit: Unit) {
    for (let unit of this.chosenUnits) {
      if (unit.id === newUnit.id) {
        return false;
      }
    }
    return true;
  }

  searchStudent() {
    if (this.searchStudentField !== '') {
      this.courseService.searchUserByNameContaining(this.searchStudentField).subscribe((data: User[]) => {
        this.showingStudents = data;
        this.arrowStudentKeyLocation = 0;
      }, error => {
        console.log(error);
      });
    }
  }

  searchUnit() {
    if (this.searchUnitField !== '') {
      this.unitService.searchByNameContaining(this.searchUnitField).subscribe((data: Unit[]) => {
        this.showingUnits = data;
        this.arrowUnitKeyLocation = 0;
      }, error => {
        console.log(error);
      });
    }
  }

  @HostListener('document:click', ['$event'])
  public documentClick(event: Event): void {
    const target = event.target as HTMLInputElement;
    if ((target.id === 'user-result') || (target.id === 'user-name')) {
      this.addStudent(this.showingStudents[this.arrowStudentKeyLocation]);
    } else if ((target.id === 'unit-result') || (target.id === 'unit-name')){
      this.addUnit(this.showingUnits[this.arrowUnitKeyLocation]);
    } else if (target.id === 'search-student-input') {
      this.showStudentOptions = true;
    } else if (target.id === 'search-unit-input') {
      this.showUnitOptions = true;
    } else {
      this.showStudentOptions = false;
      this.showUnitOptions = false;
    }
  }

  save() {
    this.course = {name: this.courseName, description: this.courseDescription};
    this.course.teacher = this.loginService.getCurrentUser();

    for (let unit of this.chosenUnits){
      unit.itineraries = [];
    }

    this.course.units = this.chosenUnits;
    this.course.students = this.chosenStudents;
    console.log(this.course);
    this.courseService.postCourse(this.course).subscribe((data: Course) => {
      this.routing.navigate(['/']);
    }, error => {console.log(error); } );
  }
}
