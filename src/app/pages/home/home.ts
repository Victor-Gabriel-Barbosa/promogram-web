import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Grid } from '../../components/grid/grid';
import { ProductCard } from '../../components/product-card/product-card';
import { CouponCard } from '../../components/coupon-card/coupon-card';
import { ProductService } from '../../services/product';
import { CouponService } from '../../services/coupon';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  imports: [RouterLink, MatButtonModule, MatIconModule, Grid, ProductCard, CouponCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly productService = inject(ProductService);
  private readonly couponService = inject(CouponService);

  readonly products = toSignal(
    this.productService.getProducts(),
    { initialValue: [] }
  );

  readonly coupons = toSignal(
    this.couponService.getCoupons(),
    { initialValue: [] }
  );
}
