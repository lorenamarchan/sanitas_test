import { Component } from '@angular/core';
import { FiltersService } from 'src/app/shared/services/filters.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  constructor(public filtersService: FiltersService) {}
}
