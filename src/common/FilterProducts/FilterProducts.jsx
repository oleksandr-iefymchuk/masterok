import './FilterProducts.scss';

import { useState } from 'react';
import PropTypes from 'prop-types';
import SortList from '../SortList/SortList';
import PriceFilter from './PriceFilter/PriceFilter';

const FilterProducts = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <div className="filterProductsWrapper">
      {products.length > 0 && (
        <div className="filters">
          <PriceFilter
            products={products}
            setFilteredProducts={setFilteredProducts}
          />
        </div>
      )}
      <SortList products={filteredProducts}></SortList>
    </div>
  );
};

FilterProducts.propTypes = {
  products: PropTypes.array.isRequired,
};

export default FilterProducts;
