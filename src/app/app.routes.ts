import { Routes } from '@angular/router';
import { ProductCarouselComponent } from './components/product-carousel/product-carousel.component';
import { CartOverviewComponent } from './components/cart-overview/cart-overview.component';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: ProductCarouselComponent },
  { path: 'cart', component: CartOverviewComponent },
  { path: '**', redirectTo: '' },
];
