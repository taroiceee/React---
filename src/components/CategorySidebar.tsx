import React from 'react';
import { Category } from '../data/categories';

interface Props {
  categories: Category[];
  selectedId: string;
  onSelect: (id: string) => void;
}

const CategorySidebar: React.FC<Props> = ({ categories, selectedId, onSelect }) => {
  return (
    <div className="category-sidebar">
      {categories.map((cat) => (
        <div
          key={cat.id}
          className={`category-item ${cat.id === selectedId ? 'active' : ''}`}
          onClick={() => onSelect(cat.id)}
        >
          {cat.name}
        </div>
      ))}
    </div>
  );
};

export default CategorySidebar;
