import { Component, inject, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Grid } from '../../components/grid/grid';
import { ProductCard } from '../../components/product-card/product-card';
import { SkeletonCard } from '../../components/skeleton-card/skeleton-card';
import { ProductService } from '../../services/product';
import { toSignal } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';

@Component({
  selector: 'app-products',
  imports: [
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    Grid,
    ProductCard,
    SkeletonCard,
  ],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  private readonly productService = inject(ProductService);

  readonly loading = signal(true);

  readonly allProducts = toSignal(
    this.productService.getProducts().pipe(
      tap(() => this.loading.set(false))
    ),
    { initialValue: [] }
  );

  readonly searchTerm = signal('');

  readonly filteredProducts = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    const list = this.allProducts() || [];
    if (!term) return list;
    return list.filter(p => p.nome.toLowerCase().includes(term));
  });

  clearSearch() {
    this.searchTerm.set('');
  }
}

