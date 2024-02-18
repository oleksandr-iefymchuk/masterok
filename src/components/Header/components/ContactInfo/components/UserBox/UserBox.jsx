import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './UserBox.scss';

import ButtonWrapper from '../../../../../../common/Button/Button';
import login from '../../../../../../assets/login.svg';
import favorites from '../../../../../../assets/favorites.svg';
import basket from '../../../../../../assets/basket.svg';

const UserBox = () => {
  const basketProducts = useSelector((store) => store.user.basketProducts);
  const favoriteProducts = useSelector((store) => store.user.favoriteProducts);

  const navigate = useNavigate();
  const navigationBasket = () => navigate('/basket');
  const navigationFavorites = () => navigate('/favorites');

  return (
    <div className="userBox">
      <ButtonWrapper
        buttonBlockClassName="buttonBlock"
        imgClassName="favoritesImg"
        src={favorites}
        alt="Обране"
        value={favoriteProducts.length}
        onClick={navigationFavorites}
      />
      <ButtonWrapper
        buttonBlockClassName="buttonBlock"
        src={login}
        alt="Логін"
        onClick={() => console.log('Login')}
      />
      <ButtonWrapper
        buttonBlockClassName="buttonBlock"
        src={basket}
        alt="Кошик"
        value={basketProducts.length}
        onClick={navigationBasket}
      />
    </div>
  );
};

export default UserBox;
