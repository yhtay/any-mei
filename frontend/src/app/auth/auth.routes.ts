import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./components/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
  {
    path: 'reset',
    loadComponent: () =>
      import('./components/reset/reset.component').then(
        (m) => m.ResetComponent
      )
  },
  {
    path: 'reset-link',
    loadComponent: () =>
      import('./components/check-email/check-email.component').then(
        (m) => m.CheckEmailComponent
      )
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
