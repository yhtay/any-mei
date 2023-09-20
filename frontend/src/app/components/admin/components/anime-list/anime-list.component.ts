import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { NotificationService } from 'src/external/notification/notification.service';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { AnimeService } from 'src/app/core/services/anime.service';

@Component({
  selector: 'app-anime-list',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, InputTextModule],
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss'],
})
export class AnimeListComponent {
  public animeList!: any;

  constructor(
    private readonly notiService: NotificationService,
    private readonly _router: Router,
    private readonly animeService: AnimeService
  ) {
    this.animeService.getAnimeList()
    this.animeService.animeList$.subscribe((data: any) => {
      this.animeList = data
    })
    console.log(this.animeList)
  }

  onFilterInputChange(event: any) {
    return event.value;
  }

  onCreate() {
    this._router.navigate(['admin/userdetail']);
  }

  onUpdate(userId: string) {
    this._router.navigate([`admin/userdetail/${userId}`]);
  }

  // Add a confirmation to make it more secure
  onDelete(userId: string) {
    console.log('Delete');
  }
}
