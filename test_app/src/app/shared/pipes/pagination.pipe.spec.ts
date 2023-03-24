import { PaginationPipe } from './pagination.pipe'
//mock data
const cards = [
  { id: '1', photo: '', text: 'random_text_1' },
  { id: '2', photo: '', text: 'random_text_2' },
  { id: '3', photo: '', text: 'random_text_3' },
  { id: '4', photo: '', text: 'random_text_4' },
  { id: '5', photo: '', text: 'random_text_5' },
  { id: '6', photo: '', text: 'random_text_6' },
  { id: '7', photo: '', text: 'random_text_7' },
  { id: '8', photo: '', text: 'random_text_8' },
]

describe('PaginationPipe', () => {
  it('should create an instance', () => {
    const pipe = new PaginationPipe()
    expect(pipe).toBeTruthy()
  });


  it('should paginate cards correctly', () => {
    const pagination = new PaginationPipe();
    const paginatedCards = pagination.transform(cards, { page: 1, size: 3 })
    const mockedPaginatedCards = cards.slice(1 * 3, (1 * 3) + 3)

    expect(paginatedCards).toEqual(mockedPaginatedCards)
  })

});
