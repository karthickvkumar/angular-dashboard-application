import { TestBed } from '@angular/core/testing';

import { ProfileListApiService } from './profile-list-api.service';

describe('ProfileListApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileListApiService = TestBed.get(ProfileListApiService);
    expect(service).toBeTruthy();
  });
});
