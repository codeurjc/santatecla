import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LoginService} from '../../auth/login.service';
import {CourseService} from '../../course/course.service';
import {from, Observable} from 'rxjs';
import {Course} from '../../course/course.model';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {
  MatCardModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatTableModule,
  MatTabsModule, MatTooltipModule,
  MatTreeModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {TreetableModule} from 'ng-material-treetable';
import {ActivatedRoute} from '@angular/router';
import {ClassProgressComponent} from './class-progress.component';
import {ProgressService} from '../progress.service';
import {StudentProgressItem} from '../items/studentProgressItem.model';
import {By} from '@angular/platform-browser';

describe('Class Progress component', () => {

  let component: ClassProgressComponent;
  let fixture: ComponentFixture<ClassProgressComponent>;

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
            let course1: Course = {
              id: 1,
              name: 'Test Course 1',
              description: 'Test Course 1 Description',
              module: {name: 'Test Module', blocks: []}
            };
            observer.next(course1);
          }
          observer.complete();
        });
      }
    }

    class MockProgressService extends ProgressService {
      error = false;

      getClassProgress(courseId: number) {
        if (courseId !== 1) {
          this.error = true;
        }

        return Observable.create(observer => {
          if (this.error) {
            observer.error(new Error());
          } else {
            let item1: StudentProgressItem = {studentName: 'Test Student 1', average: 10, grades: [10, 10]};
            let item2: StudentProgressItem = {studentName: 'Test Student 2', average: 10, grades: [10, 10]};
            observer.next([item1, item2]);
          }
          observer.complete();
        });
      }

      getClassGradesGrouped(courseId: number) {
        if (courseId !== 1) {
          this.error = true;
        }

        return Observable.create(observer => {
          if (this.error) {
            observer.error(new Error());
          } else {
            let item1: StudentProgressItem = {studentName: 'Test Student 1', average: 10, grades: [10, 10]};
            let item2: StudentProgressItem = {studentName: 'Test Student 2', average: 10, grades: [10, 10]};
            observer.next([item1, item2]);
          }
          observer.complete();
        });
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
      providers: [
        {
          provide: ActivatedRoute, useValue: {
            params: from([{courseId: 1}])
          }
        },
        {provide: LoginService, useClass: MockLoginService},
        {provide: CourseService, useClass: MockCourseService},
        {provide: ProgressService, useClass: MockProgressService}],
      declarations: [ClassProgressComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassProgressComponent);
    component = fixture.componentInstance;

    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeDefined();
    expect(component.showingClassResults).not.toBeNull();
  });

  it('should show the diagram', () => {
    expect(component.barChartResults.length).toBe(2);
  });

  it('should search a student', () => {
    fixture.detectChanges();

    fixture.debugElement.query(By.css('#student-search')).nativeElement.value = 'Test Student 1';
    fixture.debugElement.query(By.css('#student-search')).triggerEventHandler('input', null);

    component.applyFilterStudent('Test Student 1');

    expect(component.showingClassResults.length).toBe(1);
  });
});

