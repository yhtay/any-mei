import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { LogListComponent } from './components/log-list/log-list.component';
import { UserListComponent } from './components/user-list/user-list.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AnimeListComponent, LogListComponent, UserListComponent],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

}
