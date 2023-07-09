import { TestBed } from '@angular/core/testing';

import { ParalelosService } from './paralelos.service';

describe('ParalelosService', () => {
  let service: ParalelosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParalelosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
