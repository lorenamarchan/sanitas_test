import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../models/card';
import { Filter } from '../models/filters';
@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {

  transform(cards: Card[], filterArguments: Filter): Card[] {
    return cards.filter(card => {
      const filterKeys = Object.keys(filterArguments)
      return filterKeys.every(key => this.containsText(card[key], filterArguments[key]) )
    });
  }

  containsText(cardProperty: string, text: string){
    return text === '' || cardProperty.startsWith(text)
  }

}
