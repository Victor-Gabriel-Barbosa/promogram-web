import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Grid } from "./components/grid/grid";
import { ProductCard } from './components/product-card/product-card';
import { CouponCard } from './components/coupon-card/coupon-card';
import { ProductService } from './services/product';
import { CouponService } from './services/coupon';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavItem } from './models/navbar-item';

@Component({
  imports: [RouterOutlet, Navbar, Grid, ProductCard, CouponCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
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

  protected readonly title = signal('Promogram');

  protected readonly navbarItems = signal<NavItem[]>([
    { label: 'Início', link: '/', icon: 'home' },
    { label: 'Sobre', link: '/sobre', icon: 'info' },
    { label: 'GitHub', link: 'https://github.com', icon: 'code', buttonType: 'filled' },
  ]);
}
