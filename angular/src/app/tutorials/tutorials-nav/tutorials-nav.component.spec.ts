import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TutorialsNavComponent } from './tutorials-nav.component';

describe('TutorialsNavComponent', () => {
    let component: TutorialsNavComponent;
    let fixture: ComponentFixture<TutorialsNavComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ TutorialsNavComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TutorialsNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
