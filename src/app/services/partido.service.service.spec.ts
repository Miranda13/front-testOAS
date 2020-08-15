import { TestBed } from '@angular/core/testing';

import { Partido.ServiceService } from './partido.service.service';

describe('Partido.ServiceService', () => {
  let service: Partido.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Partido.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
