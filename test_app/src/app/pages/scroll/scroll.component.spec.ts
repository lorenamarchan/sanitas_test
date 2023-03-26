import { ScrollingModule } from '@angular/cdk/scrolling'
import { fakeAsync, TestBed, tick } from '@angular/core/testing'
import { MatChipsModule } from '@angular/material/chips'
import { MatPaginatorModule } from '@angular/material/paginator'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ScrollComponent } from './scroll.component'
import { FiltersComponent } from '../../components/filters/filters.component'
import { ButtonComponent } from '../../components/UI/button/button.component'
import { CardComponent } from '../../components/UI/card/card.component'
import { InputComponent } from '../../components/UI/input/input.component'

describe('ScrollComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ScrollComponent,
        CardComponent,
        FiltersComponent,
        InputComponent,
        ButtonComponent,
      ],
      imports: [
        ScrollingModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  })

  it('should be created the app', () => {
    const fixture = TestBed.createComponent(ScrollComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  })


  it('should render filter component', () => {
    const fixture = TestBed.createComponent(ScrollComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-filters')).toBeTruthy()
  })


  it('should render a card component', fakeAsync(() => {
    const fixture = TestBed.createComponent(ScrollComponent);
    fixture.autoDetectChanges();
    tick(1000);
    const compiled = fixture.debugElement.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-card')?.length).toBeGreaterThanOrEqual(1);

  }))
})
