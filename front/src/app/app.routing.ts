import { ItineraryComponent } from './itinerary/itinerary.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { DefinitionQuestionComponent } from './questions/definitionQuestion.component';
import { ListQuestionComponent } from './questions/listQuestion.component';

const appRoutes = [
  { path: '' , component: ViewComponent },
  { path: 'units/:unitId/cards', component: CardComponent },
  { path: 'units/:unitId/itineraries/:itineraryId', component: ItineraryComponent },
  { path: 'definitionQuestion/:questionId', component: DefinitionQuestionComponent},
  { path: 'listQuestion/:questionId', component: ListQuestionComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
