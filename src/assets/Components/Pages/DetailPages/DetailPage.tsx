// DetailPage.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Header } from '../Homepage/Header/Header';
import { Footer } from '../Homepage/Footer/Footer';
import { GoDotFill } from 'react-icons/go';
import './detailpage.css'

export const DetailPage = () => {

  const { id } = useParams<{ id: string }>(); 
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);
  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`https://672f319c229a881691f220af.mockapi.io/Perfumes/${id}`);
        setProduct(data);
      } catch (error) {
        console.error('Ürün verisi alınırken hata oluştu:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
        <>
        <Header/>
    <p>Yükleniyor...</p>
    <Footer/>
    </>
)}

  if (!product) {
    return <p>Ürün bulunamadı.</p>;
  }

  return (
    <div className="detail-page">
      <Header />
    <div className="detail-sec">
      <div className="detail-sec-center">
        <ul style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center', width: '26%' }}>
          <li>Ətirlər</li>
          <li>
            <GoDotFill />
            {product.name}
          </li>
        </ul>
        <div className="product-container">
              <div className="product-image">
                <img style={{ width: '200px' }} src={product.image} alt={product.name} />
              </div>
              <div className="product-details">
                <h1 className="product-title">{product.name}</h1>
                <div className="product-text">
                  <p className="product-subtitle">Category: {product.category}</p>
                  <p className="product-subtitle">Brand: {product.brand}</p>
                </div>
                <p className="product-subtitle">Select your size:</p>

                {/* <div className="product-options">
                    <div className="option-item">
                      <button className="size-button"></button>
                      <span className="price">{option.price} ₼</span>
                    </div>
                </div> */}

                <div className="detail-buttons">
                  <div className="count-button">
                    <button onClick={decrease}>-</button> <span>{count}</span> <button onClick={increase}>+</button>
                  </div>
                  <button className="add-to-cart">Səbətə əlavə et</button>
                </div>
              </div>
        </div>
        <Footer />
      </div>
    </div>
 </div>
  );
};
