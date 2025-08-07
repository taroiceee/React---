export interface SubCategory {
  name: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  subcategories: SubCategory[];
}

export const categories: Category[] = [
  {
    id: 'grain',
    name: '粮油干货',
    subcategories: [
      { name: '粮油调味', image: '/assets/img/category/oil.png' },
      { name: '饮料冲调', image: '/assets/img/category/drink.png' },
      { name: '休闲食品', image: '/assets/img/category/snacks.png' },
      { name: '茶饮', image: '/assets/img/category/tea.png' }
    ]
  },
  {
    id: 'snack',
    name: '休闲食品',
    subcategories: []
  },
  {
    id: 'appliances',
    name: '生活小电',
    subcategories: []
  },
  {
    id: 'furniture',
    name: '家居好物',
    subcategories: []
  },
  {
    id: 'sports',
    name: '运动户外',
    subcategories: []
  },
  {
    id: 'personal',
    name: '个护清洁',
    subcategories: []
  },
  {
    id: 'digital',
    name: '数码影音',
    subcategories: []
  },
  {
    id: 'pets',
    name: '宠物天地',
    subcategories: []
  },
  {
    id: 'aa',
    name: '宠物天地',
    subcategories: []
  },
  {
    id: 'bb',
    name: '宠物天地',
    subcategories: []
  },
  {
    id: 'vv',
    name: '宠物天地',
    subcategories: []
  },
  {
    id: 'ss',
    name: '宠物天地',
    subcategories: []
  },
  {
    id: 'dd',
    name: '宠物天地',
    subcategories: []
  },
  {
    id: 'ff',
    name: '宠物天地',
    subcategories: []
  },
  {
    id: 'ww',
    name: '宠物天地',
    subcategories: []
  },
  {
    id: 'rr',
    name: '宠物天地',
    subcategories: []
  },
  {
    id: 'tt',
    name: '宠物天地',
    subcategories: []
  }
];
