import { NgOptimizedImage } from '@angular/common'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CardComponent } from './card.component'

describe('CardComponent', () => {
  let component: CardComponent
  let fixture: ComponentFixture<CardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        CardComponent 
      ],
      imports: [
        NgOptimizedImage,
      ]
    })
    .compileComponents()

    fixture = TestBed.createComponent(CardComponent)
    component = fixture.componentInstance
    // mock data
    component.priority = true
    component.data = {
      id: '1',
      photo: 'https://picsum.photos/id/1/500/500',
      text: 'mushy_howling_adorable_plumber'
    }
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should display the correct picture', ()=> {
    const compiled = fixture.nativeElement as HTMLElement
    const picture = compiled.querySelector('.card__photo') as HTMLImageElement
    expect(picture?.src).toBe(component.data.photo)
  })

  it('should display the correct id', ()=> {
    const compiled = fixture.nativeElement as HTMLElement
    const id = compiled.querySelector('[role="card-id"]')
    expect(id?.innerHTML).toBe(`#${component.data.id}`)
  })
  
  it('should display the correct random text', ()=> {
    const compiled = fixture.nativeElement as HTMLElement
    const id = compiled.querySelector('[role="card-text"]')
    expect(id?.innerHTML).toBe(component.data.text)
  })
  
})
