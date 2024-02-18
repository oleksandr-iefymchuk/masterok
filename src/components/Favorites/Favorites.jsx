import { useSelector } from 'react-redux';
import './Favorites.scss';
import ProductList from '../Shop/components/ProductList/ProductList';

const Favorites = () => {
  const favoriteItems = useSelector((state) => state.user.favoriteProducts);

  return (
    <section className="favoritesWrap">
      <h2>Список бажань</h2>
      <ProductList products={favoriteItems} />
    </section>
  );
};

export default Favorites;
