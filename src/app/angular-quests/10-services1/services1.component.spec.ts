import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Services1Component} from "./services1.component";

describe('CocktailListComponent', () => {
    let component: Services1Component;
    let fixture: ComponentFixture<Services1Component>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ Services1Component ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(Services1Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});