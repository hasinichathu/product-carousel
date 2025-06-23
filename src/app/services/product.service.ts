import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductsResponse } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProducts(
    limit: number = 30,
    skip: number = 0
  ): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(
      `${this.apiUrl}?limit=${limit}&skip=${skip}`
    );
  }
}
