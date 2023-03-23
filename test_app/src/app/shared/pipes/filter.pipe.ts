import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../models/card';
import { Filter } from '../models/filter';
@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {

  transform(cards: Card[], filterArguments: Filter): Card[] {
    return cards.filter(card => {
      const filterKeys = Object.keys(filterArguments)
      return filterKeys.every(key => this.containsText(card[key], filterArguments[key]))
    });
  }

  containsText(value: string, text: string): boolean {
    return text === '' || value.startsWith(text)
  }

}
