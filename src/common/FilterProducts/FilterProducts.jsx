import './FilterProducts.scss';

import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import SortList from '../SortList/SortList';
import PriceFilter from './PriceFilter/PriceFilter';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel, FormGroup } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import ButtonWrapper from '../Button/Button';

const FilterProducts = ({ products, isShowFilterMenu, setShowFilterMenu }) => {
  const isMobileDevice = useMediaQuery({ maxWidth: 1024 });
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedParams, setSelectedParams] = useState({});
  const filterRef = useRef(null);

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

  const toggleFilterMenu = () => {
    setShowFilterMenu((prevState) => !prevState);
  };

  function getProductsWordUkr(count) {
    const cases = [2, 0, 1, 1, 1, 2];
    const titles = ['товар', 'товари', 'товарів'];
    return titles[
      count % 100 > 4 && count % 100 < 20
        ? 2
        : cases[count % 10 < 5 ? count % 10 : 5]
    ];
  }

  useEffect(() => {
    if (isShowFilterMenu) {
      document.body.classList.add('mobileMenuOpen');
    } else {
      document.body.classList.remove('mobileMenuOpen');
    }
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowFilterMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [filterRef, setShowFilterMenu, isShowFilterMenu]);

  useEffect(() => {
    if (products) {
      setFilteredProducts(products);
    }
  }, [products]);

  return (
    <div className="filterProductsWrapper">
      {products.length > 0 && (
        <div
          className={`filters ${isShowFilterMenu ? 'show' : 'hide'}`}
          ref={filterRef}
        >
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
        setShowFilterMenu={setShowFilterMenu}
      ></SortList>
    </div>
  );
};

FilterProducts.displayName = 'FilterProducts';
{
  /* <FormGroup>
                {allParamValues[paramName].map((paramValue) => (
                  <FormControlLabel
                    key={paramValue}
                    control={
                      <Checkbox
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
              </FormGroup> */
}

// const FilterProducts = ({ products }) => {
//   const [filteredProducts, setFilteredProducts] = useState(products);

//   const [selectedParams, setSelectedParams] = useState({});

//   const applyFilters = (params) => {
//     let filtered = products;

//     Object.entries(params).forEach(([paramName, selectedValues]) => {
//       if (selectedValues.length > 0) {
//         filtered = filtered.filter((product) =>
//           selectedValues.includes(product.param[paramName]),
//         );
//       }
//     });

//     setFilteredProducts(filtered);
//   };

//   const handleParamChange = (paramName, value) => {
//     const updatedValues = selectedParams[paramName] || [];
//     const isChecked = updatedValues.includes(value);
//     const updatedParams = {
//       ...selectedParams,
//       [paramName]: isChecked
//         ? updatedValues.filter((item) => item !== value)
//         : [...updatedValues, value],
//     };
//     setSelectedParams(updatedParams);
//     applyFilters(updatedParams);
//   };

//   const allParamValues = products.reduce((acc, product) => {
//     Object.entries(product.param).forEach(([paramName, paramValue]) => {
//       if (!acc[paramName]) {
//         acc[paramName] = [];
//       }
//       if (!acc[paramName].includes(paramValue)) {
//         acc[paramName].push(paramValue);
//       }
//     });
//     return acc;
//   }, {});

//   return (
//     <div className="filterProductsWrapper">
//       {products.length > 0 && (
//         <div className="filters">
//           <PriceFilter
//             products={products}
//             setFilteredProducts={setFilteredProducts}
//           />
//           {Object.keys(allParamValues).map((paramName) => (
//             <div key={paramName}>
//               <h3>{paramName}</h3>
//               {allParamValues[paramName].map((paramValue) => (
//                 <div key={paramValue}>
//                   <label>
//                     <input
//                       type="checkbox"
//                       checked={
//                         selectedParams[paramName]
//                           ? selectedParams[paramName].includes(paramValue)
//                           : false
//                       }
//                       onChange={() => handleParamChange(paramName, paramValue)}
//                     />
//                     {paramValue}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       )}

//       <SortList products={filteredProducts}></SortList>
//     </div>
//   );
// };

FilterProducts.propTypes = {
  products: PropTypes.array.isRequired,
  isShowFilterMenu: PropTypes.bool,
  setShowFilterMenu: PropTypes.func,
};

export default FilterProducts;
