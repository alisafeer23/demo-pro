import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { ProductComponent } from './product/product.component';
import { SafePipe } from './safe.pipe'; // Import the SafePipe

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemoComponent,
    ProductComponent,
    SafePipe // Declare the SafePipe here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
