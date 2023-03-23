import { ScrollingModule } from '@angular/cdk/scrolling'
import { fakeAsync, TestBed, tick } from '@angular/core/testing'
import { MatChipsModule } from '@angular/material/chips'
import { MatPaginatorModule } from '@angular/material/paginator'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component'
import { FiltersComponent } from './components/filters/filters.component'
import { ButtonComponent } from './components/UI/button/button.component'
import { CardComponent } from './components/UI/card/card.component'
import { InputComponent } from './components/UI/input/input.component'
import { FilterPipe } from './shared/pipes/filter.pipe'
import { PaginationPipe } from './shared/pipes/pagination.pipe'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CardComponent,
        FiltersComponent,
        FilterPipe,
        InputComponent,
        ButtonComponent,
        PaginationPipe
      ],
      imports: [
        ScrollingModule,
        MatPaginatorModule,
        MatChipsModule,
        BrowserAnimationsModule,
      ],
      providers: [FilterPipe],
    }).compileComponents();
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  })

  it(`should have as title 'test_app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('test_app');
  })

  it('should render filter component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-filters')).toBeTruthy()
  })

  it('should render mat-paginator', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-paginator')).toBeTruthy()
  })

  it('should render a card component', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.autoDetectChanges();
    tick(1000);
    const compiled = fixture.debugElement.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-card')?.length).toBeGreaterThanOrEqual(1);

  }))
})
