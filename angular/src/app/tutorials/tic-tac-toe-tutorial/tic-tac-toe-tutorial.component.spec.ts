import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TicTacToeTutorialComponent } from './tic-tac-toe-tutorial.component';

describe('TicTacToeTutorialComponent', () => {
    let component: TicTacToeTutorialComponent;
    let fixture: ComponentFixture<TicTacToeTutorialComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ TicTacToeTutorialComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TicTacToeTutorialComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
