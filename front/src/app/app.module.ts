import { MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule,
  MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule,
  MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule,
  MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule,
  MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule,
} from '@angular/material';

import { CovalentCommonModule, CovalentLayoutModule, CovalentMediaModule, CovalentExpansionPanelModule,
  CovalentStepsModule, CovalentLoadingModule, CovalentDialogsModule, CovalentSearchModule, CovalentPagingModule,
  CovalentNotificationsModule, CovalentMenuModule, CovalentDataTableModule, CovalentMessageModule } from '@covalent/core';

import {FormsModule, NgModel} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthInterceptor } from './auth/auth.interceptor';
import { ErrorInterceptor } from './auth/error.interceptor';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { NgJsonEditorModule } from 'ang-jsoneditor';
import { ClipboardModule } from 'ngx-clipboard';

import { AppComponent } from './app.component';
import { LoginService } from './auth/login.service';
import { ItineraryService } from './itinerary/itinerary.service';
import { ViewComponent } from './view/view.component';
import { CardComponent } from './card/card.component';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { CardService } from './card/card.service';
import { SlideService } from './slide/slide.service';
import { QuestionComponent } from './question/question.component';
import { UnitService } from './unit/unit.service';
import { UnitComponent } from './unit/unit.component';
import { DefinitionQuestionComponent } from './question/definitionQuestion/definitionQuestion.component';
import { DefinitionQuestionService } from './question/definitionQuestion/definitionQuestion.service';
import { ListQuestionComponent } from './question/listQuestion/listQuestion.component';
import { ListQuestionService } from './question/listQuestion/listQuestion.service';
import { ProgressComponent } from './progress/progress.component';
import { ProgressService } from './progress/progress.service';
import {QuestionService} from './question/question.service';
import {TestQuestionComponent} from './question/testQuestion/testQuestion.component';
import {TestQuestionService} from './question/testQuestion/testQuestion.service';
import {StudentHomeComponent} from './course/studentHome.component';
import {StudentHomeService} from './course/studentHome.service';
import {CourseComponent} from './course/course.component';
import {CourseService} from './course/course.service';
import {TabService} from './tab/tab.service';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {NewCourseComponent} from './course/newCourse.component';
import {NewCourseService} from './course/newCourse.service';
import {LoginComponent} from './login/login.component';
import {MenuComponent} from './menu/menu.component';
import {UnitsComponent} from './itinerary/tools/units.component';
import {ItineraryFormComponent} from './itinerary/itineraryForm/itineraryForm.component';
import {AnswerDefinitionDialogComponent} from './question/answerQuestionDialog/answerDefinitionDialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ItineraryFormComponent,
    LoginComponent,
    MenuComponent,
    ViewComponent,
    UnitComponent,
    CardComponent,
    ItineraryComponent,
    UnitsComponent,
    DefinitionQuestionComponent,
    ListQuestionComponent,
    QuestionComponent,
    ProgressComponent,
    TestQuestionComponent,
    StudentHomeComponent,
    CourseComponent,
    NewCourseComponent,
    AnswerDefinitionDialogComponent
  ],
  imports: [
    ClipboardModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    FormsModule,
    routing,
    NgJsonEditorModule,
    CovalentCommonModule, CovalentLayoutModule, CovalentMediaModule, CovalentExpansionPanelModule,
    CovalentStepsModule, CovalentLoadingModule, CovalentDialogsModule, CovalentSearchModule, CovalentPagingModule,
    CovalentNotificationsModule, CovalentMenuModule, CovalentDataTableModule, CovalentMessageModule, NgxChartsModule
  ],
  providers: [LoginService, ItineraryService, CardService, SlideService, DefinitionQuestionService, ListQuestionService, QuestionService,
    ProgressService, TestQuestionService, StudentHomeService, CourseService, TabService, UnitService, NewCourseService,
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})

export class AppModule { }
