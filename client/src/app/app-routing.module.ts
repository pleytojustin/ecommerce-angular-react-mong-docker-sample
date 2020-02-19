import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'cart',
    component: CartComponent
    //loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'admin',
    component: AdminComponent
    //loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
