import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './UserBox.scss';

import Button from '../../../../../../common/Button/Button';

const UserBox = () => {
  const basketProducts = useSelector((store) => store.user.basketProducts);
  const favoriteProducts = useSelector((store) => store.user.favoriteProducts);

  const navigate = useNavigate();
  const navigationBasket = () => navigate('/masterok/basket');
  const navigationFavorites = () => navigate('/masterok/favorites');

  return (
    <div className="userBox">
      <Button
        buttonBlockClassName="buttonBlock"
        imgClassName="favoritesImg"
        icon="favorites"
        value={favoriteProducts.length}
        onClick={navigationFavorites}
      />
      <Button
        buttonBlockClassName="buttonBlock"
        icon="user"
        onClick={() => console.log('Login')}
      />
      <Button
        buttonBlockClassName="buttonBlock"
        icon="basket"
        value={basketProducts.length}
        onClick={navigationBasket}
      />
    </div>
  );
};

export default UserBox;
