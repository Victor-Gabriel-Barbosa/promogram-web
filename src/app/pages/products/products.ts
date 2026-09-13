import { Component, inject, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Grid } from '../../components/grid/grid';
import { ProductCard } from '../../components/product-card/product-card';
import { ProductService } from '../../services/product';
import { toSignal } from '@angular/core/rxjs-interop';

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
  ],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  private readonly productService = inject(ProductService);

  readonly allProducts = toSignal(
    this.productService.getProducts(),
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
