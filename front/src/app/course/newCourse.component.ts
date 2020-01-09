import {Component, HostListener, OnInit} from '@angular/core';
import {LoginService, User} from '../auth/login.service';
import {NewCourseService} from './newCourse.service';
import {Course} from './course.model';
import {ActivatedRoute, Router} from '@angular/router';
import {TabService} from '../tab/tab.service';
import {Unit} from '../unit/unit.model';
import {UnitService} from '../unit/unit.service';
import {Module} from '../itinerary/module/module.model';

@Component({
  templateUrl: './newCourse.component.html',
  styleUrls: ['./course.component.css']
})

export class NewCourseComponent implements OnInit {
  courseId: number;
  courseName = '';
  courseDescription = '';
  showingStudents: User[];
  chosenStudents: User[];
  showStudentOptions = false;
  showUnitOptions = false;
  searchStudentField: string;
  arrowStudentKeyLocation = 0;
  arrowUnitKeyLocation = 0;
  chosenModule: Module;
  course: Course;
  searchUnitField: string;
  showingUnits: Unit[];
  activeTab = 0;
  showMenu = true;

  constructor(private courseService: NewCourseService,
              private loginService: LoginService, private routing: Router,
              private activatedRoute: ActivatedRoute,
              private tabService: TabService,
              private unitService: UnitService) {
    this.chosenStudents = [];
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params.courseId) {
        this.courseId = params.courseId;

        this.courseService.getCourse(this.courseId).subscribe((data: Course) => {
          this.course = data;
          this.courseName = this.course.name;
          this.courseDescription = this.course.description;
          this.chosenStudents = this.course.students;
          this.chosenModule = this.course.module;
          this.tabService.setCourse(this.courseName);
        }, error => {console.log(error); });
      }
    });
  }

  addStudent(student: User) {
    if (this.checkStudentInclude(student)) {
      this.chosenStudents.push(student);
    }
  }

  removeStudent(student: User) {
    this.chosenStudents.splice(this.chosenStudents.indexOf(student), 1);
  }

  checkStudentInclude(newStudent: User) {
    for (let student of this.chosenStudents) {
      if (student.id === newStudent.id) {
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
    } else {
      this.showingStudents = [];
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
    } else {
      this.showingUnits = [];
      this.showUnitOptions = false;
    }
  }

  @HostListener('document:click', ['$event'])
  public documentClick(event: Event): void {
    const target = event.target as HTMLInputElement;
    if ((target.id === 'user-result') || (target.id === 'user-name')) {
      this.addStudent(this.showingStudents[this.arrowStudentKeyLocation]);
      this.showStudentOptions = false;
    } else if (target.id === 'search-student-input') {
      this.showStudentOptions = true;
      this.showUnitOptions = false;
    } else if (target.id === 'module-name') {
      this.showUnitOptions = false;
    } else if ((target.id === 'search-unit-input') || (target.id === 'unit-result') ||
      (target.classList.contains('mat-expansion-indicator') || (target.classList.contains('mat-expansion-panel-header')))) {
      this.showUnitOptions = true;
      this.showStudentOptions = false;
    } else {
      this.showStudentOptions = false;
      this.showUnitOptions = false;
    }
  }

  save() {
    this.course = {name: this.courseName, description: this.courseDescription};
    this.course.teacher = this.loginService.getCurrentUser();
    this.course.students = this.chosenStudents;
    this.course.module = this.chosenModule;
    console.log(this.course);
    if (this.courseId === undefined) {
      this.courseService.postCourse(this.course).subscribe((data: Course) => {
        this.routing.navigate(['/courses']);
      }, error => {console.log(error); } );
    } else {
      this.courseService.putCourse(this.course, this.courseId).subscribe((data: Course) => {
        this.routing.navigate(['/courses']);
      }, error => {console.log(error); } );
    }
  }

  private activateTab(tab: number) {
    this.activeTab = tab;
  }

  private setShowMenu(showMenu: boolean) {
    this.showMenu = showMenu;
  }

}
