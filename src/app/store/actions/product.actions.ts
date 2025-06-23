import { createAction, props } from '@ngrx/store';
import { Product, ProductsResponse } from '../../models/product.model';

export const loadProducts = createAction('[Product] Load Products');

export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ products: ProductsResponse }>()
);

export const loadProductsFailure = createAction(
  '[Product] Load Products Failure',
  props<{ error: string }>()
);
