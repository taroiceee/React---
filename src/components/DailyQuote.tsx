// components/DailyQuote.tsx
import { useEffect, useState } from 'react';

const DailyQuote: React.FC = () => {
  // eslint-disable-next-line
  const [quote, setQuote] = useState('努力！充实每一天。');

  // 可改为从 API 获取
  useEffect(() => {
    // fetch('/api/quote').then...
  }, []);

  return <div className="daily-quote">{quote}</div>;
};

export default DailyQuote;
