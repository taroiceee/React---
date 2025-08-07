// components/HighlightList.tsx

import rice1 from '../asset/img/products/rice1.png';
import rice2 from '../asset/img/products/rice2.png';
import oil1 from '../asset/img/products/oil1.png';
import oil2 from '../asset/img/products/oil2.png';

interface Item { id: number; title: string; image: string; price: number; }


const mockNew: Item[] = [{
    id: 1001,
    title: "食用油",
    image: oil1,
    price: 199.00
  },{
    id: 1002,
    title: "食用油",
    image: oil2,
    price: 199.00
  }];
const mockHot: Item[] = [{
    id: 1003,
    title: "大米",
    image: rice1,
    price: 59.99
  },{
    id: 1004,
    title: "大米",
    image: rice2,
    price: 59.99
  }];

const HighlightList: React.FC = () => (
  <div className="HighlightList">
    <div className="newProducts"> 
      <h2>新品速递</h2>
      <div className="list">
        {mockNew.map(item => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.title} />
            {/* <div className='title'>{item.title}</div> */}
            <div className='price'>¥{item.price}</div>
          </div>
        ))}
      </div>
    </div>
    <div className="hotRanking">
      <h2>热销排行</h2>
      <div className="list">
        {mockHot.map(item => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.title} />
            {/* <div className='title'>{item.title}</div> */}
            <div className='price'>¥{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default HighlightList;
