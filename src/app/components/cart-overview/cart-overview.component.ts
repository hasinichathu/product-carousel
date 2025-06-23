import { Component, effect, OnInit, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';
import {
  selectCartCount,
  selectCartItems,
  selectCartTotal,
} from '../../store/selectors/cart.selectors';
import { clearCart, removeFromCart } from '../../store/actions/cart.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-overview.component.html',
  styleUrl: './cart-overview.component.scss',
})
export class CartOverviewComponent implements OnInit {
  items$: Observable<Product[]> = this.store.select(selectCartItems);
  count$: Observable<number> = this.store.select(selectCartCount);
  total$: Observable<number> = this.store.select(selectCartTotal);

  constructor(private store: Store, private router: Router) {}

  ngOnInit() {
  }

  remove(itemId: number) {
    this.store.dispatch(removeFromCart({ productId: itemId }));
  }

  clear() {
    this.store.dispatch(clearCart());
  }
}
