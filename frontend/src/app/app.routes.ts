import { Routes } from '@angular/router';
import { RouterErrorComponent } from './error/router-error/router-error.component';
import { AuthGuard } from './core/guards/auth.guard';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  //   {
  //     path: '',
  //     canActivate: [AuthGuard],
  //   loadChildren: () =>
  //     import('./routes/all-routing.routes').then((m) => m.ALL_ROUTES),
  // },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: '**',
    component: RouterErrorComponent,
  },
];
