import { TestBed, inject } from '@angular/core/testing';

import { GamesArenaService } from './games-arena.service';

describe('GamesArenaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GamesArenaService]
    });
  });

  it('should be created', inject([GamesArenaService], (service: GamesArenaService) => {
    expect(service).toBeTruthy();
  }));
});
