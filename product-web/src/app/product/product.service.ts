import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient: HttpClient) { }

  private baseUrl = "/api/v1/products";

  fetchAllProducts(): Observable<Product[]> {
    return this._httpClient.get<Product[]>(`${this.baseUrl}`);
  }

  getById(id: Number) {
    return this._httpClient.get<Product>(`${this.baseUrl}/${id}`);
  }

  create(product: Product) {
    return this._httpClient.post<Product>(`${this.baseUrl}`, product);
  }

  update(product: Product) {
    return this._httpClient.put<Product>(`${this.baseUrl}/${product.id}`, product);
  }

  delete(id: Number) {
    return this._httpClient.delete<Product>(`${this.baseUrl}/${id}`);
  }

}
