import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaginatorComponent } from './pages/paginator/paginator.component';
import { ScrollComponent } from './pages/scroll/scroll.component';

const routes: Routes = [
  {
    path: 'paginator',
    component: PaginatorComponent
  },
  {
    path: 'scroll',
    component: ScrollComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
