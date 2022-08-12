import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpringAngularSecurityComponent } from './spring-angular-security.component';

describe('SpringAngularSecurityComponent', () => {
    let component: SpringAngularSecurityComponent;
    let fixture: ComponentFixture<SpringAngularSecurityComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SpringAngularSecurityComponent]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SpringAngularSecurityComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
