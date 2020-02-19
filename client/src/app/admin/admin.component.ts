import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product, products } from '../product/models/product.model';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  url = 'http://127.0.0.1:3000/products';
  productItems = [];
  productName = new FormControl();
  productPrice = new FormControl();
  productDescription  = new FormControl();
  productUrl  = new FormControl();

  constructor(private http: HttpClient) { }

  
  removeProduct(product: Product){
    console.log("cart Remove");
    this.http
      .delete(this.url + "/"+ product._id)
      .subscribe((s) => {
        console.log(s);
        
          // RE POPULATE 
          // RESET CART
          this.productItems = [];
          // PULL NEW CAR ITEMS
          this.http.get(this.url).toPromise().then(data => {
          console.log(data);

          // FILL items array
          for (let key in data)
            if(data.hasOwnProperty(key)){
              console.log(data[key].price);
              this.productItems.push(data[key]);
            }
        });

      });

  }

  data = []
  
  addProduct = function(){
    console.log(this.productName.value);
    console.log(this.productPrice.value);
    console.log(this.productDescription.value);
    console.log(this.productUrl.value);
    const dataPost = {
      productName: this.productName.value,
        imageUrl:this.productUrl.value,
        price: this.productPrice.value,
        description: this.productDescription.value,
    }
    this.http.post(this.url, dataPost).toPromise().then(data =>{
      console.log(data);
      alert(this.productName.value+ " Added Product!")
      this.http.get(this.url).toPromise().then(data => {
        console.log(data);
        this.productItems = [];

        // FILL items array
        for (let key in data)
          if(data.hasOwnProperty(key)){
            console.log(data[key].price);
            this.productItems.push(data[key]);
          }
        this.productName.setValue('');
        this.productPrice.setValue('');
        this.productDescription.setValue('');
        this.productUrl.setValue('');
  
      });
    });
  }; 

  ngOnInit() {
    //this.productName.setValue('Product Name Here...')

    this.http.get(this.url).toPromise().then(data => {
      console.log(data);

      // FILL items array
      for (let key in data)
        if(data.hasOwnProperty(key)){
          console.log(data[key].price);
          this.productItems.push(data[key]);
        }
    });
  }

}
