import { useSelector } from 'react-redux';
import './Favorites.scss';

import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';
import SvgIcon from '../../common/SvgIcon';
import SortList from '../../common/SortList/SortList';

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
      <Breadcrumbs />
      <h2>Список бажань</h2>
      <p className="quantityProducts">
        Кількість товарів: {favoriteProducts.length}{' '}
      </p>
      {favoriteProducts.length > 0 ? (
        <SortList products={favoriteProducts}></SortList>
      ) : (
        <div className="emptyBasket">
          <SvgIcon
            name="emptyFavorites"
            color="#a2a2a2"
            width="200px"
            height="200px"
          />
          <p>Список бажань пустий :(</p>
        </div>
      )}
    </section>
  );
};

export default Favorites;
