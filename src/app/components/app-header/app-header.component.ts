import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-app-header',
  standalone: true,
  imports: [RouterLink, LogoComponent],
  template: `
    <header class="border-b border-gray-200 bg-white px-4 py-3 flex items-center">
      <a routerLink="/" class="inline-block" aria-label="На главную">
        <app-logo />
      </a>
    </header>
  `,
})
export class AppHeaderComponent {}
