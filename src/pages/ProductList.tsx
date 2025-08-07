import React, { useState } from 'react';
// import './ProductList.css';
import ProductCard from '../components/ProductCard';
import rice1 from '../asset/img/products/rice1.png';
import rice2 from '../asset/img/products/rice2.png';
import oil1 from '../asset/img/products/oil1.png';
import oil2 from '../asset/img/products/oil2.png';
import PageTitle from 'components/PageTitle';

const tabs = ['食品饮料', '粮油调味', '饮料冲调', '休闲食品'];
const filters = ['供应商', '品牌', '总价格', '筛选'];
const mockProducts = [
  {
    id: 1,
    name: '十月稻田 当季新米 寒地之最 生态稻香米 10斤',
    price: 48.41,
    image: rice1,
  },
  {
    id: 2,
    name: '金龙鱼御鲜长粒香大米5kg（单位：袋）象牙色',
    price: 47.5,
    image: rice2,
  },
  {
    id: 3,
    name: '鲁王古法榨特香花生油 红色 4L',
    price: 122.08,
    image: oil1,
  },
  {
    id: 4,
    name: '胡姬花金龙玉食古法花生油5L 单位：桶',
    price: 141.51,
    image: oil2,
  },
];


const ProductList: React.FC = () => {
  const [activeTab, setActiveTab] = useState('食品饮料');

  return (
    <div className="product-list-page">
      <PageTitle title={'商品列表'}/>
      <div className="search">
        <input type="text" placeholder="请输入搜索关键词" />
        <button>搜索</button>
      </div>

      <div className="tab-bar">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`tab-item ${tab === activeTab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="filter-bar">
        {filters.map((filter) => (
          <div key={filter} className="filter-item">
            {filter}
          </div>
        ))}
      </div>

      <div className="product-grid">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
