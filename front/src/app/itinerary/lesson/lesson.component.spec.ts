import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {from, Observable, of} from 'rxjs';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {
  MatCardModule, MatDialog, MatDialogModule, MatDialogRef,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatMenuModule,
  MatTabsModule, MatTooltipModule,
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LessonComponent} from './lesson.component';
import {LoginService} from '../../auth/login.service';
import {LessonService} from './lesson.service';
import {UnitService} from '../../unit/unit.service';
import {UnitLessonService} from './unit-lesson.service';
import {ActivatedRoute} from '@angular/router';
import {Unit} from '../../unit/unit.model';
import {Lesson} from './lesson.model';
import {By} from '@angular/platform-browser';

describe('Lesson component', () => {

  let component: LessonComponent;
  let fixture: ComponentFixture<LessonComponent>;

  beforeEach(async(() => {

    class MockLoginService extends LoginService {
      isAdmin = true;
    }

    class MockLessonService extends LessonService {

    }

    class MockUnitService extends UnitService {
      error = false;
      getUnit(id: number) {
        if (id !== 1) {
          this.error = true;
        }

        return Observable.create(observer => {
          if (this.error) {
            observer.error(new Error());
          } else {
            const lesson1: Lesson = {name: 'Test Lesson 1', slides: []};
            const lesson2: Lesson = {name: 'Test Lesson 2', slides: []};
            const unit: Unit = {id: '1', name: 'Test Unit', lessons: [lesson1, lesson2]};
            observer.next(unit);
          }
          observer.complete();
        });
      }
    }

    class MockUnitLessonService extends UnitLessonService {
      error = false;
      addLesson(id: number, lesson: Lesson) {
        if (id !== 1) {
          this.error = true;
        }

        return Observable.create(observer => {
          if (this.error) {
            observer.error(new Error());
          } else {
            lesson = {id: 1, name: 'Test Lesson 3', slides: []};
            observer.next(lesson);
          }
          observer.complete();
        });
      }

      deleteLesson(unitId: number, lessonId: number) {
        if (unitId !== 1) {
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
        HttpClientModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatTabsModule,
        MatTooltipModule,
        MatDialogModule,
        MatMenuModule
      ],
      providers: [MatDialog,
        {provide: ActivatedRoute, useValue: {
            params: from([{unitId: 1}])
        }},
        {provide: LoginService, useClass: MockLoginService},
        {provide: LessonService, useClass: MockLessonService},
        {provide: UnitLessonService, useClass: MockUnitLessonService},
        {provide: UnitService, useClass: MockUnitService},
        {provide: MatDialogRef, useValue: {}}],
      declarations: [LessonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonComponent);
    component = fixture.componentInstance;

    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeDefined();
    expect(component.lessons.length).toBe(2);
  });

  it('should add a new Lesson', () => {
    const lesson: Lesson = {id: 1, name: 'Test Lesson 3', slides: []};
    spyOn(component.dialog, 'open')
      .and
      .returnValue({afterClosed: () => of(lesson)});

    fixture.detectChanges();

    fixture.debugElement.query(By.css('.new-lesson-button')).triggerEventHandler('click', null);

    expect(component.newLesson).toBe(lesson);
  });

  it('should delete a Lesson', () => {
    spyOn(component, 'ngOnInit');
    spyOn(component.dialog, 'open')
      .and
      .returnValue({afterClosed: () => of(1)});
    fixture.detectChanges();

    component.deleteLesson(1);

    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should search a lesson', () => {
    fixture.debugElement.query(By.css('#search-input')).nativeElement.value = 'Test Lesson 1';
    fixture.debugElement.query(By.css('#search-input')).triggerEventHandler('input', null);

    component.searchLesson('Test Lesson 1');

    expect(component.lessonsResult.length).toBe(1);
  });
});
