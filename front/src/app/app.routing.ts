import { LessonEditorComponent } from './itinerary/lesson/lessonEditor/lesson-editor.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { DefinitionQuestionComponent } from './question/definitionQuestion/definitionQuestion.component';
import { ListQuestionComponent } from './question/listQuestion/listQuestion.component';
import { QuestionComponent } from './question/question.component';
import { ModuleProgressComponent } from './progress/module-progress/module-progress.component';
import {TestQuestionComponent} from './question/testQuestion/testQuestion.component';
import {MyCoursesComponent} from './course/myCourses.component';
import {NewCourseComponent} from './course/newCourse.component';
import {UnitsCardsToolComponent} from './itinerary/lesson/lessonTools/units-cards-tool.component';
import {LessonFormComponent} from './itinerary/lesson/lessonForm/lesson-form.component';
import {AnswerDefinitionDialogComponent} from './question/answerQuestionDialog/answerDefinitionDialog.component';
import {AddQuestionDialogComponent} from './question/addQuestionDialog/addQuestionDialog.component';
import {UnitComponent} from './unit/unit.component';
import {HomeComponent} from './home/home.component';
import {LessonComponent} from './itinerary/lesson/lesson.component';
import {ModuleComponent} from './itinerary/module/module.component';
import {ModuleEditorComponent} from './itinerary/module/moduleEditor/module-editor.component';
import {CourseComponent} from './course/course.component';
import {ModuleFormComponent} from './itinerary/module/moduleForm/module-form.component';
import {UnitsBlocksToolComponent} from './itinerary/module/moduleEditor/units-blocks-tool.component';
import {QuestionTrackingComponent} from './question/questionTracking/questionTracking.component';


const appRoutes = [
  { path: '' , component: HomeComponent },
  { path: 'unit' , component: ViewComponent },
  { path: 'unit/:unitId', component: UnitComponent },
  { path: 'unitsCardsTool', component: UnitsCardsToolComponent },
  { path: 'unitsBlocksTool', component: UnitsBlocksToolComponent },
  { path: 'lessonForm', component: LessonFormComponent },
  { path: 'moduleForm', component: ModuleFormComponent },
  { path: 'units/:unitId/cards', component: CardComponent },
  { path: 'units/:unitId/lessons', component: LessonComponent },
  { path: 'units/:unitId/modules', component: ModuleComponent },
  { path: 'units/:unitId/lessons/:lessonId', component: LessonEditorComponent },
  { path: 'units/:unitId/modules/:moduleId/lessons/:lessonId', component: LessonEditorComponent },
  { path: 'units/:unitId/modules/:moduleId', component: ModuleEditorComponent },
  { path: 'course/:courseId/modules/:moduleId', component: ModuleEditorComponent },
  { path: 'units/:unitId/question', component: QuestionComponent },
  { path: 'units/:unitId/question/:questionId', component: QuestionTrackingComponent },
  { path: 'answerQuestionDialog', component: AnswerDefinitionDialogComponent},
  { path: 'addQuestionDialog', component: AddQuestionDialogComponent},
  { path: 'units/:unitId/itineraries/:itineraryId/definitionQuestion/:questionId', component: DefinitionQuestionComponent},
  { path: 'units/:unitId/itineraries/:itineraryId/listQuestion/:questionId', component: ListQuestionComponent},
  { path: 'units/:unitId/itineraries/:itineraryId/testQuestion/:questionId', component: TestQuestionComponent},
  { path: 'question', component: QuestionComponent},
  { path: 'courses', component: MyCoursesComponent },
  { path: 'progress', component: ModuleProgressComponent },
  { path: 'newCourse', component: NewCourseComponent},
  { path: 'course/:courseId', component: CourseComponent}

];

export const routing = RouterModule.forRoot(appRoutes);
