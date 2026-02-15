import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppHeaderComponent } from '../../components/app-header/app-header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AppHeaderComponent, RouterLink],
  template: `
    <div class="flex flex-col min-h-screen">
      <app-app-header />
    <main class="flex-1 flex flex-col items-center justify-center p-6">
      <h1 class="text-3xl font-semibold text-gray-900 mb-2">
        Облачные услуги Selectel
      </h1>
      <p class="text-gray-600 mb-6 text-center max-w-md">
        Выделенные серверы, облачные серверы и инфраструктура для вашего бизнеса.
      </p>
      <a
        routerLink="/configurator"
        class="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
      >
        Перейти в конфигуратор
      </a>
    </main>
    </div>
  `,
})
export class HomeComponent {}
