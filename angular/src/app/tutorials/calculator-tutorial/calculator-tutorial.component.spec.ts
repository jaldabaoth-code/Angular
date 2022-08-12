import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorTutorialComponent } from "./calculator-tutorial.component";

describe('CalculatorComponent', () => {
    let component: CalculatorTutorialComponent;
    let fixture: ComponentFixture<CalculatorTutorialComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CalculatorTutorialComponent]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CalculatorTutorialComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
