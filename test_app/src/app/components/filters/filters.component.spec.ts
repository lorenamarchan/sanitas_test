import { ComponentFixture, TestBed } from '@angular/core/testing'
import { InputComponent } from '../UI/input/input.component'

import { FiltersComponent } from './filters.component'
import { FiltersService } from 'src/app/shared/services/filters.service';

describe('FiltersComponent', () => {
  let component: FiltersComponent
  let fixture: ComponentFixture<FiltersComponent>
  let FiltersServiceSpy: FiltersService;

  beforeEach(async () => {
    FiltersServiceSpy = jasmine.createSpyObj<FiltersService>('FiltersService', ['filterArguments']);

    await TestBed.configureTestingModule({
      declarations: [ FiltersComponent, InputComponent ],
      providers: [{provide: FiltersService, useValue: FiltersServiceSpy}]
    })
    .compileComponents()

    fixture = TestBed.createComponent(FiltersComponent)
    component = fixture.componentInstance
    fixture.detectChanges()

  });

  it('should create', () => {
    expect(component).toBeTruthy()
  });

  it('should contain 2 inputs', ()=> {
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelectorAll('.filters__field').length).toBe(2)
  })

  it('should assign value correctly to service on model change', () => {
    const serviceInstance = TestBed.inject(FiltersService) as jasmine.SpyObj<FiltersService>; 

    const inputText = 'text'
    const compiled = fixture.nativeElement as HTMLElement
    const input = compiled.querySelector('[name="id"]') as HTMLInputElement
    
    input.value = inputText
    input.dispatchEvent(new Event('input'))
    expect(serviceInstance.filterArguments).toEqual({id: inputText, text: ''});
  })

  it('should have correct label and id for second input', () => {

  })


});
