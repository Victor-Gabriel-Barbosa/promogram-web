import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  imports: [MatIconModule, MatButtonModule, MatTooltipModule],
  selector: 'app-theme-toggle',
  styleUrl: './theme-toggle.css',
  templateUrl: './theme-toggle.html',
})
export class ThemeToggle {
  darkMode = localStorage.getItem('theme') === 'dark';

  toggleTheme() {
    this.darkMode = !this.darkMode;

    document.documentElement.classList.toggle('dark', this.darkMode);

    localStorage.setItem(
      'theme',
      this.darkMode ? 'dark' : 'light'
    );
  }
}
