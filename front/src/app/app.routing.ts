import { ItineraryComponent } from './itinerary/itinerary.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { DefinitionQuestionComponent } from './question/definitionQuestion/definitionQuestion.component';
import { ListQuestionComponent } from './question/listQuestion/listQuestion.component';
import { QuestionComponent } from './question/question.component';
import { ProgressComponent } from './progress/progress.component';
import {TestQuestionComponent} from './question/testQuestion/testQuestion.component';
import {MyCoursesComponent} from './course/myCourses.component';
import {CourseComponent} from './course/course.component';
import {NewCourseComponent} from './course/newCourse.component';
import {UnitsComponent} from './itinerary/tools/units.component';
import {ItineraryFormComponent} from './itinerary/itineraryForm/itineraryForm.component';
import {AnswerDefinitionDialogComponent} from './question/answerQuestionDialog/answerDefinitionDialog.component';


const appRoutes = [
  { path: '' , component: ViewComponent },
  { path: 'units', component: UnitsComponent },
  { path: 'itineraryForm', component: ItineraryFormComponent },
  { path: 'units/:unitId/cards', component: CardComponent },
  { path: 'units/:unitId/itineraries/:itineraryId', component: ItineraryComponent },
  { path: 'units/:unitId/question', component: QuestionComponent },
  { path: 'answerQuestionDialog', component: AnswerDefinitionDialogComponent},
  { path: 'units/:unitId/itineraries/:itineraryId/definitionQuestion/:questionId', component: DefinitionQuestionComponent},
  { path: 'units/:unitId/itineraries/:itineraryId/listQuestion/:questionId', component: ListQuestionComponent},
  { path: 'units/:unitId/itineraries/:itineraryId/testQuestion/:questionId', component: TestQuestionComponent},
  { path: 'question', component: QuestionComponent},
  { path: 'courses', component: MyCoursesComponent },
  { path: 'course/:courseId', component: CourseComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'newCourse', component: NewCourseComponent},
  { path: 'editCourse/:courseId', component: NewCourseComponent}

];

export const routing = RouterModule.forRoot(appRoutes);
