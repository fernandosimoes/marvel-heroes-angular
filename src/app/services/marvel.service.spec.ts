import { TestBed, inject } from '@angular/core/testing';

import { MarvelService } from './marvel.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

let marvelservice: MarvelService;


describe('MarvelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarvelService]
    });
  });

  it('should be created', inject([MarvelService, HttpTestingController], (service: MarvelService, httpMock: HttpTestingController) => {
    marvelservice = TestBed.get(MarvelService);
    expect(service).toBeTruthy();
  }));
});
