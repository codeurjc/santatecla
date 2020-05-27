import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {LoginService} from "../../auth/login.service";
import {RouterTestingModule} from "@angular/router/testing";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatButtonModule} from "@angular/material/button";
import {QuestionComponent} from "../question.component";
import {QuestionService} from "../question.service";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatChipsModule} from "@angular/material/chips";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatMenuModule} from "@angular/material/menu";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {AddQuestionDialogComponent} from "./addQuestionDialog.component";
import {MatListModule} from "@angular/material/list";
import {MatSnackBar} from "@angular/material/snack-bar";
import {By} from "@angular/platform-browser";

describe('AddQuestionDialog component', () => {

  let component: AddQuestionDialogComponent;
  let fixture: ComponentFixture<AddQuestionDialogComponent>;

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
        MatPaginatorModule,
        MatListModule
      ],
      providers: [
        LoginService,
        QuestionService,
        MatSnackBar,
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: MatDialogRef, useValue: {}}
      ],
      declarations: [
        QuestionComponent,
        AddQuestionDialogComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AddQuestionDialogComponent);
    component = fixture.componentInstance;

  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should change the form type', () => {
    fixture.detectChanges();
    component.setQuestion('DefinitionQuestion');
    expect(fixture.debugElement.query(By.css('#definition-question-form'))).toBeDefined();
    expect(fixture.debugElement.query(By.css('#list-question-form'))).toBeNull();
    expect(fixture.debugElement.query(By.css('#test-question-form'))).toBeNull();
    component.setQuestion('ListQuestion');
    expect(fixture.debugElement.query(By.css('#list-question-form'))).toBeDefined();
    expect(fixture.debugElement.query(By.css('#test-question-form'))).toBeNull();
    component.setQuestion('TestQuestion');
    expect(fixture.debugElement.query(By.css('#list-question-form'))).toBeNull();
    expect(fixture.debugElement.query(By.css('#test-question-form'))).toBeDefined();
  });

  it('should create possible list answers', () => {
    fixture.detectChanges();
    component.setQuestion('ListQuestion');
    component.answerInput = 'a';
    component.correct = true;
    component.addPossibleTestAnswer();
    component.answerInput = 'b';
    component.correct = false;
    component.addPossibleTestAnswer();
    component.answerInput = 'c';
    component.correct = true;
    component.addPossibleTestAnswer();
    expect(component.possibleAnswers.size).toBe(3);
  });

});
