import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Checkpoint2Component } from './checkpoint2.component';

describe('Checkpoint2Component', () => {
    let component: Checkpoint2Component;
    let fixture: ComponentFixture<Checkpoint2Component>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [Checkpoint2Component]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(Checkpoint2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
