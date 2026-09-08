import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Coupon } from '../../models/coupon';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  imports: [MatButtonModule, MatCardModule, ClipboardModule],
  selector: 'app-coupon-card',
  styleUrl: './coupon-card.css',
  templateUrl: './coupon-card.html',
})
export class CouponCard {
  @Input() coupon: Coupon | null = null;
  @Input() buttonText: string = 'Acessar';
  @Input() imagePlaceholder: string = 'https://picsum.photos/200/300';

  constructor(private readonly snackBar: MatSnackBar) { }

  onCopied() {
    this.snackBar.open('Cupom copiado para a área de transferência!', 'Fechar', {
      duration: 3000,
    });
  }

  onCopyFailed() {
    this.snackBar.open('Falha ao copiar o cupom.', 'Fechar', {
      duration: 3000,
    });
  }
}

