import {Component, OnInit} from '@angular/core';
import {Course} from './course.model';
import {LoginService} from '../auth/login.service';
import {CourseService} from './course.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NestedTreeControl} from '@angular/cdk/tree';
import {Module} from '../itinerary/module/module.model';
import {MatDialog, MatSnackBar, MatTreeNestedDataSource} from '@angular/material';
import {NewCourseComponent} from './newCourse.component';
import {TabService} from '../tab/tab.service';
import {Tab} from '../tab/tab.model';

@Component({
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {
  course: Course;
  id: number;

  treeControl = new NestedTreeControl<Module>(node => !!node && node.blocks);
  dataSource = new MatTreeNestedDataSource<Module>();

  showMenu = true;
  activeBreadcrumb = 0;

  constructor(public loginService: LoginService,
              private courseService: CourseService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private snackBar: MatSnackBar,
              public dialog: MatDialog,
              private tabService: TabService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.courseId;
      if (this.loginService.isAdmin) {
        this.courseService.getCourse(this.id).subscribe((data: Course) => {
          this.course = data;
          this.dataSource.data = this.course.module.blocks;
          this.tabService.addTab(new Tab('Curso', this.course.id, this.course.name, null, null, null));
          this.activeBreadcrumb = 0;
        }, error => {
          console.log(error);
        });
      } else {
        this.courseService.addNewStudent(this.id, this.loginService.getCurrentUser()).subscribe((data: any) => {
          this.router.navigate(['/courses']);
        }, error => { console.log(error); } );
      }
    });
  }

  hasChild = (_: number, node: Module) => !!node && !!node.blocks && node.blocks.length > 0;

  private activateBreadcrumb(tab: number) {
    this.activeBreadcrumb = tab;
  }

  private setShowMenu(showMenu: boolean) {
    this.showMenu = showMenu;
  }

  openEditCourseDialog() {
    const dialogRef = this.dialog.open(NewCourseComponent, {
      width: '600px',
      data: {data: this.course.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  copyUrl() {
    const url = window.location.href;
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (url));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }

  addStudents() {
    this.copyUrl();
    this.snackBar.open('La URL para acceder al curso ha sido copiada al portapapeles', 'Entendido', {
      duration: 4000,
    });
  }

  viewLesson(lessonId: number) {
    this.courseService.findModuleUnit(lessonId).subscribe((data: number) => {
      this.router.navigate(['/units/' + data + '/modules/' + this.course.module.id + '/lessons/' + lessonId]);
    }, error => {
      console.log(error);
    });
  }
}
