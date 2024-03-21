import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './BasketItem.scss';

import { updateQuantityThunk } from '../../../store/thunk';
import { removeFromBasket } from '../../../store/user/actionCreators';

import ButtonWrapper from '../../../common/Button/Button';

const BasketItem = ({ id, image, alt, title, price, quantity }) => {
  const dispatch = useDispatch();
  const basketProducts = useSelector((state) => state.user.basketProducts);
  const products = useSelector((state) => state.products);
  const currentproduct = products.find((product) => product.id === id);

  const totalPrice = price * quantity;

  const handleRemoveFromBasket = (update) => {
    const currentBasketproduct = basketProducts.find((item) => item.id === id);
    const quantityToRemove = currentBasketproduct
      ? currentBasketproduct.quantity
      : 0;
    console.log('quantityToRemove:', quantityToRemove);
    dispatch(updateQuantityThunk(id, quantityToRemove, update));
    dispatch(removeFromBasket(id));
  };

  const handleUpdateQuantity = (update) => {
    dispatch(updateQuantityThunk(id, 1, update));
  };

  return (
    <div className="basketItem">
      <div className="basketItemInfo">
        <img src={image} alt={alt} />
        <p>{title}</p>
      </div>
      <div className="basketCostBlock">
        <div className="quantityControlBtn">
          <ButtonWrapper
            buttonClassName={
              quantity <= 1
                ? 'disabledBtnIncreaseQuantity'
                : 'activeBtnIncreaseQuantity'
            }
            disabled={quantity <= 1}
            onClick={() => handleUpdateQuantity('decrease')}
            icon="minus"
          />
          <p className="quantity">{quantity}</p>
          <ButtonWrapper
            buttonClassName={
              currentproduct.quantity <= 0
                ? 'disabledBtnIncreaseQuantity'
                : 'activeBtnIncreaseQuantity'
            }
            disabled={currentproduct.quantity <= 0}
            onClick={() => handleUpdateQuantity('increase')}
            icon="plus"
          />
        </div>

        <p>
          {new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency: 'UAH',
          }).format(totalPrice)}
        </p>

        <ButtonWrapper
          buttonClassName="deleteBtn"
          onClick={() => handleRemoveFromBasket('decrease')}
          icon="delete"
        />
      </div>
    </div>
  );
};

BasketItem.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};

export default BasketItem;
