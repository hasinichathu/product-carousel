import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { Product } from '../../models/product.model';
import * as ProductActions from '../../store/actions/product.actions';
import * as CartActions from '../../store/actions/cart.actions';
import * as ProductSelectors from '../../store/selectors/product.selectors';
@Component({
  selector: 'app-product-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-carousel.component.html',
  styleUrl: './product-carousel.component.scss',
})
export class ProductCarouselComponent implements OnInit, OnDestroy {
  @ViewChild('carouselWrapper', { static: false }) carouselWrapper!: ElementRef;
  selectedProduct: Product | null = null;

  products$: Observable<Product[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  private destroy$ = new Subject<void>();
  skeletonArray = Array(6).fill(0);

  constructor(private store: Store) {
    this.products$ = this.store.select(ProductSelectors.selectAllProducts);
    this.isLoading$ = this.store.select(ProductSelectors.selectProductsLoading);
    this.error$ = this.store.select(ProductSelectors.selectProductsError);
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadProducts(): void {
    this.store.dispatch(ProductActions.loadProducts());
  }

  addToCart(product: Product): void {
    this.store.dispatch(CartActions.addToCart({ product }));
  }

  quickView(product: Product) {
    this.selectedProduct = product;
  }

  closeQuickView() {
    this.selectedProduct = null;
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = 'placeholder-images.jpg';
  }

  getStars(rating: number): boolean[] {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      stars.push(i < fullStars || (i === fullStars && hasHalfStar));
    }
    return stars;
  }

  getOriginalPrice(currentPrice: number, discountPercentage: number): number {
    return currentPrice / (1 - discountPercentage / 100);
  }

  trackByProductId(index: number, product: Product): number {
    return product.id;
  }
}
