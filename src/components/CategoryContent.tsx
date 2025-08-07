import React from 'react';
import { Category } from '../data/categories';
import { Link } from "react-router-dom"


interface Props {
  category: Category;
}

const CategoryContent: React.FC<Props> = ({ category }) => {
  return (
    <div className="category-content">
      <div className="category-title">{category.name}</div>
      <Link to={'/ProductList'}  className='moreBotton'>{'>>>查看更多'}</Link>
      <div className="subcategory-grid">
        {category.subcategories.map((sub) => (
          <div className="subcategory-item" key={sub.name}>
            <img src={sub.image} alt={sub.name} />
            <div className="subcategory-name">{sub.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryContent;
