import { useSelector } from 'react-redux';
import './Basket.scss';

const Basket = () => {
  const searchValue = useSelector((state) => state.basket.basketItems);
  console.log('searchValue:', searchValue);

  return (
    <div className="cartWrapper">
      <h2>Кошик</h2>
      <div className="heading">
        <div className="badge">1</div>
      </div>
      <div></div>
    </div>
  );
};

export default Basket;
