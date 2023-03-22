import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { generateSlug } from "random-word-slugs";
import { Card } from './shared/models/card';
import { FiltersService } from './shared/services/filters.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit {
  constructor(private filtersService: FiltersService) {}

  title = 'test_app'
  cards: Card[] = []
  nElements = 4000
  filterArguments = this.filtersService.filterArguments

  ngOnInit(){
    for(let i = 1; i <= this.nElements; i++){
      this.cards.push({
          id: i.toString(),
          photo: `https://picsum.photos/id/${i}/500/500`,
          text: generateSlug(4, { format: "kebab" }).replace(/-/g, '_')
      })
    }
  }
}
