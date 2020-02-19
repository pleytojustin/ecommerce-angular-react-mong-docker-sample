import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from'@angular/forms';
@NgModule({
  declarations: [
    AdminComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AminModule { }


