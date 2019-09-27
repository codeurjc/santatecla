import { ItineraryComponent } from './itinerary/itinerary.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';

const appRoutes = [
  { path: '' , component: ViewComponent },
  { path: 'units/:unitId/cards', component: CardComponent },
  { path: 'units/x/itinerary/y', component: ItineraryComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
