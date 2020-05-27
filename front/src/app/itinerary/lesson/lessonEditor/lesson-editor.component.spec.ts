import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LoginService} from '../../../auth/login.service';
import {LessonService} from '../lesson.service';
import {UnitService} from '../../../unit/unit.service';
import {from, Observable} from 'rxjs';
import {Lesson} from '../lesson.model';
import {Unit} from '../../../unit/unit.model';
import {UnitLessonService} from '../unit-lesson.service';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {
  MatBottomSheet,
  MatCardModule, MatChipsModule, MatDialog,
  MatDialogModule, MatDialogRef,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatMenuModule, MatProgressBarModule,
  MatTabsModule,
  MatTooltipModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ActivatedRoute} from '@angular/router';
import {LessonEditorComponent} from './lesson-editor.component';
import {SlideService} from '../../../slide/slide.service';
import {TdDialogService} from '@covalent/core';
import {DefinitionQuestionService} from '../../../question/definitionQuestion/definitionQuestion.service';
import {CourseService} from '../../../course/course.service';
import {ModuleService} from '../../module/module.service';
import {TabService} from '../../../tab/tab.service';
import {ImageService} from '../../../images/image.service';
import {CardService} from '../../../card/card.service';
import {QuestionService} from '../../../question/question.service';
import {ClipboardService} from 'ngx-clipboard';
import {Tab} from '../../../tab/tab.model';
import {Module} from '../../module/module.model';

describe('Lesson Editor component', () => {

  let component: LessonEditorComponent;
  let fixture: ComponentFixture<LessonEditorComponent>;

  beforeEach(async(() => {

    class MockLoginService extends LoginService {
      isAdmin = true;
    }

    class MockTabService extends TabService {
      addTab(t: Tab) {
        return;
      }

      updateActiveTabLink(type: string, id: number, name: string, unitId: string, courseId: number, moduleId: number) {
        return;
      }
    }

    class MockLessonService extends LessonService {
      error = false;

      getLesson(id: number) {
        if (id !== 1) {
          this.error = true;
        }

        return Observable.create(observer => {
          if (this.error) {
            observer.error(new Error());
          } else {
            let lesson1: Lesson = {name: 'Test Lesson 1', slides: [], questionsIds: []};
            observer.next(lesson1);
          }
          observer.complete();
        });
      }

      updateLesson(lesson: Lesson) {
        return Observable.create(observer => {
          if (this.error) {
            observer.error(new Error());
          } else {
            observer.next(lesson);
          }
          observer.complete();
        });
      }
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
            let lesson1: Lesson = {name: 'Test Lesson 1', slides: [], questionsIds: []};
            let unit: Unit = {id: '1', name: 'Test Unit', lessons: [lesson1]};
            observer.next(unit);
          }
          observer.complete();
        });
      }
    }

    class MockUnitLessonService extends UnitLessonService {
      error = false;
    }

    class MockModuleService extends ModuleService {
      error = false;

      getModule(id: number) {
        if (id !== 1) {
          this.error = true;
        }

        return Observable.create(observer => {
          if (this.error) {
            observer.error(new Error());
          } else {
            let module: Module = {id: 1, name: 'Test Module'};
            observer.next(module);
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
        MatChipsModule,
        MatProgressBarModule,
        MatMenuModule
      ],
      providers: [MatDialog, SlideService, TdDialogService, DefinitionQuestionService, CourseService,
        MatBottomSheet, ImageService, CardService, QuestionService, ClipboardService,
        {
          provide: ActivatedRoute, useValue: {
            params: from([{unitId: 1, lessonId: 1, moduleId: 1}])
          }
        },
        {provide: ModuleService, useClass: MockModuleService},
        {provide: LoginService, useClass: MockLoginService},
        {provide: LessonService, useClass: MockLessonService},
        {provide: UnitLessonService, useClass: MockUnitLessonService},
        {provide: UnitService, useClass: MockUnitService},
        {provide: TabService, useClass: MockTabService},
        {provide: MatDialogRef, useValue: {}}],
      declarations: [LessonEditorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonEditorComponent);
    component = fixture.componentInstance;

    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
