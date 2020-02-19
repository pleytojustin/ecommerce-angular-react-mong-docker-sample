import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { products, Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private ROOT_URL = "http://127.0.0.1:3000/products";

  getProductsFromHttp(){
      return this.http.get<Product[]>(this.ROOT_URL);
  }
  productFromHttp(_id: string){
    return this.http.get<Product>(`${this.ROOT_URL}/${_id}`);
  }

  getProducts(){
    return of(products);
  }
  product(_id: string){
    console.log("string: " + _id);
    return of(
      products.find(product => product._id === _id)
    );
  }
}
