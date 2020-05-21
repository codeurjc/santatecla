import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LoginService} from '../../../auth/login.service';
import {TabService} from '../../../tab/tab.service';
import {Tab} from '../../../tab/tab.model';
import {from, Observable} from 'rxjs';
import {Lesson} from '../../lesson/lesson.model';
import {UnitService} from '../../../unit/unit.service';
import {Unit} from '../../../unit/unit.model';
import {ModuleService} from '../module.service';
import {Module} from '../module.model';
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
  MatTooltipModule, MatTreeModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SlideService} from '../../../slide/slide.service';
import {TdDialogService} from '@covalent/core';
import {DefinitionQuestionService} from '../../../question/definitionQuestion/definitionQuestion.service';
import {CourseService} from '../../../course/course.service';
import {ImageService} from '../../../images/image.service';
import {CardService} from '../../../card/card.service';
import {QuestionService} from '../../../question/question.service';
import {ClipboardService} from 'ngx-clipboard';
import {ActivatedRoute} from '@angular/router';
import {ModuleEditorComponent} from './module-editor.component';

describe('Module Editor component', () => {

  let component: ModuleEditorComponent;
  let fixture: ComponentFixture<ModuleEditorComponent>;

  beforeEach(async(() => {

    class MockLoginService extends LoginService {
      isAdmin = true;
    }

    class MockTabService extends TabService {
      activeTab = new Tab('TEST', 1, 'TEST', '1', 1, 1);
      addTab(t: Tab) {
        return;
      }

      updateActiveTabLink(type: string, id: number, name: string, unitId: string, courseId: number, moduleId: number) {
        return;
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
            let module: Module = {id: 1, name: 'Test Module', blocks: []};
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
        MatMenuModule,
        MatTreeModule
      ],
      providers: [MatDialog, SlideService, TdDialogService, DefinitionQuestionService, CourseService,
        MatBottomSheet, ImageService, CardService, QuestionService, ClipboardService,
        {
          provide: ActivatedRoute, useValue: {
            params: from([{unitId: 1, courseId: 1, moduleId: 1}])
          }
        },
        {provide: ModuleService, useClass: MockModuleService},
        {provide: LoginService, useClass: MockLoginService},
        {provide: UnitService, useClass: MockUnitService},
        {provide: TabService, useClass: MockTabService},
        {provide: MatDialogRef, useValue: {}}],
      declarations: [ModuleEditorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleEditorComponent);
    component = fixture.componentInstance;

    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
