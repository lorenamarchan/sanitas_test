import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core'
import { Card } from '../../shared/models/card'
import { Filter } from '../../shared/models/filter'
import { FiltersService } from '../../shared/services/filters.service'
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'
import { Subject } from 'rxjs/internal/Subject'
import { takeUntil } from 'rxjs/operators'
import { CardService } from 'src/app/shared/services/card.service'

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ScrollComponent implements OnInit, OnDestroy {

  constructor(private filtersService: FiltersService, private cardService: CardService) { }

  public filteredCards: Card[] = []

  private unsubscribe$: Subject<void> = new Subject<void>()

  private cards: Card[] = this.cardService.generateCards()
  private filterArguments: BehaviorSubject<Filter> = this.filtersService.filterArguments
  
  public ngOnInit(): void  {
    this.filterArguments.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.filterCards()
    })
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }

  private filterCards(): void {
    this.filteredCards = this.filtersService.filterCards(this.cards)
  }

}
