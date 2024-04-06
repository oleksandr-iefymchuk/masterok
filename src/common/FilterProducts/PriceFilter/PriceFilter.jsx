import { useState, useEffect, useCallback } from 'react';
import { Input, Slider } from '@mui/material';
import PropTypes from 'prop-types';

import './PriceFilter.scss';

import ButtonWrapper from '../../Button/Button';

const PriceFilter = ({ products, setFilteredProducts }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const getMinPrice = useCallback(() => {
    if (products.length === 0) return 0;
    return Math.min(...products.map((product) => product.price));
  }, [products]);

  const getMaxPrice = useCallback(() => {
    if (products.length === 0) return 0;
    return Math.max(...products.map((product) => product.price));
  }, [products]);

  const handleMinInputChange = (event) => {
    let newMinPrice;
    if (event.target.value === '') {
      newMinPrice = 0;
    } else {
      newMinPrice = parseInt(event.target.value, 10);
      newMinPrice = newMinPrice.toString();
    }
    setMinPrice(newMinPrice);
  };

  const handleMaxInputChange = (event) => {
    let newMaxPrice;
    if (event.target.value === '') {
      newMaxPrice = 0;
    } else {
      newMaxPrice = parseInt(event.target.value, 10);
      newMaxPrice = newMaxPrice.toString();
    }
    setMaxPrice(newMaxPrice);
  };

  const handlePriceRangeChange = (event, newValue) => {
    const [newMinPrice, newMaxPrice] = newValue;
    setMinPrice(newMinPrice);
    setMaxPrice(newMaxPrice);
  };

  const filterProductsByPrice = (min, max) => {
    const filtered = products.filter(
      (product) => product.price >= min && product.price <= max,
    );
    setFilteredProducts(filtered);
  };

  const applyPriceFilter = () => {
    filterProductsByPrice(minPrice, maxPrice);
  };

  useEffect(() => {
    setMinPrice(getMinPrice());
    setMaxPrice(getMaxPrice());
    setFilteredProducts(products);
  }, [products, getMinPrice, getMaxPrice, setFilteredProducts]);

  return (
    <div className="priceFilter">
      <h4>Ціна:</h4>
      <Slider
        className="rangeSlider"
        value={[parseInt(minPrice), parseInt(maxPrice)]}
        onChange={handlePriceRangeChange}
        min={getMinPrice()}
        max={getMaxPrice()}
        valueLabelDisplay="off"
        aria-labelledby="range-slider"
        getAriaValueText={(value) => value.toString()}
      />
      <div className="priceInputs">
        <Input
          className="minPriceInput"
          value={minPrice}
          margin="dense"
          inputProps={{
            step: 1,
            min: getMinPrice(),
            max: maxPrice,
            type: 'number',
          }}
          onChange={handleMinInputChange}
        />{' '}
        <span> - </span>
        <Input
          className="maxPriceInput"
          value={maxPrice}
          margin="dense"
          inputProps={{
            step: 1,
            min: minPrice,
            max: getMaxPrice(),
            type: 'number',
          }}
          onChange={handleMaxInputChange}
        />
        <ButtonWrapper
          buttonClassName="btnPriceFilter"
          buttonText="OK"
          onClick={applyPriceFilter}
        />
      </div>
    </div>
  );
};

PriceFilter.propTypes = {
  products: PropTypes.array.isRequired,
  setFilteredProducts: PropTypes.func.isRequired,
};
export default PriceFilter;
