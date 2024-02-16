import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../../../store/basket/actionCreators';

import './CardProduct.scss';
import ButtonWrapper from '../../../../common/Button/Button';

const CardProduct = ({ id, image, alt, title, price, availability }) => {
  const dispatch = useDispatch();

  const handleAddToBasket = () => {
    const newItem = { id, title, price };
    dispatch(addToBasket(newItem));
  };

  return (
    <div className="cardProduct">
      <Link to={`/${id}`}>
        <img src={image} alt={alt} />
      </Link>
      <div className="cardProductInfo">
        <p>Код: {id}</p>
        <Link to={`/${id}`}>
          <h3>{title}</h3>
        </Link>
        <p>{availability}</p>
        <div className="cardProductPrice">
          {new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency: 'UAH',
          }).format(price)}
        </div>
        <ButtonWrapper
          className="buyButton"
          buttonText="Купити"
          onClick={handleAddToBasket}
        />
      </div>
    </div>
  );
};

CardProduct.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  availability: PropTypes.string,
};

export default CardProduct;
