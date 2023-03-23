import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../models/card';
import { Pagination } from '../models/pagination';

@Pipe({
  name: 'pagination',
  pure: false,
})
export class PaginationPipe implements PipeTransform {

  transform(cards: Card[], paginationArguments: Pagination): Card[] {
    const {page, size} = paginationArguments
    const start = page * size
    const end = start + size
    return cards.slice(start,end);
  }

}
