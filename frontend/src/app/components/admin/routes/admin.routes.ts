import { Routes } from '@angular/router';
import { UserListComponent } from '../components/user-list/user-list.component';
import { AdminComponent } from '../admin.component';
import { LogListComponent } from '../components/log-list/log-list.component';
import { AnimeListComponent } from '../components/anime-list/anime-list.component';
import { UserDetailComponent } from '../components/user-detail/user-detail.component';
import { AnimeDetailComponent } from '../components/anime-detail/anime-detail.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'userlist',
        component: UserListComponent,
      },
      {
        path: 'loglist',
        component: LogListComponent,
      },
      {
        path: 'animelist',
        component: AnimeListComponent,
      },
      {
        path: 'userdetail',
        component: UserDetailComponent,
      },
      {
        path: 'userdetail/:id',
        component: UserDetailComponent,
      },
      {
        path: 'animedetail',
        component: AnimeDetailComponent,
      },
      {
        path: 'animedetail/:id',
        component: AnimeDetailComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'userlist',
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
];
