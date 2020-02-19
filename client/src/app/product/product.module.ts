import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from './product-filter.pipe';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ProductListComponent, 
    ProductDetailComponent, 
    ProductComponent,
    ProductFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    HttpClientModule
    
  ],
})
export class ProductModule { }
