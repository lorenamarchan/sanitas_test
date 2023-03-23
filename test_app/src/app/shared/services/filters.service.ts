import { Injectable } from '@angular/core';
import { Filter }  from '../models/filter';
@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  filterArguments: Filter = { id: '', text: '' }
}
