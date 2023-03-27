import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { Card } from '../../shared/models/card'
import { Filter } from '../../shared/models/filter'
import { FiltersService } from '../../shared/services/filters.service'
import { MatPaginator, PageEvent } from '@angular/material/paginator'
import { Pagination } from '../../shared/models/pagination'
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'
import { Subject } from 'rxjs/internal/Subject'
import { takeUntil } from 'rxjs/operators'
import { CardService } from 'src/app/shared/services/card.service'

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PaginatorComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private filtersService: FiltersService, private cardService: CardService) { }

  public filteredCards: Card[] = []

  private unsubscribe$: Subject<void> = new Subject<void>();

  private cards: Card[] = this.cardService.cards
  private filterArguments: BehaviorSubject<Filter> = this.filtersService.filterArguments


  // MatPaginator
  public pageSizeOptions = [5, 10, 25, 50, 4000]
  public defaultPageSizeOption = this.pageSizeOptions[0]
  public paginationArguments: Pagination = {
    page: 0,
    size: this.defaultPageSizeOption
  }
  
  public ngOnInit(): void {
    this.filterArguments.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.filterCards()
    })
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }


  public setPage(event: PageEvent): void {
    this.paginationArguments.page = event.pageIndex
    this.paginationArguments.size = event.pageSize
  }

  filterCards(): void {
    this.filteredCards = this.filtersService.filterCards(this.cards)
    this.paginator?.firstPage()
  }

}
