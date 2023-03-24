import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core'
import { generateSlug } from "random-word-slugs"
import { Card } from './shared/models/card'
import { Filter } from './shared/models/filter'
import { FiltersService } from './shared/services/filters.service'
import { MatPaginator, PageEvent } from '@angular/material/paginator'
import { FilterPipe } from './shared/pipes/filter.pipe'
import { Pagination } from './shared/models/pagination'
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private filtersService: FiltersService, private filterPipe: FilterPipe) { }
  

  title = 'test_app'

  nCards = 4000
  cards: Card[] = []
  filteredCards: Card[] = []
  filterArguments: BehaviorSubject<Filter> = this.filtersService.filterArguments
  paginationArguments : Pagination = {
    page: 0,
    size: 0
  }

  // MatPaginator
  pageSizeOptions = [250, 500, 1000, 2000, 4000]
  pageEvent!: PageEvent

  ngOnInit() {
    for (let i = 1; i <= this.nCards; i++) {
      this.cards.push({
        id: i.toString(),
        photo: `https://picsum.photos/id/${i}/500/500`,
        text: this.setRandomText(`photo${i}_`)
      })
    }

    this.filterArguments.subscribe(filtersArgs => {
      this.filterCards(filtersArgs)
    })
  }

  setRandomText(prefix: string): string {
    return prefix +  generateSlug(4, { format: "kebab" }).replace(/-/g, '_')
  }

  setPageSizeOptions(setPageSizeOptionsInput: string): void {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str)
  }

  setPage(event: PageEvent): void {
    this.paginationArguments.page = event.pageIndex
    this.paginationArguments.size = event.pageSize
  }

  filterCards(filtersArguments: Filter): void {
    this.filteredCards = this.filterPipe.transform(this.cards, filtersArguments)
    this.paginationArguments.size = this.filteredCards.length
    this.paginator?.firstPage()
  }

}
