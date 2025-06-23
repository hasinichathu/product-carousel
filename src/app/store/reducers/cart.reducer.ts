import { createReducer, on } from '@ngrx/store';
import { CartItem, Product } from '../../models/product.model';
import * as CartActions from '../actions/cart.actions';
import { addToCart, clearCart, removeFromCart } from '../actions/cart.actions';

export interface CartState { items: Product[]; }
export const initialCartState: CartState = { items: [] };

export const cartReducer = createReducer(
  initialCartState,
  on(addToCart,      (state, { product }) => ({ items: [...state.items, product] })),
  on(removeFromCart, (state, { productId }) => ({ items: state.items.filter(p => p.id !== productId) })),
  on(clearCart,      state                   => ({ items: [] }))
);