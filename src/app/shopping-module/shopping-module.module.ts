import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AppRoutingModule } from '../app-routing.module';
import { DescriptionProductComponent } from './description-product/description-product.component';
import { MatBadgeModule } from '@angular/material/badge';
import { CartPageComponent } from './cart-page/cart-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { ItemGroupComponent } from './item-group/item-group.component';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { OrderComponent } from './order/order.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ShoppingModuleRoutingModule } from './shopping-module-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
// import { UpperCasePipe } from '@angular/common';
@NgModule({
  declarations: [
    ProductDetailComponent,
    DescriptionProductComponent,
    CartPageComponent,
    ItemGroupComponent,
    OrderConfirmationComponent,
    OrderComponent,
    // UpperCasePipe,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatStepperModule,
    // BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // AppRoutingModule,
    MatBadgeModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatDialogModule,
    ShoppingModuleRoutingModule,
  ],
  exports: [
    // ProductDetailComponent,
    
  ],
})
export class ShoppingModuleModule {}
