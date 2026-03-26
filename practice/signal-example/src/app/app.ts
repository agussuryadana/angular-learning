import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
  protected readonly title = signal('signal-example');

  theme = signal('light');
  label = this.theme();

  constructor() {
    effect(() => {
      this.label = this.theme();
    });
  }

  toggleDarkMode(){
    this.theme.update(currentValue => currentValue === 'light'? 'dark' : 'light')
  }
}
