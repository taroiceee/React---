// export interface SubCategory {
//   name: string;
//   image: string;
// }

export interface RecommendedList {
    id: number;
    name: string;
    image: string;
    //   subcategories: SubCategory[];
}

export const categories: RecommendedList[] = [
    //   {
    //     id: 'grain',
    //     name: '粮油干货',
    // subcategories: [
    { id: 1, name: '粮油调味', image: '/assets/img/category/oil.png' },
    { id: 2, name: '饮料冲调', image: '/assets/img/category/drink.png' },
    { id: 3, name: '休闲食品', image: '/assets/img/category/snacks.png' },
    { id: 4, name: '茶饮', image: '/assets/img/category/tea.png' }
    // ]
    //   }
];
