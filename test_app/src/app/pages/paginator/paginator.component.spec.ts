import { fakeAsync, TestBed, tick } from '@angular/core/testing'
import { MatChipsModule } from '@angular/material/chips'
import { MatPaginatorModule } from '@angular/material/paginator'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PaginatorComponent } from './paginator.component'
import { FiltersComponent } from '../../components/filters/filters.component'
import { ButtonComponent } from '../../components/UI/button/button.component'
import { CardComponent } from '../../components/UI/card/card.component'
import { InputComponent } from '../../components/UI/input/input.component'
import { PaginationPipe } from '../../shared/pipes/pagination.pipe'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PaginatorComponent,
        CardComponent,
        FiltersComponent,
        InputComponent,
        ButtonComponent,
        PaginationPipe
      ],
      imports: [
        MatPaginatorModule,
        MatChipsModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PaginatorComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  })


  it('should render filter component', () => {
    const fixture = TestBed.createComponent(PaginatorComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-filters')).toBeTruthy()
  })

  it('should render mat-paginator', () => {
    const fixture = TestBed.createComponent(PaginatorComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-paginator')).toBeTruthy()
  })

  it('should render a card component', fakeAsync(() => {
    const fixture = TestBed.createComponent(PaginatorComponent);
    fixture.autoDetectChanges();
    tick(1000);
    const compiled = fixture.debugElement.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-card')?.length).toBeGreaterThanOrEqual(1);

  }))
})
