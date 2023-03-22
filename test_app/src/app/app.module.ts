import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CardComponent } from './components/UI/card/card.component';
import { InputComponent } from './components/UI/input/input.component';
import { FiltersComponent } from './components/filters/filters.component';

import { FilterPipe } from './shared/pipes/filter.pipe';

import { NgOptimizedImage } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FiltersComponent,
    FilterPipe,
    InputComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
