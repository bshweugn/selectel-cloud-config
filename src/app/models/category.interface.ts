import type { BaseConfig } from './base-config.interface';
import type { ConfigItem } from './config-item.interface';

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  baseConfiguration: BaseConfig;
  addOns: ConfigItem[];
}
