import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrivenFormsComponent } from './driven-forms.component';

describe('DrivenFormsComponent', () => {
    let component: DrivenFormsComponent;
    let fixture: ComponentFixture<DrivenFormsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DrivenFormsComponent]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DrivenFormsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
