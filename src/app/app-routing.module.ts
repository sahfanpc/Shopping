import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './detail-module/login/login.component';
import { ShoppingDashboardComponent } from './detail-module/shopping-dashboard/shopping-dashboard.component';
import { ProductDetailComponent } from './shopping-module/product-detail/product-detail.component';
import { CarouselComponent } from './shopping-module/carousel/carousel.component';
// import { CarouselComponent } from './shopping-module/carousel/carousel.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'shopping-dashboard', component: ShoppingDashboardComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'carousel', component: CarouselComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
