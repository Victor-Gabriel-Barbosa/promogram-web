import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { NavItem } from '../../models/navbar-item';

@Component({
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, RouterLink],
  selector: 'app-navbar-item',
  styleUrl: './navbar-item.css',
  templateUrl: './navbar-item.html',
})
export class NavbarItem {
  @Input() item: NavItem = { label: '', icon: '', tooltip: '', link: '/', buttonType: 'text' };
}
