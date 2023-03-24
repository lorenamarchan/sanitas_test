import { TestBed } from '@angular/core/testing';

import { CardService } from './card.service';

describe('CardService', () => {
  let service: CardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate 4000 cards', () => {	
    const cards = service.generateCards()
    expect(cards.length).toEqual(4000)	
  })	

});
