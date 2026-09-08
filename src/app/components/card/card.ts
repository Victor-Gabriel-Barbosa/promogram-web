import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  imports: [MatButtonModule, MatCardModule],
  selector: 'app-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
})
export class Card {
  @Input() title: string = 'Sem título';
  @Input() description: string = 'Sem descrição';
  @Input() preco: number | null = 0;
  @Input() buttonLink: string | null = '/';
  @Input() buttonText: string = 'Acesse aqui';
  @Input() photo: string | null = 'https://picsum.photos/200/300';
  @Input() photoAlt: string = this.description;
}
