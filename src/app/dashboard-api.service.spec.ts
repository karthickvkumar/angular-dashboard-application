import { TestBed } from '@angular/core/testing';

import { DashboardAPIService } from './dashboard-api.service';

describe('DashboardAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardAPIService = TestBed.get(DashboardAPIService);
    expect(service).toBeTruthy();
  });
});
