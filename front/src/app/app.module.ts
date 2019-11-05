import { MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule,
  MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule,
  MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule,
  MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule,
  MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule,
} from '@angular/material';

import { CovalentCommonModule, CovalentLayoutModule, CovalentMediaModule, CovalentExpansionPanelModule,
  CovalentStepsModule, CovalentLoadingModule, CovalentDialogsModule, CovalentSearchModule, CovalentPagingModule,
  CovalentNotificationsModule, CovalentMenuModule, CovalentDataTableModule, CovalentMessageModule } from '@covalent/core';

import { FormsModule } from '@angular/forms';
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

import { AppComponent } from './app.component';
import { LoginService } from './auth/login.service';
import { ItineraryService } from './itinerary/itinerary.service';
import { ViewComponent } from './view/view.component';
import { CardComponent } from './card/card.component';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { CardService } from './card/card.service';
import { SlideService } from './slide/slide.service';
import { QuestionComponent } from './question/question.component';
import { ViewService } from './view/view.service';
import { DefinitionQuestionComponent } from './question/definitionQuestion/definitionQuestion.component';
import { DefinitionQuestionService } from './question/definitionQuestion/definitionQuestion.service';
import { ListQuestionComponent } from './question/listQuestion/listQuestion.component';
import { ListQuestionService } from './question/listQuestion/listQuestion.service';
import { ProgressComponent } from './progress/progress.component';
import { ProgressService } from './progress/progress.service';
import {QuestionService} from './question/question.service';
import {TestQuestionComponent} from './question/testQuestion/testQuestion.component';
import {TestQuestionService} from './question/testQuestion/testQuestion.service';
import {CourseComponent} from './course/course.component';
import {CourseService} from './course/course.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    CardComponent,
    ItineraryComponent,
    DefinitionQuestionComponent,
    ListQuestionComponent,
    QuestionComponent,
    ProgressComponent,
    TestQuestionComponent,
    CourseComponent
  ],
  imports: [
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
    CovalentNotificationsModule, CovalentMenuModule, CovalentDataTableModule, CovalentMessageModule
  ],
  providers: [LoginService, ItineraryService, CardService, SlideService, DefinitionQuestionService, ListQuestionService, QuestionService,
    ProgressService, ViewService, TestQuestionService, CourseService,
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})

export class AppModule { }
