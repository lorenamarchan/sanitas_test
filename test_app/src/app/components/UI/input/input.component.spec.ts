import { ComponentFixture, TestBed } from '@angular/core/testing'
import { InputComponent } from './input.component'

describe('InputComponent', () => {
  let component: InputComponent
  let fixture: ComponentFixture<InputComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputComponent]
    })
      .compileComponents()

    fixture = TestBed.createComponent(InputComponent)
    component = fixture.componentInstance
    component.name = 'name'
    component.label = 'label'
    fixture.detectChanges()
  })

  it('should be created', () => {
    expect(component).toBeTruthy()
  })

  it('should have correct name in input', () => {
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('.input__field')?.getAttribute('name')).toBe(component.name)
  })

  it('should have label assigned to input', () => {
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('.input__label')?.getAttribute('for')).toBe(component.name)
  })

  it('should emit the correct value', () => {
    spyOn(component.model, 'emit')

    const inputText = 'text'
    const compiled = fixture.nativeElement as HTMLElement
    const input = compiled.querySelector('.input__field') as HTMLInputElement

    input.value = inputText
    input.dispatchEvent(new Event('input'))
    expect(component.model.emit).toHaveBeenCalledWith(inputText)
  })

})
