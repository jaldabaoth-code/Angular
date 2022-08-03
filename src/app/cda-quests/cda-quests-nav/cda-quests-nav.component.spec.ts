import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CdaQuestsNavComponent } from './cda-quests-nav.component';

describe('CdaQuestsNavComponent', () => {
    let component: CdaQuestsNavComponent;
    let fixture: ComponentFixture<CdaQuestsNavComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ CdaQuestsNavComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CdaQuestsNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
