import { Routes } from '@angular/router';
import { UserListComponent } from '../components/user-list/user-list.component';
import { AdminComponent } from '../admin.component';
import { LogListComponent } from '../components/log-list/log-list.component';
import { AnimeListComponent } from '../components/anime-list/anime-list.component';

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
