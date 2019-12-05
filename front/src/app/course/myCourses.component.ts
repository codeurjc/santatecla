import {Component, OnInit} from '@angular/core';
import {LoginService} from '../auth/login.service';
import {MyCoursesService} from './myCourses.service';
import {Course} from './course.model';
import {Router} from '@angular/router';
import {TabService} from '../tab/tab.service';
import {TdDialogService} from '@covalent/core';
import {MenuComponent} from "../menu/menu.component";

@Component({
  templateUrl: './myCourses.component.html',
  styleUrls: ['./course.component.css']
})

export class MyCoursesComponent implements OnInit {
  courses: Course[];
  searchField = '';

  constructor(private loginService: LoginService,
              private courseService: MyCoursesService,
              private router: Router,
              private tabService: TabService,
              private dialogService: TdDialogService) {
    this.courses = [];
  }

  ngOnInit() {
    this.tabService.setCourses();
    if (this.loginService.isAdmin) {
      this.courseService.getTeacherCourses(this.loginService.getCurrentUser().id).subscribe((data: Course[]) => {
        this.courses = data;
      }, error => {console.log(error); });
    } else {
      this.courseService.getUserCourses(this.loginService.getCurrentUser().id).subscribe((data: Course[]) => {
        this.courses = data;
      }, error => {console.log(error); });
    }
  }

  deleteCourse(course: Course) {
    this.dialogService.openConfirm({
      message: '¿Seguro que desea eliminar el curso ' + course.name + ' ?',
      title: 'Confirmación',
      width: '400px',
      height: '200px'
    }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {
        this.courseService.deleteCourse(course.id).subscribe((_) => {
          this.courses.splice(this.courses.indexOf(course), 1);
        }, error => {console.log(error); });
      }
    });
  }

  search() {
    // TODO
  }

}
