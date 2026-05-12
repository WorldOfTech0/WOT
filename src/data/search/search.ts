import { CATEGORIES, SUBCATEGORIES } from '../categories';

export const searchItems = [
  ...CATEGORIES.map((c) => ({
    id: c.id,
    titleKey: c.titleKey,
    descriptionKey: c.subtitleKey,
    icon: c.icon,
    path: c.path,
    type: 'category',
  })),
  ...Object.values(SUBCATEGORIES).map((s) => ({
    id: s.id,
    titleKey: s.titleKey,
    descriptionKey: '',
    icon: s.icon,
    path: s.path,
    type: 'subcategory',
  })),
];

export const fuseOptions = {
  isCaseSensitive: false,
  shouldSort: true,
  minMatchCharLength: 2,
  threshold: 0.3,
  keys: ['title', 'description', 'id'],
};

