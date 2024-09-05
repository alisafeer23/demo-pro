import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'demo', component: DemoComponent, children: [
    { path: 'product/:id', component: ProductComponent },
    { path: '', redirectTo: 'product/1', pathMatch: 'full' } // Default route
  ]},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
