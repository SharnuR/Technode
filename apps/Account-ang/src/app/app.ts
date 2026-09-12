import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Account-ang');

  constructor(private theme: ThemeService) {
    this.theme.init();
  }

  toggleTheme() {
    this.theme.toggle();
  }
}
