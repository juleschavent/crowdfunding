import { TestBed } from '@angular/core/testing';

import { BackerServiceService } from './backer-service.service';

describe('BackerServiceService', () => {
  let service: BackerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
