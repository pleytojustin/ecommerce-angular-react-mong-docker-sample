import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from './../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../models/product.model';
import { NavbarService } from 'src/app/navbar/services/navbar.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  _id: string;
  product: Product;
  productSub$: Subscription;

  constructor(
    private productService: ProductService, 
    private navBarService: NavbarService,
    private route: ActivatedRoute 
  ) { }


  ngOnInit() {
    this._id = this.route.snapshot.paramMap.get('_id');
    // this.productSub$ = this.productService.product(this._id).subscribe(product => {
    //   this.product = product;
    // });
    this.productSub$ = this.productService.productFromHttp(this._id).subscribe(product => {
      this.product = product;
      // this.navBarService.title.next(product.productName);
    });
  }
  ngOnDestroy(): void {
    this.productSub$.unsubscribe();
  }
}
