import { useSelector } from 'react-redux';
import './Basket.scss';
import BasketItem from './components/BasketItem';

const Basket = () => {
  const basketProducts = useSelector((store) => store.user.basketProducts);

  return (
    <div className="basketWrap">
      <h2>Кошик</h2>
      <div className="basketList">
        {basketProducts.map((product) => (
          <BasketItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Basket;
