import { Component } from '@angular/core';
import { Filter } from 'src/app/shared/models/filter';
import { FiltersService } from 'src/app/shared/services/filters.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  constructor(private filtersService: FiltersService) {}
  filterArguments: Filter = {
    id: '',
    text: ''
  }

  applyFilters():void {
    const {id, text} = this.filterArguments
    this.filtersService.filterArguments.id = id
    this.filtersService.filterArguments.text = text
  }
}
