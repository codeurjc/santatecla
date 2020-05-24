import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
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
import {QuestionTrackingComponent} from "./questionTracking.component";
import {MatListModule} from "@angular/material/list";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {UnitService} from "../../unit/unit.service";
import {TabService} from "../../tab/tab.service";

describe('QuestionTracking component', () => {

  let component: QuestionTrackingComponent;
  let fixture: ComponentFixture<QuestionTrackingComponent>;

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
        MatListModule,
        NgxChartsModule
      ],
      providers: [
        LoginService,
        QuestionService,
        UnitService,
        TabService,
        {provide: MatDialogRef, useValue: {}}
      ],
      declarations: [
        QuestionComponent,
        QuestionTrackingComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionTrackingComponent);
    component = fixture.componentInstance;

  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });

});
