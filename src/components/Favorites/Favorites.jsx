import { useSelector } from 'react-redux';
import './Favorites.scss';

import { breadcrumbLinks } from '../../constants';

import Pagination from '../Pagination/Pagination';
import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';

const Favorites = () => {
  const favoriteProductsId = useSelector(
    (state) => state.user.favoriteProducts,
  );
  const allProducts = useSelector((state) => state.products);

  const favoriteProducts = favoriteProductsId.map((favoriteItem) => {
    return allProducts.find((product) => product.id === favoriteItem.id);
  });

  return (
    <section className="favoritesWrap">
      <Breadcrumbs links={breadcrumbLinks} />
      <h2>Список бажань</h2>
      <p className="quantityProducts">
        Кількість товарів: {favoriteProducts.length}{' '}
      </p>
      <Pagination products={favoriteProducts} />
    </section>
  );
};

export default Favorites;
