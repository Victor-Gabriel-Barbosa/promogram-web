import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Grid } from '../../components/grid/grid';
import { ProductCard } from '../../components/product-card/product-card';
import { CouponCard } from '../../components/coupon-card/coupon-card';
import { SkeletonCard } from '../../components/skeleton-card/skeleton-card';
import { ProductService } from '../../services/product';
import { CouponService } from '../../services/coupon';
import { toSignal } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    MatButtonModule,
    MatIconModule,
    Grid,
    ProductCard,
    CouponCard,
    SkeletonCard,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly productService = inject(ProductService);
  private readonly couponService = inject(CouponService);

  readonly productsLoading = signal(true);
  readonly couponsLoading = signal(true);

  readonly products = toSignal(
    this.productService.getProducts(10).pipe(
      tap(() => this.productsLoading.set(false))
    ),
    { initialValue: [] }
  );

  readonly coupons = toSignal(
    this.couponService.getCoupons(10).pipe(
      tap(() => this.couponsLoading.set(false))
    ),
    { initialValue: [] }
  );
}
