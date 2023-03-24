import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatChipsModule } from '@angular/material/chips'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ScrollingModule } from '@angular/cdk/scrolling'

import { AppComponent } from './app.component'

import { CardComponent } from './components/UI/card/card.component'
import { InputComponent } from './components/UI/input/input.component'
import { FiltersComponent } from './components/filters/filters.component'
import { ButtonComponent } from './components/UI/button/button.component'

import { PaginationPipe } from './shared/pipes/pagination.pipe';
import { PaginatorComponent } from './pages/paginator/paginator.component';
import { ScrollComponent } from './pages/scroll/scroll.component';
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FiltersComponent,
    InputComponent,
    ButtonComponent,
    PaginationPipe,
    PaginatorComponent,
    ScrollComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    FormsModule,
    MatPaginatorModule,
    MatChipsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
