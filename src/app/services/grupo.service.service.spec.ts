import { TestBed } from '@angular/core/testing';

import { Grupo.ServiceService } from './grupo.service.service';

describe('Grupo.ServiceService', () => {
  let service: Grupo.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Grupo.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
