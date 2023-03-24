import { ScrollingModule } from '@angular/cdk/scrolling'
import { TestBed } from '@angular/core/testing'
import { MatChipsModule } from '@angular/material/chips'
import { MatPaginatorModule } from '@angular/material/paginator'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FiltersComponent } from './components/filters/filters.component'
import { ButtonComponent } from './components/UI/button/button.component'
import { CardComponent } from './components/UI/card/card.component'
import { InputComponent } from './components/UI/input/input.component'
import { PaginationPipe } from './shared/pipes/pagination.pipe'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CardComponent,
        FiltersComponent,
        InputComponent,
        ButtonComponent,
        PaginationPipe
      ],
      imports: [
        ScrollingModule,
        MatPaginatorModule,
        MatChipsModule,
        BrowserAnimationsModule,
        AppRoutingModule
      ],
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

})
