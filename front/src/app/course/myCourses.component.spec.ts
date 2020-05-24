import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MyCoursesComponent} from './myCourses.component';
import {LoginService} from '../auth/login.service';
import {CourseService} from './course.service';
import {Observable, of} from 'rxjs';
import {Course} from './course.model';
import {TdDialogService} from '@covalent/core';
import {By} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


describe('My Courses component', () => {

  let component: MyCoursesComponent;
  let fixture: ComponentFixture<MyCoursesComponent>;

  beforeEach(async(() => {
    class MockLoginService extends LoginService {
      isAdmin = true;

      getCurrentUser() {
        return {id: 1, name: 'Test User', roles: ['ROLE_ADMIN'], authdata: ''};
      }
    }

    class MockCourseService extends CourseService {
      error = false;

      getTeacherCourses(id: number) {
        if (id !== 1) {
          this.error = true;
        }

        return Observable.create(observer => {
          if (this.error) {
            observer.error(new Error());
          } else {
            let course1: Course = {id: 1, name: 'Test Course 1', description: 'Test Course 1 Description'};
            let course2: Course = {id: 2, name: 'Test Course 2', description: 'Test Course 2 Description'};
            observer.next([course1, course2]);
          }
          observer.complete();
        });
      }

      searchByNameContaining(name: string) {
        if (name !== 'Test Course 1') {
          this.error = true;
        }

        return Observable.create(observer => {
        if (this.error) {
          observer.error(new Error());
        } else {
          let course1: Course = {id: 1, name: 'Test Course 1', description: 'Test Course 1 Description'};
          observer.next([course1]);
        }
        observer.complete();
      });
      }

      deleteCourse(id: number) {
        if (id !== 1) {
          this.error = true;
        }

        return Observable.create(observer => {
          if (this.error) {
            observer.error(new Error());
          } else {
            observer.next();
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
        MatDialogModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      providers: [TdDialogService,
        {provide: LoginService, useClass: MockLoginService},
        {provide: CourseService, useClass: MockCourseService}],
      declarations: [MyCoursesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCoursesComponent);
    component = fixture.componentInstance;

    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should have 2 courses', () => {
    expect(component.courses.length).toBe(2);
  });

  it('should delete a course', () => {
    let course1: Course = {id: 1, name: 'Test Course 1', description: 'Test Course 1 Description'};

    spyOn(component.dialogService, 'openConfirm')
      .and
      .returnValue({afterClosed: () => of(true)});

    component.deleteCourse(course1);

    expect(component.courses.length).toBe(1);
  });

  it('should search a course', () => {
    fixture.debugElement.query(By.css('#search-input')).nativeElement.value = 'Test Course 1';
    fixture.debugElement.query(By.css('#search-input')).triggerEventHandler('input', null);

    component.searchField = 'Test Course 1';
    component.search();

    expect(component.showingCourses.length).toBe(1);
  });
});
