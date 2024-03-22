import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './Basket.scss';
import BasketItem from './components/BasketItem';
import Button from '../../common/Button/Button';
import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';
import { breadcrumbLinks } from '../../constants';

const Basket = () => {
  const navigate = useNavigate();
  const handleOrder = () => navigate('/masterok/order');
  const handlecontinueShopping = () => navigate('/masterok');

  const basketProducts = useSelector((store) => store.user.basketProducts);

  const totalAmount = basketProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );

  return (
    <div className="basketWrap">
      <Breadcrumbs links={breadcrumbLinks} />
      <h2 className="basketTitle">Кошик</h2>
      <div className="basket">
        {basketProducts.length > 0 && (
          <Button
            buttonClassName="continueShoppingBtn"
            buttonText="Продовжити покупки"
            onClick={handlecontinueShopping}
          />
        )}

        <div className="basketList">
          {basketProducts.map((product) => (
            <BasketItem key={product.id} {...product} />
          ))}
        </div>
        {basketProducts.length > 0 && (
          <div className="totalAmountBlock">
            <p>
              Всього до сплати:{' '}
              <span className="totalAmount">
                {new Intl.NumberFormat(undefined, {
                  style: 'currency',
                  currency: 'UAH',
                }).format(totalAmount)}
              </span>
            </p>

            <Button
              buttonClassName="orderBtn"
              buttonText="Перейти до оформлення"
              onClick={handleOrder}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
