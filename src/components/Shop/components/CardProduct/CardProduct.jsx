import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToBasket,
  addToFavorites,
  removeFromFavorites,
} from '../../../../store/user/actionCreators';

import './CardProduct.scss';
import ButtonWrapper from '../../../../common/Button/Button';
import favoritesImg from '../../../../assets/favorites.svg';
import favoritesFilledImg from '../../../../assets/favoritesFilled.svg';

const CardProduct = ({ id, image, alt, title, price, availability }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((store) => store.user.favoriteProducts);

  const isFavorite = favorites.some((item) => item.id === id);

  const handleAddToBasket = () => {
    const newItem = { id, image, alt, title, price, availability };
    dispatch(addToBasket(newItem));
  };

  const handleAddToFavotites = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites({ id }));
    } else {
      dispatch(addToFavorites({ id, image, alt, title, price, availability }));
    }
  };

  return (
    <div className="cardProduct">
      <ButtonWrapper
        buttonBlockClassName="favoritesBtnWrap"
        buttonClassName="favoritesButton"
        src={isFavorite ? favoritesFilledImg : favoritesImg}
        onClick={handleAddToFavotites}
      />
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

          <ButtonWrapper
            buttonClassName="buyButton"
            buttonText="Купити"
            onClick={handleAddToBasket}
          />
        </div>
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
