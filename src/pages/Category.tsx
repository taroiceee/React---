import React, { useState } from 'react';
import { categories } from '../data/categories';
import CategorySidebar from '../components/CategorySidebar';
import CategoryContent from '../components/CategoryContent';
import PageTitle from '../components/PageTitle';
import FooterBar from '../components/FooterBar';

const CategoryPage: React.FC = () => {
    const [selectedId, setSelectedId] = useState(categories[0].id);
    const selectedCategory = categories.find((cat) => cat.id === selectedId)!;

    return (
        <div className="category-page">
            <PageTitle title={'分类'}/>
            <div className="category-container">
                <CategorySidebar
                    categories={categories}
                    selectedId={selectedId}
                    onSelect={setSelectedId}
                />
                <CategoryContent category={selectedCategory} />
            </div>
            <FooterBar />
        </div>
    );
};

export default CategoryPage;
