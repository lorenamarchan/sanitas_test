import { Injectable } from '@angular/core';
import { Filter }  from '../models/filters';
@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  filterArguments: Filter = { id: '', text: '' }
}
