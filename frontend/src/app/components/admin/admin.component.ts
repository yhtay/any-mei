import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { LogListComponent } from './components/log-list/log-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    TabMenuModule,
    RouterOutlet,
    AnimeListComponent,
    LogListComponent,
    UserListComponent,
  ],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  public tabRoutes = [
    { label: 'Users', route: '/admin/userlist' },
    { label: 'Animes', route: '/admin/animelist' },
    { label: 'Logs', route: '/admin/loglist' },
  ];
  backgroundImg = '../../../assets/images/stairs.jpeg';
  @ViewChild('routerOutlet') routerOutlet!: ElementRef;

  scrollToRouterOutlet() {
    if (this.routerOutlet.nativeElement) {
      console.log('Scroll');
      this.routerOutlet.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
