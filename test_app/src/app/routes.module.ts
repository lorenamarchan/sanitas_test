import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginatorComponent } from './pages/paginator/paginator.component';
import { ScrollComponent } from './pages/scroll/scroll.component';

const routes: Routes = [
    {
        path: 'scroll',
        component: ScrollComponent
    },
    {
        path: 'paginator',
        component: PaginatorComponent
    },
    {   
        path: '**', 
        redirectTo: 'scroll', 
        pathMatch: 'full' 
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutesModule { }