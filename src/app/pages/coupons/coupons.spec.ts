import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { Coupons } from './coupons';

describe('Coupons', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Coupons],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])],
    }).compileComponents();
  });

  it('should create the coupons component', () => {
    const fixture = TestBed.createComponent(Coupons);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
