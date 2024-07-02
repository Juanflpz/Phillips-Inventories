import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private urlBase = "http://localhost:8080/inventory-app/products";

  constructor(private clientHTTP: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.clientHTTP.get<Product[]>(this.urlBase);
  }
}
