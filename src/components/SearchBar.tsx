// src/components/SearchBar.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SupportAgent from '@mui/icons-material/SupportAgent';

// import './SearchBar.css'; // 样式根据项目结构可自定义

/**
 * 顶部搜索栏组件
 */
const SearchBar: React.FC = () => {
  const navigate = useNavigate();
  const [query, setQuery] = React.useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/products?search=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className='search-bar'>
    <form className="form" onSubmit={handleSearch}>
      <Input
        placeholder="搜索商品" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        disableUnderline
        className="search-input"
      />
      <button type="submit" className="search-button">
        <SearchIcon />
      </button>
    </form>

      <button className="service-button">
        <SupportAgent />
      </button>
    </div>
  );
};

export default SearchBar;
