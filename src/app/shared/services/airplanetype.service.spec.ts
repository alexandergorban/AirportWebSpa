import { TestBed, inject } from '@angular/core/testing';

import { AirplanetypeService } from './airplanetype.service';

describe('AirplanetypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AirplanetypeService]
    });
  });

  it('should be created', inject([AirplanetypeService], (service: AirplanetypeService) => {
    expect(service).toBeTruthy();
  }));
});
