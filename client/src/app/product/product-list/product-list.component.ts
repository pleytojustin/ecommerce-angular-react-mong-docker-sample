import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { NavbarService } from 'src/app/navbar/services/navbar.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products$: Observable<Product[]>;
  constructor(private productService: ProductService, private navbarService: NavbarService) { }
  searchProductName: string;
  
  ngOnInit() {
   //this.products$ = this.productService.getProducts();
   this.products$ = this.productService.getProductsFromHttp();
   this.navbarService.title.next('Pleyto\'s Shop');
  }
}


