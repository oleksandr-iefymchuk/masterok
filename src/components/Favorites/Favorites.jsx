import { useState } from 'react';
import { useSelector } from 'react-redux';
import './Favorites.scss';

import ProductList from '../Shop/components/ProductList/ProductList';
import Pagination from '../Pagination/Pagination';
import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';
import { breadcrumbLinks } from '../../constants';

const Favorites = () => {
  const favoriteItemsId = useSelector((state) => state.user.favoriteProducts);
  const allProducts = useSelector((state) => state.products);

  const favoriteProducts = favoriteItemsId.map((favoriteItem) => {
    return allProducts.find((product) => product.id === favoriteItem.id);
  });

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = favoriteProducts.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const totalPages = Math.ceil(favoriteProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="favoritesWrap">
      <Breadcrumbs links={breadcrumbLinks} />
      <h2>Список бажань</h2>
      <p className="quantityProducts">
        Кількість товарів: {favoriteProducts.length}{' '}
      </p>
      <ProductList className="products" products={currentItems} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
};

export default Favorites;
