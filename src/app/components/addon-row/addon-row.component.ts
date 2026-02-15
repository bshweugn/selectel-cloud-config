import { Component, input, output } from '@angular/core';
import type { ConfigItem } from '../../models/config-item.interface';
import { PricePipe } from '../../pipes/price.pipe';

@Component({
  selector: 'app-addon-row',
  standalone: true,
  imports: [PricePipe],
  template: `
    <div
      class="flex flex-col gap-0.5 p-4 rounded-[6px] border-2 bg-white transition cursor-pointer accent-gray-900"
      [class.border-gray-200]="!selected()"
      [class.border-gray-900]="selected()"
      [class.hover:border-gray-300]="!selected()"
      (click)="onRowClick()">
      <div class="flex items-baseline gap-3">
        <input
          type="checkbox"
          class="rounded border-gray-300 shrink-0 accent-gray-900 self-center w-4 h-4 "
          [checked]="selected()"
          (click)="$event.stopPropagation(); $event.preventDefault(); onRowClick()"
        />
        <span class="text-gray-900 flex-1 min-w-0">{{ item().label }}</span>
        <span class="text-gray-900 shrink-0">{{ item().value | price }} ₽/мес.</span>
      </div>
      <p class="text-gray-500 pl-7">{{ item().description }}</p>
    </div>
  `,
})
export class AddonRowComponent {
  item = input.required<ConfigItem>();
  selected = input.required<boolean>();

  toggled = output<string>();

  onRowClick(): void {
    this.toggled.emit(this.item().id);
  }
}
