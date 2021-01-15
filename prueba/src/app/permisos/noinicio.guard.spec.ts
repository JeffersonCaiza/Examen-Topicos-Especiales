import { TestBed } from '@angular/core/testing';

import { NoinicioGuard } from './noinicio.guard';

describe('NoinicioGuard', () => {
  let guard: NoinicioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoinicioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
