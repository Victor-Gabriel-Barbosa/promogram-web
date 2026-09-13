import { Component, inject, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Grid } from '../../components/grid/grid';
import { CouponCard } from '../../components/coupon-card/coupon-card';
import { CouponService } from '../../services/coupon';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-coupons',
  imports: [
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    Grid,
    CouponCard,
  ],
  templateUrl: './coupons.html',
  styleUrl: './coupons.css',
})
export class Coupons {
  private readonly couponService = inject(CouponService);

  readonly allCoupons = toSignal(
    this.couponService.getCoupons(),
    { initialValue: [] }
  );

  readonly searchTerm = signal('');

  readonly filteredCoupons = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    const list = this.allCoupons() || [];
    if (!term) return list;
    return list.filter(c =>
      c.nome.toLowerCase().includes(term) ||
      (c.codigo && c.codigo.toLowerCase().includes(term))
    );
  });

  clearSearch() {
    this.searchTerm.set('');
  }
}
