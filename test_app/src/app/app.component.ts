import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { generateSlug } from "random-word-slugs"
import { Card } from './shared/models/card'
import { Filter } from './shared/models/filter'
import { FiltersService } from './shared/services/filters.service'
import { MatPaginator, PageEvent } from '@angular/material/paginator'
import { Pagination } from './shared/models/pagination'
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'
import { Subject } from 'rxjs/internal/Subject'
import { takeUntil } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private filtersService: FiltersService) { }

  private unsubscribe$: Subject<void> = new Subject<void>();

  title = 'test_app'

  nCards = 4000
  cards: Card[] = []
  filteredCards: Card[] = []
  filterArguments: BehaviorSubject<Filter> = this.filtersService.filterArguments
  paginationArguments: Pagination = {
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

    this.filterArguments.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.filterCards()
    })
  }


  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  setRandomText(prefix: string): string {
    return prefix + generateSlug(4, { format: "kebab" }).replace(/-/g, '_')
  }

  setPageSizeOptions(setPageSizeOptionsInput: string): void {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str)
  }

  setPage(event: PageEvent): void {
    this.paginationArguments.page = event.pageIndex
    this.paginationArguments.size = event.pageSize
  }

  filterCards(): void {
    this.filteredCards = this.filtersService.filterCards(this.cards)
    this.paginationArguments.size = this.filteredCards.length
    this.paginator?.firstPage()
  }

}
