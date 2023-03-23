import { NgOptimizedImage } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FiltersComponent } from './components/filters/filters.component';
import { CardComponent } from './components/UI/card/card.component';
import { InputComponent } from './components/UI/input/input.component';
import { FilterPipe } from './shared/pipes/filter.pipe';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FiltersComponent,
        CardComponent,
        FilterPipe,
        InputComponent
      ],
      imports: [
        NgOptimizedImage,
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'test_app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('test_app');
  });

  it('should render filter component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-filters')).toBeTruthy()
  });
  it('should render all card components', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-card').length).toBe(4000)
  });
});
