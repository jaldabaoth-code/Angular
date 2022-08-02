import { TestBed } from '@angular/core/testing';
import { NasaService } from './nasa.service';

describe('NasaService', () => {
    let nasaService: NasaService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        nasaService = TestBed.inject(NasaService);
    });

    it('should be created', () => {
        expect(nasaService).toBeTruthy();
    });
});
