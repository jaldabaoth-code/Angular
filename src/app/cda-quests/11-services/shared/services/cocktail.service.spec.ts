import { TestBed } from '@angular/core/testing';
import { CocktailService } from './cocktail.service';

describe('CocktailService', () => {
    let cocktailService: CocktailService;

    beforeEach(() => {
        TestBed.configureTestingModule({ });
        cocktailService = TestBed.inject(CocktailService);
    });

    it('should be created', () => {
        expect(cocktailService).toBeTruthy();
    });
});
