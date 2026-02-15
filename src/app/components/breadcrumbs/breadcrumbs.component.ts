import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface BreadcrumbItem {
  label: string;
  routerLink?: string;
}

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav aria-label="Хлебные крошки" class="breadcrumbs mb-7 mt-4 px-2">
      @for (item of items(); track item.label; let last = $last) {
        @if (!last) {
          @if (item.routerLink) {
            <a [routerLink]="item.routerLink" class="text-gray-500 hover:text-gray-900 transition">{{ item.label }}</a>
          } @else {
            <span class="text-[#5f717a]" aria-current="page">{{ item.label }}</span>
          }
          <span class="text-[#5f717a]" aria-hidden="true">/</span>
        } @else {
          @if (item.routerLink) {
            <a [routerLink]="item.routerLink" class="text-[#5f717a] hover:text-[#eb4247]" aria-current="page">{{ item.label }}</a>
          } @else {
            <span class="text-[#5f717a]" aria-current="page">{{ item.label }}</span>
          }
        }
      }
    </nav>
  `,
})
export class BreadcrumbsComponent {
  items = input.required<BreadcrumbItem[]>();
}
