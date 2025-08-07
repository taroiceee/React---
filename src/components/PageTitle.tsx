import React from 'react';
import { useNavigate } from 'react-router-dom';

type PageTitleProps = {
  title: string;
};


const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // 回退一页
  };
  return (
    <div className="PageTitle">
      <button className='back' onClick={handleGoBack}>{'<返回'}</button>
      <div className='title'>{title}</div>
    </div>
  );
};

export default PageTitle;
