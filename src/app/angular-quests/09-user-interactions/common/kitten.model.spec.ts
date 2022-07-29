import { Kitten } from './kitten.model';

describe('Kitten', () => {
  it('should create an instance', () => {
    expect(new Kitten('test','cat','2021-12-08','https://media.istockphoto.com/photos/feline-picture-id108226626?k=20&m=108226626&s=612x612&w=0&h=bDaWwxhcygjerdR71qQu8YFSXaDUIi_HUZV2AADg5L8=')).toBeTruthy();
  });
});
