import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Catalog.scss';
import { categories } from '../../constants';
import SortList from '../../common/SortList/SortList';

const Catalog = () => {
  const activeCategory = useSelector((store) => store.app.selectedCategory);
  const activeSubcategory = useSelector(
    (store) => store.app.selectedSubcategory,
  );

  const [filteredProducts, setFilteredProducts] = useState([]);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    if (activeCategory) {
      const selectedCategory = categories.find(
        (cat) => cat.name === activeCategory,
      );
      if (selectedCategory) {
        let filteredByCategory = products.filter((product) =>
          selectedCategory.subcategories.some(
            (subcat) => subcat.name === product.subcategory,
          ),
        );
        setFilteredProducts(filteredByCategory);
      }
    }

    if (activeSubcategory) {
      let filteredProducts = products.filter(
        (product) => product.subcategory === activeSubcategory,
      );
      setFilteredProducts(filteredProducts);
    }
  }, [activeCategory, activeSubcategory, products]);

  return (
    <div className="catalogWrapper">
      <h2>{activeCategory ? activeCategory : activeSubcategory}</h2>
      <SortList products={filteredProducts}></SortList>
    </div>
  );
};
export default Catalog;
