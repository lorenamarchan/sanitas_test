import { ComponentFixture, fakeAsync, inject, TestBed } from '@angular/core/testing'
import { InputComponent } from '../UI/input/input.component'

import { FiltersComponent } from './filters.component'
import { FiltersService } from 'src/app/shared/services/filters.service'
import { ButtonComponent } from '../UI/button/button.component'
import { Filter } from 'src/app/shared/models/filter'
import { skip } from 'rxjs'

describe('FiltersComponent', () => {
  let component: FiltersComponent
  let fixture: ComponentFixture<FiltersComponent>

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [FiltersComponent, InputComponent, ButtonComponent],
    })
      .compileComponents()

    fixture = TestBed.createComponent(FiltersComponent)
    component = fixture.componentInstance
    fixture.detectChanges()

  });

  it('should be created', () => {
    expect(component).toBeTruthy()
  });

  it('should contain 2 inputs', () => {
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelectorAll('.filters__field').length).toBe(2)
  })

  it('should contain action button', () => {
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('button')).toBeTruthy()
  })

  it('should change filters service data on search button click action', fakeAsync(inject([FiltersService], (filterService: FiltersService) => {
    const compiled = fixture.nativeElement as HTMLElement
    // mock data 
    const mock = {
      id: '10',
      text: 'test_text'
    }
    
    // skip the first as BehaviorSubject emits a default first value
    filterService.filterArguments.pipe(skip(1)).subscribe((filters: Filter) => {
      expect(filters).toEqual(mock)
    })

    component.filterArguments = mock
    const button = compiled.querySelector('button')
    button?.click()

  })))

})
