import { TestBed } from '@angular/core/testing';

import { NgxRendererService } from './ngx-renderer.service';

describe('NgxRendererService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxRendererService = TestBed.get(NgxRendererService);
    expect(service).toBeTruthy();
  });
});
