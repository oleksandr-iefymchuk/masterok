import { useState } from 'react';
import { useSelector } from 'react-redux';

import './Home.scss';

import Banner from './components/Banner/Banner';
import ButtonWrapper from '../../common/Button/Button';
import ProductList from '../ProductList/ProductList';

import { categories } from '../../constants';

const Shop = () => {
  const products = useSelector((state) => state.products);

  const [categoryIndexes, setCategoryIndexes] = useState({});

  const setCurrentIndex = (category, index) => {
    setCategoryIndexes((prevIndexes) => ({
      ...prevIndexes,
      [category]: index,
    }));
  };

  return (
    <div className="shopWrapper">
      <Banner />
      <div className="productsList">
        {categories.map((category) => {
          const categoryProducts = products.filter(
            (product) => product.category === category,
          );

          const currentIndex = categoryIndexes[category] || 0;
          const displayedProducts = categoryProducts.slice(
            currentIndex,
            currentIndex + 2,
          );

          return (
            <div className="productCategory" key={category}>
              <div className="categoryTitle">
                <h2>{category}</h2>
                <ButtonWrapper
                  buttonClassName="categoryButtons"
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex(category, currentIndex - 2)}
                  icon="arrowPrev"
                />
                <ButtonWrapper
                  buttonClassName="categoryButtons"
                  disabled={currentIndex + 2 >= categoryProducts.length}
                  onClick={() => setCurrentIndex(category, currentIndex + 2)}
                  icon="arrowNext"
                />
              </div>
              <ProductList products={displayedProducts} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
