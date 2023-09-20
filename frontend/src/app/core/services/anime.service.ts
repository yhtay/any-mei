import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MCAnime } from 'src/app/fixtures/dataTypes';
import { animeListData } from 'src/app/fixtures/testAnimeData';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  private animeList!: any;
  private animeListBS$ = new BehaviorSubject(this.animeList);
  public animeList$ = this.animeListBS$.asObservable();

  private anime!: any;
  private animeBS$ = new BehaviorSubject(this.anime);
  public anime$ = this.animeBS$;

  constructor(private readonly _http: HttpClient) {}

  getAnime(id: string) {
    this.anime = this.animeList?.filter((anime: MCAnime) => anime.id !== id);
    this.animeBS$.next(this.anime);
  }

  getAnimeList() {
    this.animeList = animeListData;
    this.animeListBS$.next(this.animeList);
  }

  addAnime(anime: MCAnime) {
    this.animeList = [this.animeList, anime]
    this.animeBS$.next(this.animeList)
  }

  editAnime(id: string) {}

  deleteAnime(id: string) {}

  searchAnime(query: string) {}

  filterList(query: string[]) {}
}
