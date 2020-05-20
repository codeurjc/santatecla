import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LoginService} from '../auth/login.service';
import {CourseService} from './course.service';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatBottomSheet,
  MatCardModule, MatDialog,
  MatDialogModule, MatDialogRef,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatSnackBar, MatTableModule,
  MatTabsModule, MatTooltipModule,
  MatTreeModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ModuleProgressComponent} from '../progress/module-progress/module-progress.component';
import {ClassProgressComponent} from '../progress/class-progress/class-progress.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {TreetableModule} from 'ng-material-treetable';
import {UnitService} from '../unit/unit.service';
import {NewCourseComponent} from './newCourse.component';
import {By} from '@angular/platform-browser';

describe('New Course component', () => {

  let component: NewCourseComponent;
  let fixture: ComponentFixture<NewCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatTreeModule,
        MatCardModule,
        MatTabsModule,
        NgxChartsModule,
        TreetableModule,
        MatTableModule,
        MatTooltipModule,
        MatDialogModule,
      ],
      providers: [MatSnackBar, UnitService, MatDialog, CourseService, LoginService,
        MatBottomSheet, MatSnackBar, MatDialog,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        {provide: MatDialogRef, useValue: {}}],
      declarations: [NewCourseComponent, ModuleProgressComponent, ClassProgressComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCourseComponent);
    component = fixture.componentInstance;

    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should not create course', () => {
    spyOn(component, 'openError');
    fixture.detectChanges();

    fixture.debugElement.query(By.css('#course-name')).nativeElement.value = 'Test Course 1';
    fixture.debugElement.query(By.css('.save-course')).triggerEventHandler('click', null);
    expect(component.openError).toHaveBeenCalled();
  });
});
