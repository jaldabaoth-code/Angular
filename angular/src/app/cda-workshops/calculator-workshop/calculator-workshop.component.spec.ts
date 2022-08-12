import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorWorkshopComponent } from "./calculator-workshop.component";

describe('Calculator2Component', () => {
    let component: CalculatorWorkshopComponent;
    let fixture: ComponentFixture<CalculatorWorkshopComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CalculatorWorkshopComponent]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CalculatorWorkshopComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
