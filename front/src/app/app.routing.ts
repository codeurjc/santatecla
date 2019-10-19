import { ItineraryComponent } from './itinerary/itinerary.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { DefinitionQuestionComponent } from './questions/definitionQuestion/definitionQuestion.component';
import { ListQuestionComponent } from './questions/listQuestion/listQuestion.component';
import {QuestionComponent} from './questions/question.component';

const appRoutes = [
  { path: '' , component: ViewComponent },
  { path: 'units/:unitId/cards', component: CardComponent },
  { path: 'units/:unitId/itineraries/:itineraryId', component: ItineraryComponent },
  // { path: 'units/:unitId/questions/:questionId', component: QuestionComponent },
  { path: 'definitionQuestion/:questionId', component: DefinitionQuestionComponent},
  { path: 'listQuestion/:questionId', component: ListQuestionComponent},
  { path: 'question', component: QuestionComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
