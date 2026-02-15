import type { Category } from '../models/category.interface';

export const CONFIGURATOR_CATEGORIES: Category[] = [
  {
    id: 'dedicated',
    name: 'Выделенный сервер',
    description: 'Физический сервер под ваши задачи',
    icon: 'server',
    baseConfiguration: {
      title: 'EL49-NVMe-10GE',
      price: 15900,
      specs: [
        { label: 'Процессор', value: 'Intel Xeon E-2456 3.3 ГГц, 6 ядер' },
        { label: 'Память', value: '32 ГБ DDR5 ECC' },
        { label: 'Диск', value: '2 × 1000 ГБ SSD NVMe M.2' },
      ],
    },
    addOns: [
      {
        id: 'ded-subnet',
        label: 'Подсеть',
        description: 'Дополнительная подсеть /29',
        icon: 'network',
        value: 590,
      },
      {
        id: 'ded-ddos',
        label: 'Защита от DDoS',
        description: 'Базовая защита от DDoS-атак',
        icon: 'shield',
        value: 2990,
      },
      {
        id: 'ded-backup',
        label: 'Резервное копирование',
        description: 'Ежедневный бэкап до 500 ГБ',
        icon: 'backup',
        value: 1490,
      },
      {
        id: 'ded-panel',
        label: 'Панель управления',
        description: 'Веб-панель для управления сервером',
        icon: 'panel',
        value: 1390,
      },
    ],
  },
  {
    id: 'cloud',
    name: 'Облачный сервер',
    description: 'Виртуальные машины по запросу',
    icon: 'cloud',
    baseConfiguration: {
      title: 'Cloud Standard',
      price: 790,
      specs: [
        { label: 'vCPU', value: '4 ядра' },
        { label: 'Память', value: '8 ГБ RAM' },
        { label: 'Диск', value: '40 ГБ SSD' },
      ],
    },
    addOns: [
      {
        id: 'cloud-lb',
        label: 'Балансировщик нагрузки',
        description: 'Распределение нагрузки между инстансами',
        icon: 'network',
        value: 990,
      },
      {
        id: 'cloud-backup',
        label: 'Резервное копирование',
        description: 'Автоматический бэкап дисков',
        icon: 'backup',
        value: 390,
      },
      {
        id: 'cloud-traffic',
        label: 'Интернет-трафик',
        description: 'Дополнительный исходящий трафик',
        icon: 'network',
        value: 590,
      },
      {
        id: 'cloud-images',
        label: 'Хранение образов',
        description: 'Хранение снимков и образов дисков',
        icon: 'backup',
        value: 190,
      },
    ],
  },
];
