import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Filter }  from '../models/filter';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  filterArguments = new BehaviorSubject<Filter>({ id: '', text: '' })
}
