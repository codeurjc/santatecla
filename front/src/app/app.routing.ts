import { ItineraryComponent } from './itinerary/itinerary.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { DefinitionQuestionComponent } from './question/definitionQuestion/definitionQuestion.component';
import { ListQuestionComponent } from './question/listQuestion/listQuestion.component';
import {QuestionComponent} from './question/question.component';
import { ProgressComponent } from './progress/progress.component';


const appRoutes = [
  { path: '' , component: ViewComponent },
  { path: 'units/:unitId/cards', component: CardComponent },
  { path: 'units/:unitId/itineraries/:itineraryId', component: ItineraryComponent },
  // { path: 'units/:unitId/question/:questionId', component: QuestionComponent },
  { path: 'definitionQuestion/:questionId', component: DefinitionQuestionComponent},
  { path: 'listQuestion/:questionId', component: ListQuestionComponent},
  { path: 'question', component: QuestionComponent},
  { path: 'units/:unitId/progress', component: ProgressComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
