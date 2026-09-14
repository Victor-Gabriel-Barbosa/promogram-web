import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product } from '../models/product';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly apiUrl = `${environment.apiUrl}/produtos`;

  constructor(private readonly http: HttpClient) { }

  getProducts(limit?: number): Observable<Product[]> {
    let params = new HttpParams();
    if (limit !== undefined) params = params.set('limit', limit);
    return this.http.get<Product[]>(this.apiUrl, { params });
  }
}
