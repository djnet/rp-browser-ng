import { TestBed } from '@angular/core/testing';

import { RpBrowserService } from './rp-browser.service';

describe('RpBrowserService', () => {
  let service: RpBrowserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RpBrowserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
