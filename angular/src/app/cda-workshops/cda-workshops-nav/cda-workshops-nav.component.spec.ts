import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CdaWorkshopsNavComponent } from './cda-workshops-nav.component';

describe('CdaWorkshopsNavComponent', () => {
    let component: CdaWorkshopsNavComponent;
    let fixture: ComponentFixture<CdaWorkshopsNavComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ CdaWorkshopsNavComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CdaWorkshopsNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
