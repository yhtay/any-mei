import { Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';

export const ALL_ROUTES: Routes = [
  {
    path: 'admin',
    // canActivate: [AdminGuard],
    // loadComponent: () =>
    //   import('../components/admin/admin.component').then(
    //     (m) => m.AdminComponent
    //   ),
    loadChildren: () =>
      import('../components/admin/routes/admin.routes').then(
        (m) => m.ADMIN_ROUTES
      ),
  },
  {
    path: 'anime',
    loadComponent: () =>
      import('../components/anime/anime.component').then(
        (m) => m.AnimeComponent
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin',
  },
];
