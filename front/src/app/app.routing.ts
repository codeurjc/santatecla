import { ItineraryComponent } from './itinerary/itinerary.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { DefinitionQuestionComponent } from './definition/definitionQuestion.component';

const appRoutes = [
  { path: '' , component: DefinitionQuestionComponent },
  { path: 'unit/x/cards', component: CardComponent },
  { path: 'unit/x/itinerary/y', component: ItineraryComponent },
  { path: 'definition', component: DefinitionQuestionComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
