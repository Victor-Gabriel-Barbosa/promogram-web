import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-grid',
  styleUrl: './grid.css',
  templateUrl: './grid.html',
})
export class Grid {
  @Input() title: string = '';
}
