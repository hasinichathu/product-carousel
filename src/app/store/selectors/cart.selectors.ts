import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from '../reducers/cart.reducer';

export const selectCart = createFeatureSelector<CartState>('cart');
export const selectCartItems = createSelector(
  selectCart,
  (items) => items.items
);
export const selectCartCount = createSelector(
  selectCartItems,
  (items) => items.length
);
export const selectCartTotal = createSelector(selectCartItems, (items) =>
  items.reduce((sum, p) => sum + p.price, 0)
);
