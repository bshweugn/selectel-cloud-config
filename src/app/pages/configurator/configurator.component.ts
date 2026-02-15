import { Component, computed, signal } from '@angular/core';
import { CONFIGURATOR_CATEGORIES } from '../../data/configurator.data';
import type { Category } from '../../models/category.interface';
import type { ConfigItem } from '../../models/config-item.interface';
import { AddonRowComponent } from '../../components/addon-row/addon-row.component';
import { AppHeaderComponent } from '../../components/app-header/app-header.component';
import { BreadcrumbsComponent, type BreadcrumbItem } from '../../components/breadcrumbs/breadcrumbs.component';
import { IconComponent } from '../../components/icon/icon.component';
import { PricePipe } from '../../pipes/price.pipe';

@Component({
  selector: 'app-configurator',
  standalone: true,
  imports: [
    AddonRowComponent,
    AppHeaderComponent,
    BreadcrumbsComponent,
    IconComponent,
    PricePipe,
  ],
  templateUrl: './configurator.component.html',
})
export class ConfiguratorComponent {
  readonly categories = CONFIGURATOR_CATEGORIES;

  readonly currentCategoryId = signal<string | null>(
    this.categories[0]?.id ?? null
  );

  readonly selectedIdsByCategory = signal<Record<string, string[]>>(
    Object.fromEntries(this.categories.map((c) => [c.id, []]))
  );

  readonly currentCategory = computed<Category | undefined>(() => {
    const id = this.currentCategoryId();
    return this.categories.find((c) => c.id === id);
  });

  readonly currentAddOns = computed<ConfigItem[]>(() => {
    const cat = this.currentCategory();
    return cat?.addOns ?? [];
  });

  readonly selectedAddOnsCount = computed(() => {
    const catId = this.currentCategoryId();
    if (!catId) return 0;
    return (this.selectedIdsByCategory()[catId] ?? []).length;
  });

  readonly addOnsTotal = computed(() => {
    const cat = this.currentCategory();
    const catId = cat?.id;
    if (!catId) return 0;
    const selectedIds = this.selectedIdsByCategory()[catId] ?? [];
    return (cat?.addOns ?? [])
      .filter((addon) => selectedIds.includes(addon.id))
      .reduce((sum, addon) => sum + addon.value, 0);
  });

  readonly fullTotal = computed(() => {
    const cat = this.currentCategory();
    const basePrice = cat?.baseConfiguration?.price ?? 0;
    return basePrice + this.addOnsTotal();
  });

  readonly selectedAddOnsList = computed<{ label: string; value: number }[]>(() => {
    const cat = this.currentCategory();
    const catId = cat?.id;
    if (!catId) return [];
    const selectedIds = this.selectedIdsByCategory()[catId] ?? [];
    return (cat?.addOns ?? [])
      .filter((addon) => selectedIds.includes(addon.id))
      .map((addon) => ({ label: addon.label, value: addon.value }));
  });

  readonly breadcrumbsItems = computed<BreadcrumbItem[]>(() => {
    const cat = this.currentCategory();
    const items: BreadcrumbItem[] = [{ label: 'Главная', routerLink: '/' }];
    if (cat) items.push({ label: cat.name });
    return items;
  });

  addOnsCountLabel(count: number): string {
    const n = Math.abs(count) % 100;
    const last = n % 10;
    if (n >= 11 && n <= 19) return 'услуг';
    if (last === 1) return 'услуга';
    if (last >= 2 && last <= 4) return 'услуги';
    return 'услуг';
  }

  setCategory(id: string): void {
    this.currentCategoryId.set(id);
  }

  isSelected(itemId: string): boolean {
    const catId = this.currentCategoryId();
    if (!catId) return false;
    const ids = this.selectedIdsByCategory()[catId] ?? [];
    return ids.includes(itemId);
  }

  toggle(itemId: string): void {
    const catId = this.currentCategoryId();
    if (!catId) return;
    const prev = this.selectedIdsByCategory()[catId] ?? [];
    const next = prev.includes(itemId)
      ? prev.filter((id) => id !== itemId)
      : [...prev, itemId];
    this.selectedIdsByCategory.update((byCat) => ({
      ...byCat,
      [catId]: next,
    }));
  }
}
