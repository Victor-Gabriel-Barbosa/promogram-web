import { Component, Input } from '@angular/core';
import { NavbarItem } from '../navbar-item/navbar-item';
import { ThemeToggle } from '../../components/theme-toggle/theme-toggle';
import { NavItem } from '../../models/navbar-item';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';

@Component({
  imports: [NavbarItem, ThemeToggle, MatIconModule, MatButtonModule, MatTooltipModule, RouterLink],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  @Input() title: string = '';
  @Input() logo: string = '';
  @Input() items: NavItem[] = [];
  menuOpen = false;
}
