export type Subcategory = {
  id: string;
  titleKey: string;
  icon: string; // Material Symbol name
  path: string;
  contentKey?: string;
  docName?: string;
};

export type Category = {
  id: string;
  titleKey: string;
  navKey: string;
  subtitleKey: string;
  icon: string; // Material Symbol name
  path: string;
  isFeatured: boolean;
  subcategories: Subcategory[];
};
