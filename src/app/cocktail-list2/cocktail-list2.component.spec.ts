import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailList2Component } from './cocktail-list2.component';

describe('CocktailList2Component', () => {
  let component: CocktailList2Component;
  let fixture: ComponentFixture<CocktailList2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailList2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
