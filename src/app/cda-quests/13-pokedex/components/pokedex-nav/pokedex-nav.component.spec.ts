import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokedexNavComponent } from './pokedex-nav.component';

describe('PokedexNavComponent', () => {
    let component: PokedexNavComponent;
    let fixture: ComponentFixture<PokedexNavComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ PokedexNavComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PokedexNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
