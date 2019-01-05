import { TestBed } from '@angular/core/testing';

import { HttpDebugService } from './http-debug.service';

describe('HttpDebugService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpDebugService = TestBed.get(HttpDebugService);
    expect(service).toBeTruthy();
  });
});
