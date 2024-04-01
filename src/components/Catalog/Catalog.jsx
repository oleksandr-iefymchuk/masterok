import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { categories } from '../../constants';
import Pagination from '../Pagination/Pagination';

const Catalog = () => {
  const category = useSelector((store) => store.app.selectedCategory);
  const subcategory = useSelector((store) => store.app.selectedSubcategory);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    if (category) {
      const selectedCategory = categories.find((cat) => cat.name === category);
      if (selectedCategory) {
        let filteredByCategory = products.filter((product) =>
          selectedCategory.subcategories.some(
            (subcat) => subcat.name === product.subcategory,
          ),
        );
        setFilteredProducts(filteredByCategory);
      }
    }

    if (subcategory) {
      let filteredProducts = products.filter(
        (product) => product.subcategory === subcategory,
      );
      setFilteredProducts(filteredProducts);
    }
  }, [category, subcategory, products]);

  return (
    <div>
      <h1>Каталог</h1>
      <Pagination products={filteredProducts}></Pagination>
    </div>
  );
};
export default Catalog;
