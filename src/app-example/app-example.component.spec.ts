import { TestBed } from '@angular/core/testing';
import { AppExampleComponent } from './app-example.component';

describe('AppExampleComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppExampleComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppExampleComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'rp-browser-ng'`, () => {
    const fixture = TestBed.createComponent(AppExampleComponent);
    const app = fixture.componentInstance;
    expect(app-example.title).toEqual('rp-browser-ng');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppExampleComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('rp-browser-ng app is running!');
  });
});
