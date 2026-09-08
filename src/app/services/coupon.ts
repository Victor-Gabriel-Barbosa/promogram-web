import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Coupon } from '../models/coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  private readonly apiUrl = `${environment.apiUrl}/cupons?limit=10`;

  constructor(private readonly http: HttpClient) { }

  getCoupons(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(this.apiUrl);
  }
}
