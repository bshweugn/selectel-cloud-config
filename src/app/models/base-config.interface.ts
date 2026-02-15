export interface BaseConfigSpec {
  label: string;
  value: string;
}

export interface BaseConfig {
  title: string;
  price: number;
  specs: BaseConfigSpec[];
}
