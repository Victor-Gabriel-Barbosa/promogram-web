import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Coupon } from '../models/coupon';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  private readonly apiUrl = `${environment.apiUrl}/cupons`;

  constructor(private readonly http: HttpClient) { }

  getCoupons(limit?: number): Observable<Coupon[]> {
    let params = new HttpParams();
    if (limit !== undefined) params = params.set('limit', limit);
    return this.http.get<Coupon[]>(this.apiUrl, { params });
  }
}
