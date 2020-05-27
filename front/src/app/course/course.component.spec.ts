import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LoginService} from '../auth/login.service';
import {CourseService} from './course.service';
import {from, Observable} from 'rxjs';
import {Course} from './course.model';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {
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
import {CourseComponent} from './course.component';
import {ActivatedRoute} from '@angular/router';
import {TabService} from '../tab/tab.service';
import {Tab} from '../tab/tab.model';
import {ModuleProgressComponent} from '../progress/module-progress/module-progress.component';
import {ClassProgressComponent} from '../progress/class-progress/class-progress.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {TreetableModule} from 'ng-material-treetable';
import {UnitService} from '../unit/unit.service';
import {By} from '@angular/platform-browser';

describe('My Courses component', () => {

  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async(() => {
    class MockLoginService extends LoginService {
      isAdmin = true;
    }

    class MockCourseService extends CourseService {
      error = false;

      getCourse(id: number) {
        if (id !== 1) {
          this.error = true;
        }

        return Observable.create(observer => {
          if (this.error) {
            observer.error(new Error());
          } else {
            let course1: Course = {id: 1, name: 'Test Course 1', description: 'Test Course 1 Description', module: {name: 'Test Module', blocks: []}};
            observer.next(course1);
          }
          observer.complete();
        });
      }
    }

    class MockTabService extends TabService {
      addTab(tab: Tab) {
        return;
      }
    }

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
      providers: [MatSnackBar, UnitService, MatDialog,
        {provide: ActivatedRoute, useValue: {
            params: from([{courseId: 1}])
        }},
        {provide: LoginService, useClass: MockLoginService},
        {provide: CourseService, useClass: MockCourseService},
        {provide: TabService, useClass: MockTabService},
        {provide: MatDialogRef, useValue: {}}],
      declarations: [CourseComponent, ModuleProgressComponent, ClassProgressComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;

    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeDefined();
    expect(component.course).not.toBeNull();
  });

  it('should show the course correctly', () => {
    fixture.detectChanges();

    let title = fixture.debugElement.query(By.css('#course-name')).nativeElement.textContent;
    expect(title).toBe(' Test Course 1 edit');
  });

  it('should add copy the URL to add new students', () => {
    spyOn(component, 'copyUrl');
    fixture.detectChanges();

    fixture.debugElement.query(By.css('.add-students-button')).triggerEventHandler('click', null);

    expect(component.copyUrl).toHaveBeenCalled();
  });
});
