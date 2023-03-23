import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { generateSlug } from "random-word-slugs";
import { Card } from './shared/models/card';
import { FiltersService } from './shared/services/filters.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit {
  constructor(private filtersService: FiltersService) {}
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  title = 'test_app'
  cards: Card[] = []
  nElements = 4000
  filterArguments = this.filtersService.filterArguments
  paginationArguments = {
    page: 0,
    size: this.nElements
  }
  // MatPaginator Inputs
  length = this.nElements;
  pageSize = this.nElements;
  pageSizeOptions = [20, 40,125,250, 500, 1000, 2000, 4000];

  // MatPaginator Output
  pageEvent!: PageEvent;

 setPageSizeOptions(setPageSizeOptionsInput: string) {
   this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
 }
  ngOnInit(){
    for(let i = 1; i <= this.nElements; i++){
      this.cards.push({
          id: i.toString(),
          photo: `https://picsum.photos/id/${i}/500/500`,
          text: this.randomText('photo_')
      })
    }
  }

  randomText(prefix: string){
    return prefix + generateSlug(4, { format: "kebab" }).replace(/-/g, '_')
  }
  setPage(event: PageEvent){
    console.log({event})
    this.paginationArguments.page = event.pageIndex
    this.paginationArguments.size = event.pageSize
  }
}
