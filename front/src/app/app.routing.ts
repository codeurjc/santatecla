import { ItineraryComponent } from './itinerary/itinerary.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { DefinitionQuestionComponent } from './questions/definitionQuestion.component';

const appRoutes = [
  { path: '' , component: ViewComponent },
  { path: 'units/:unitId/cards', component: CardComponent },
  { path: 'units/:unitId/itineraries/:itineraryId', component: ItineraryComponent },
  { path: 'definition', component: DefinitionQuestionComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
