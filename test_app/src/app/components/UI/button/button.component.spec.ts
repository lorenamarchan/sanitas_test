import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ButtonComponent } from './button.component'

describe('ButtonComponent', () => {
  let component: ButtonComponent
  let fixture: ComponentFixture<ButtonComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    })
      .compileComponents()

    fixture = TestBed.createComponent(ButtonComponent)
    component = fixture.componentInstance
    // mock data
    component.label = 'label'

    fixture.detectChanges()
  })

  it('should be created', () => {
    expect(component).toBeTruthy()
  })

  it('should have the correct label', () => {
    const compiled = fixture.nativeElement as HTMLElement
    const button = compiled.querySelector('button') as HTMLElement
    expect(button?.innerText).toBe(component.label)
  })
})
