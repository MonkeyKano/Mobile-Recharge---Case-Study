import { TestBed } from '@angular/core/testing';

import { MobileRechargeService } from './mobile-recharge.service';

describe('MobileRechargeService', () => {
  let service: MobileRechargeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileRechargeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
