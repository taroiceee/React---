// components/Recommended.tsx
import { useEffect, useRef, useState } from 'react';
import xbtj from '../asset/img/titles/xbtj.png'
import { RecommendedList } from '../data/RecommendedList';

interface Props {
  category: RecommendedList;
}

const categories = ['推荐', '服饰', '数码', '家居', '美妆', '很长的标题', '很长的标题', '很长的标题', '很长的标题', '很长的标题', '很长的标题', '很长的标题', '很长的标题', '很长的标题', '很长的标题', '很长的标题'];
const mockProducts = { /* 按分类存储的数组 */ };

const Recommended: React.FC = () => {
  const [active, setActive] = useState(0);
  const tabRef = useRef<HTMLDivElement>(null);

  // 滚动监听，固定分类栏
  useEffect(() => {
    const handler = () => {
      // eslint-disable-next-line
      const tabsTop = tabRef.current?.getBoundingClientRect().top ?? 0;
    //   if (tabsTop <= 0) tabRef.current?.classList.add(styles.sticky);
    //   else tabRef.current?.classList.remove(styles.sticky);
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className="Recommended">
      <div className="title">
        <img src={xbtj} alt='xbtj'></img>
      </div>
      <div ref={tabRef} className="tabs">
        {(categories || []).map((cat, idx) => (
          <button
            key={idx}
            className={active === idx ? "active" : ''}
            onClick={() => setActive(idx)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="products">
        {(mockProducts[categories[active]] || []).map(p => (
          <div key={p.id} className="card">
            <img src={p.image} alt={p.title} />
            <p>{p.title}</p>
            <span>¥{p.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
