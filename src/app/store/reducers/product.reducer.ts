import { createReducer, on } from '@ngrx/store';
import { Product } from '../../models/product.model';
import * as ProductActions from '../actions/product.actions';

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
  total: number;
}

export const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
  total: 0
};

export const productReducer = createReducer(
  initialState,
  on(ProductActions.loadProducts, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(ProductActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products: products.products,
    total: products.total,
    loading: false,
    error: null
  })),
  on(ProductActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);