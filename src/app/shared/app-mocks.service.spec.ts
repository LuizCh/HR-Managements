import { TestBed, inject } from '@angular/core/testing';

import { AppMocksService } from './app-mocks.service';

describe('AppMocksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppMocksService]
    });
  });

  it('should be created', inject([AppMocksService], (service: AppMocksService) => {
    expect(service).toBeTruthy();
  }));
});
