import { TestBed } from '@angular/core/testing'

import { FiltersService } from './filters.service'

//mock data	
const cards = [	
  { id: 1, photo: '', text: 'random_text_1' },	
  { id: 2, photo: '', text: 'random_text_2' },	
]
describe('FiltersService', () => {
  let service: FiltersService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(FiltersService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should filter cards by id', () => {	
    service.filterArguments.next({ id: '1', text: '' })
    const filteredCards = service.filterCards(cards)	
    expect(filteredCards).toEqual([cards[0]])	
  })	

  it('should filter cards by text', () => {	
    service.filterArguments.next({ id: '', text:  'random_text_2' })
    const filteredCards = service.filterCards(cards)	
    expect(filteredCards).toEqual([cards[1]])	
  })	
  
  it('should filter cards by text and id', () => {	
    service.filterArguments.next({ id: '1', text: 'random_text_2' })
    const filteredCards = service.filterCards(cards)		
    expect(filteredCards).toEqual([])	
  })	

})
