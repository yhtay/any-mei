import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeListComponent } from '../anime-list/anime-list.component';
import { UserListComponent } from '../user-list/user-list.component';
import { LogListComponent } from '../log-list/log-list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    AnimeListComponent,
    UserListComponent,
    LogListComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {}
