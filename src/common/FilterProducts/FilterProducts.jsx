import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import './FilterProducts.scss';

import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel, FormGroup } from '@mui/material';

import ButtonWrapper from '../Button/Button';
import SortList from '../SortList/SortList';
import PriceFilter from './PriceFilter/PriceFilter';

const FilterProducts = ({ products, showFilterButton }) => {
  const isMobileDevice = useMediaQuery({ maxWidth: 1024 });

  const [isShowFilterMenu, setShowFilterMenu] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedParams, setSelectedParams] = useState({});

  const applyFilters = (params) => {
    let filtered = products;

    Object.entries(params).forEach(([paramName, selectedValues]) => {
      if (selectedValues.length > 0) {
        filtered = filtered.filter((product) =>
          selectedValues.includes(product.param[paramName]),
        );
      }
    });

    setFilteredProducts(filtered);
  };

  const handleParamChange = (paramName, value) => {
    const updatedValues = selectedParams[paramName] || [];
    const isChecked = updatedValues.includes(value);
    const updatedParams = {
      ...selectedParams,
      [paramName]: isChecked
        ? updatedValues.filter((item) => item !== value)
        : [...updatedValues, value],
    };
    setSelectedParams(updatedParams);
    applyFilters(updatedParams);
  };

  const allParamValues = products.reduce((acc, product) => {
    Object.entries(product.param).forEach(([paramName, paramValue]) => {
      if (!acc[paramName]) {
        acc[paramName] = [];
      }
      if (!acc[paramName].includes(paramValue)) {
        acc[paramName].push(paramValue);
      }
    });
    return acc;
  }, {});

  const availableParams = Object.keys(allParamValues).reduce(
    (acc, paramName) => {
      acc[paramName] = allParamValues[paramName].filter((paramValue) => {
        const tempSelectedParams = {
          ...selectedParams,
          [paramName]: [paramValue],
        };
        const filtered = products.filter((product) =>
          Object.entries(tempSelectedParams).every(
            ([key, values]) =>
              values.length === 0 || values.includes(product.param[key]),
          ),
        );
        return filtered.length > 0;
      });
      return acc;
    },
    {},
  );

  const getProductsWordUkr = (count) => {
    const cases = [2, 0, 1, 1, 1, 2];
    const titles = ['товар', 'товари', 'товарів'];
    return titles[
      count % 100 > 4 && count % 100 < 20
        ? 2
        : cases[count % 10 < 5 ? count % 10 : 5]
    ];
  };

  const toggleFilterMenu = () => {
    if (!isShowFilterMenu) {
      document.body.classList.add('mobileMenuOpen');
    } else {
      document.body.classList.remove('mobileMenuOpen');
    }
    setShowFilterMenu((prevState) => !prevState);
  };

  useEffect(() => {
    if (products) {
      setFilteredProducts(products);
    }
  }, [products]);

  return (
    <div className="filterProductsWrapper">
      {isShowFilterMenu && (
        <div className="filterMenuOverlay" onClick={toggleFilterMenu}></div>
      )}
      {products.length > 0 && (
        <div className={`filters ${isShowFilterMenu ? 'show' : 'hide'}`}>
          {isMobileDevice && (
            <div className="filterTitle">
              <h3>Фільтр</h3>
              <ButtonWrapper
                buttonClassName="closeFilterBtn"
                onClick={toggleFilterMenu}
                icon="close"
              />
            </div>
          )}
          <div className="filterParam">
            {Object.keys(allParamValues).map((paramName) => (
              <div className="paramBox" key={paramName}>
                <h3>{paramName}</h3>
                <FormGroup>
                  {allParamValues[paramName].map((paramValue) => (
                    <FormControlLabel
                      key={paramValue}
                      control={
                        <Checkbox
                          sx={{
                            '& .MuiSvgIcon-root': { fontSize: 28 },
                          }}
                          checked={
                            selectedParams[paramName]
                              ? selectedParams[paramName].includes(paramValue)
                              : false
                          }
                          disabled={
                            !availableParams[paramName]?.includes(paramValue)
                          }
                          onChange={() =>
                            handleParamChange(paramName, paramValue)
                          }
                        />
                      }
                      label={paramValue}
                    />
                  ))}
                </FormGroup>
              </div>
            ))}
            <PriceFilter
              products={filteredProducts}
              setFilteredProducts={setFilteredProducts}
            />
          </div>
          {isMobileDevice && (
            <ButtonWrapper
              buttonClassName="showFilteredProductsBtn"
              buttonText={`Показати ${
                filteredProducts.length
              } ${getProductsWordUkr(filteredProducts.length)}`}
              onClick={toggleFilterMenu}
            />
          )}
        </div>
      )}

      <SortList
        products={filteredProducts}
        setShowFilterMenu={toggleFilterMenu}
        showFilterButton={showFilterButton}
      ></SortList>
    </div>
  );
};

FilterProducts.propTypes = {
  products: PropTypes.array.isRequired,
  isShowFilterMenu: PropTypes.bool,
  setShowFilterMenu: PropTypes.func,
  showFilterButton: PropTypes.bool,
};

export default FilterProducts;
