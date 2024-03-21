import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './Shop.scss';

import Banner from './components/Banner/Banner';
import ButtonWrapper from '../../common/Button/Button';
import ProductList from './components/ProductList/ProductList';

const Shop = () => {
  const categories = [
    'Фарби, лаки, клеї',
    'Інструменти',
    'Спецодяг',
    'Електроінструменти',
  ];

  const searchValue = useSelector((state) => state.search.searchValue);
  const products = useSelector((state) => state.products);
  console.log('products:', products);

  const [categoryIndexes, setCategoryIndexes] = useState({});
  const [filteredProducts, setFilteredProducts] = useState(products);

  const setCurrentIndex = (category, index) => {
    setCategoryIndexes((prevIndexes) => ({
      ...prevIndexes,
      [category]: index,
    }));
  };

  const searchProduct = !searchValue || searchValue.trim() === '';

  const filterProducts = (products, searchValue) => {
    return products.filter(({ id, title }) => {
      const filteredById = id.toLowerCase().includes(searchValue.toLowerCase());
      const filteredByTitle = title
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      return filteredById || filteredByTitle;
    });
  };

  useEffect(() => {
    if (!searchValue || searchValue.trim() === '') {
      setFilteredProducts(products);
    } else {
      const filtered = filterProducts(products, searchValue);
      setFilteredProducts(filtered);
    }
  }, [searchValue, products]);

  return (
    <div className="shopWrapper">
      {searchProduct && <Banner />}
      <div className="productsList">
        {searchProduct &&
          categories.map((category) => {
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
        {!searchProduct && <ProductList products={filteredProducts} />}
      </div>
    </div>
  );
};

export default Shop;
