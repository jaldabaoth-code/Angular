import { Cocktail } from './cocktail.model';

describe('Cocktail', () => {
  it('should create an instance', () => {
    expect(new Cocktail('Monaco', 15, 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Monaco_bi%C3%A8re.jpeg/270px-Monaco_bi%C3%A8re.jpeg')).toBeTruthy();
  });
});
