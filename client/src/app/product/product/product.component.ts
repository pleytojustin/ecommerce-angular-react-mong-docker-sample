import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  private ROOT_CART_URL = "http://127.0.0.1:3000/cart";
  @Input() product: Product;

  constructor(private  http: HttpClient) {}


  
  ngOnInit() {
  }
  addToCart(product: Product){
     const dataPost = {
      productName: product.productName,
        imageUrl: product.imageUrl,
        price: product.price,
        description: product.description,
        variants: product.variants,
        quantity: product.quantity
    }
    this.http.post(this.ROOT_CART_URL, dataPost).toPromise().then(data =>{
      console.log(data);
      alert(product.productName + " Added to Cart!")
    });
  }
}
