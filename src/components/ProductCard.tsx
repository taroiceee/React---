import React from 'react';
// import './ProductCard.css';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image }) => {
  return (
    <div className="product-card">
      <img className="product-image" src={image} alt={name} />
      <div className="product-name">{name}</div>
      <div className="product-price">
        <span role="img" aria-label="money">🍋</span>
        {price.toFixed(2)}
      </div>
    </div>
  );
};

export default ProductCard;
