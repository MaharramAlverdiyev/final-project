import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from '../Homepage/Header/Header';
import { Footer } from '../Homepage/Footer/Footer';
import { GoDotFill } from 'react-icons/go';
import './man.css';
import { useNavigate } from 'react-router-dom';


export const Man = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<any[]>([]);
  const [sortOption, setSortOption] = useState<string>('');
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://672f319c229a881691f220af.mockapi.io/Perfumes');
        setProducts(response.data);
      } catch (error) {
        console.error('Data xetasi:', error);
      }
    };

    fetchProducts();
  }, []);


 const MenProducts = products.filter(product => product.category === 'Men');


 const sortedProducts = [...MenProducts].sort((a, b) => {
    if (sortOption === 'price-asc') return a.price - b.price;
    if (sortOption === 'price-desc') return b.price - a.price;
    if (sortOption === 'name-asc') return a.name.localeCompare(b.name);
    if (sortOption === 'name-desc') return b.name.localeCompare(a.name);
    return 0;
  });

  return (
    <div>
      <Header />
      <div className="man-section">
        <div className="man-section-center">
          <ul>
            <li onClick={() => navigate("/")} >
              <a style={{ color: '#95979c', fontSize: '14px' }} href="">
                Ətirlər
              </a>
            </li>
            <li>
              <a
                style={{ color: '#232d40', fontSize: '14px', marginLeft: '5px' }}
                href=""
              >
                <GoDotFill /> Kişi ətirləri
              </a>
            </li>
          </ul>
          <div className="sort-container">
            <label htmlFor="sort">Filterlə:</label>
            <select id="sort" value={sortOption} onChange={(e) => setSortOption(e.target.value)}  >
              <option value="">Seç</option>
              <option value="price-asc">Qiymət (Artan)</option>
              <option value="price-desc">Qiymət (Azalan)</option>
              <option value="name-asc">Ətirin adı (A-Z)</option>
              <option value="name-desc">Ətirin adı (Z-A)</option>
            </select>
          </div>
          <div className="product-list">
            {
              sortedProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-details">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-brand">{product.brand}</p>
                    <p className="product-category">Kategoriya: Kişi</p>
                    <p className="product-price">Qiymət: {product.price} ₼</p>
                    <p className="product-stock">Məhsul sayı: {product.stock}</p>
                    <div className="add-to">
                      <button className='add-to-fav'>Bəyən</button>
                      <button className='add-to-basket'>Səbətə əlavə et</button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};


