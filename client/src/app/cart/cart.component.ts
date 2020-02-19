import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../product/models/product.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  url = 'http://127.0.0.1:3000/cart';

  cartItems = [];
  total = 0;


  constructor(private http: HttpClient) { 

  }
    removeCart(cart: Product){
      console.log("cart Remove");

      // DELETE CART        
      // const input =[];
  
      
      this.http
        .delete(this.url + "/"+ cart._id)
        .subscribe((s) => {
          console.log(s);
          
            // RE POPULATE 
            // RESET CART
            this.cartItems = [];
            this.total = this.total - cart.price
            // PULL NEW CAR ITEMS
            this.http.get(this.url).toPromise().then(data => {
            console.log(data);

            // FILL items array
            for (let key in data)
              if(data.hasOwnProperty(key)){
                console.log(data[key].price);
                this.cartItems.push(data[key]);
              }
          });

        });

    }


  ngOnInit() {
    this.http.get(this.url).toPromise().then(data => {
      console.log(data);

      // FILL items array
      for (let key in data)
        if(data.hasOwnProperty(key)){
          console.log(data[key].price);
          this.total = data[key].price + this.total;
          this.cartItems.push(data[key]);
        }
    });
  }

  // public remove(product: Product): void {
  //   this.foo.bars.splice(index, 1);
  // }
}
