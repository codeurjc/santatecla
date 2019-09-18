import { RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';

const appRoutes = [
  { path: '' , component: ViewComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
