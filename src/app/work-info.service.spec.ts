import { TestBed, inject } from '@angular/core/testing';

import { WorkInfoService } from './work-info.service';

describe('WorkInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkInfoService]
    });
  });

  it('should be created', inject([WorkInfoService], (service: WorkInfoService) => {
    expect(service).toBeTruthy();
  }));
});
