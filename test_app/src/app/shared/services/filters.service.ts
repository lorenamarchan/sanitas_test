import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Card } from '../models/card';
import { Filter }  from '../models/filter';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  filterArguments = new BehaviorSubject<Filter>({ id: '', text: '' })

  filterCards(cards: Card[]): Card[] {
    return cards.filter(card => {
      const filterKeys = Object.keys(this.filterArguments.value)
      
      return filterKeys.every(key => {
        const value = card[key]
        const text = this.filterArguments.value[key]
        return this.containsText(value.toString(), text)
      })
    });
  }

  containsText(value: string, text: string): boolean {
    return text === '' || value.startsWith(text)
  }
  
}
