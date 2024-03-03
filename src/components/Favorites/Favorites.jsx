import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Favorites.scss';

import ProductList from '../Shop/components/ProductList/ProductList';
import ButtonWrapper from '../../common/Button/Button';
import Pagination from '../Pagination/Pagination';

const Favorites = () => {
  const favoriteItems = useSelector((state) => state.user.favoriteProducts);

  const navigate = useNavigate();
  const returnCourseList = () => {
    navigate('/');
  };

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = favoriteItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(favoriteItems.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="favoritesWrap">
      <ButtonWrapper
        buttonBlockClassName="backButtonWrap"
        buttonClassName="backButton"
        buttonText="Назад"
        icon="back"
        svgColor="#000"
        onClick={returnCourseList}
      />
      <h2>Список бажань</h2>
      <p className="quantityProducts">
        Кількість товарів: {favoriteItems.length}{' '}
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
