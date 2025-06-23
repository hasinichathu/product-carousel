import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { productReducer } from '../app/store/reducers/product.reducer';
import { cartReducer } from '../app/store/reducers/cart.reducer';
import { ProductEffects } from '../app/store/effects/product.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    provideStore({ products: productReducer, cart: cartReducer }),
    provideEffects([ProductEffects]),
    provideRouter(routes),
  ],
};
