import { TestBed } from '@angular/core/testing';

import { ValService } from './val.service';

describe('ValService', () => {
  let service: ValService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
