import { FilterPipe } from './filter.pipe';
//mock data
const cards = [
  { id: '1', photo: '', text: 'random_text_1' },
  { id: '2', photo: '', text: 'random_text_2' },
]

describe('FilterPipe', () => {
  it('should create an instance', () => {
    const pipe = new FilterPipe()
    expect(pipe).toBeTruthy()
  });
  it('should filter cards by id', () => {

    const pipe = new FilterPipe();
    const filteredCards = pipe.transform(cards, { id: '1', text: '' })
    expect(filteredCards).toEqual([cards[0]])
  })

  it('should filter cards by text', () => {
    const pipe = new FilterPipe();
    const filteredCards = pipe.transform(cards, { id: '', text: 'random_text_2' })
    expect(filteredCards).toEqual([cards[1]])
  })

  it('should filter cards by text and id', () => {
    const pipe = new FilterPipe();
    const filteredCards = pipe.transform(cards, { id: '1', text: 'random_text_2' })
    expect(filteredCards).toEqual([])
  })

})
