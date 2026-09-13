import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { NavItem } from './models/navbar-item';

@Component({
  imports: [RouterOutlet, Navbar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Promogram');

  protected readonly navbarItems = signal<NavItem[]>([
    { label: 'Início', link: '/', icon: 'home', tooltip: 'Página inicial' },
    { label: 'Produtos', link: '/produtos', icon: 'shopping_bag', tooltip: 'Ver todos os produtos' },
    { label: 'Cupons', link: '/cupons', icon: 'local_offer', tooltip: 'Ver todos os cupons' },
    { label: 'GitHub', link: 'https://github.com/Victor-Gabriel-Barbosa/promogram-web', icon: 'code', buttonType: 'filled', tooltip: 'Repositório GitHub' },
  ]);
}
