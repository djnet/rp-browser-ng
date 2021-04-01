import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpBrowserComponent } from './rp-browser.component';

describe('RpBrowserComponent', () => {
  let component: RpBrowserComponent;
  let fixture: ComponentFixture<RpBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpBrowserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RpBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
