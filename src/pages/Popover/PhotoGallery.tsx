//Modal 弹窗式路由
import { Link, useLocation } from 'react-router-dom';

export default function PhotoGallery() {
  const location = useLocation();

  return (
    <div>
      <h2>图片列表</h2>
      <Link to="/photos/123" state={{ background: location }}>
        查看图片123
      </Link>
    </div>
  );
}
