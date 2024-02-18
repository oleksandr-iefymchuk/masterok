import { useSelector } from 'react-redux';
import './Basket.scss';
import ProductList from '../Shop/components/ProductList/ProductList';

const Basket = () => {
  const basketProducts = useSelector((store) => store.user.basketProducts);
  console.log('basketProducts:', basketProducts);

  return (
    <div className="basketWrap">
      <h2>Кошик</h2>
      <ProductList products={basketProducts} />
      <div></div>
    </div>
  );
};

export default Basket;
