import { Routes } from '@angular/router';
import { RouterErrorComponent } from './error/router-error/router-error.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AdminComponent } from './components/admin/admin.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    // Change it back to auth later
    redirectTo: 'admin',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  // {
  //   path: '',
  //   canActivate: [AuthGuard],
  //   loadChildren: () =>
  //     import('./routes/all-routing.routes').then((m) => m.ALL_ROUTES),
  // },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./auth/auth.routes').then((m) => m.AUTH_ROUTES),
  // },
  {
    path: '**',
    component: RouterErrorComponent,
  },
];
