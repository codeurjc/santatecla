import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {LoginService} from "../auth/login.service";
import {RouterTestingModule} from "@angular/router/testing";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatButtonModule} from "@angular/material/button";
import {QuestionComponent} from "./question.component";
import {QuestionService} from "./question.service";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatChipsModule} from "@angular/material/chips";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatMenuModule} from "@angular/material/menu";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {Observable} from "rxjs";
import {Question} from "./question.model";
import {ConfirmActionComponent} from "../confirmAction/confirm-action.component";
import {By} from "@angular/platform-browser";
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";

describe('Question component', () => {

  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  class MockLoginService extends LoginService {
    isAdmin = true;
  }

  class MockQuestionService extends QuestionService {
    error = false;

    getUnitQuestions(id: number) {
      return Observable.create(observer => {
        if (this.error) {
          observer.error(new Error());
        } else {
          let question1: Question = {id: 1, questionText: 'Question One', subtype: 'DefinitionQuestion'};
          let question2: Question = {id: 2, questionText: 'Question Two', subtype: 'DefinitionQuestion'};
          let question3: Question = {id: 3, questionText: 'Question Three', subtype: 'DefinitionQuestion'};
          let question4: Question = {id: 4, questionText: 'Question Four', subtype: 'DefinitionQuestion'};
          observer.next([question1, question2, question3, question4]);
        }
        observer.complete();
      });
    }
  }

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        MatDialogModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatCheckboxModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatSelectModule,
        DragDropModule,
        MatChipsModule,
        MatExpansionModule,
        MatMenuModule,
        MatTableModule,
        MatPaginatorModule
      ],
      providers: [
        {provide: LoginService, useClass: MockLoginService},
        {provide: QuestionService, useClass: MockQuestionService}
      ],
      declarations: [
        QuestionComponent,
        ConfirmActionComponent
      ]
    }).overrideModule(BrowserDynamicTestingModule, { set: { entryComponents: [ConfirmActionComponent] }
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;

    component.ngOnInit();

  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should show question list', () => {
    const length = 4;
    expect(component.questions.length).toBe(length);
    expect(component.dataSource.data.length).toBe(length);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#question-table-content')).nativeElement.childNodes[2].childNodes[1].childNodes.length).toBe(length + 1);
  });

});
