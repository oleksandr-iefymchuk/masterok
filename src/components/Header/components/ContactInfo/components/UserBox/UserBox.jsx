import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './UserBox.scss';

import ButtonWrapper from '../../../../../../common/Button/Button';
import login from '../../../../../../assets/login.svg';
import favorites from '../../../../../../assets/favorites.svg';
import basket from '../../../../../../assets/basket.svg';

const UserBox = () => {
  const basketItems = useSelector((state) => state.basket.basketItems);
  console.log('basketItems:', basketItems);
  const navigate = useNavigate();
  const navigationBasket = () => navigate('/basket');

  return (
    <div className="userBox">
      <ButtonWrapper
        src={favorites}
        alt="Обране"
        onClick={() => console.log('Favorites')}
      />
      <ButtonWrapper
        src={login}
        alt="Логін"
        onClick={() => console.log('Login')}
      />
      <ButtonWrapper
        src={basket}
        alt="Кошик"
        value={basketItems.length}
        onClick={navigationBasket}
      />
    </div>
  );
};

export default UserBox;
