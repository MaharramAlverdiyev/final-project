import { useEffect, useState } from 'react';
import '../SectionThree/secthree.css';
import { getProduct } from '../../../../redux/features/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card/Card';

export const SecThree = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.product);

  const [visibleItems, setVisibleItems] = useState(3);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const handleShowMore = () => {
    setShowAll(true);
    setVisibleItems(value.length); 
  };

  const handleShowLess = () => {
    setShowAll(false);
    setVisibleItems(3); 
  };

  return (
    <div className='secthree'>
      <div className='secthree-center'>
        <h1>Ətirlər</h1>
        <section className='sec3-product'>
          {value.slice(0, visibleItems).map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </section>
        <div className='secthree-controls'>
          {!showAll ? (
            <button onClick={handleShowMore} >Bütün ətirlər</button>
          ) : (
            <button onClick={handleShowLess} >Geri</button>
          )}
        </div>
      </div>
    </div>
  );
};
