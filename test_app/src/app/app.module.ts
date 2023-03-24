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

import { PaginationPipe } from './shared/pipes/pagination.pipe'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FiltersComponent,
    InputComponent,
    ButtonComponent,
    PaginationPipe
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    FormsModule,
    MatPaginatorModule,
    MatChipsModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
