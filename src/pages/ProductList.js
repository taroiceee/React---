import { useSearchParams } from 'react-router-dom';

export default function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || 1;

  const handleNext = () => {
    setSearchParams({ page: Number(page) + 1 });
  };

  return (
    <div>
      <h3>当前页: {page}</h3>
      <button onClick={handleNext}>下一页</button>
    </div>
  );
}
