import { TestBed } from '@angular/core/testing';

import { AnimeScrapService } from './anime-scrap.service';

describe('AnimeScrapService', () => {
  let service: AnimeScrapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeScrapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
