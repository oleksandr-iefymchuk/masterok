import './MobileMenu.scss';
import { forwardRef, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonWrapper from '../../../../../../common/Button/Button';
import CatalogBatton from '../../../../../Catalog/components/CatalogBatton/CatalogBatton';
import { categories, foterNavLinks } from '../../../../../../constants';
import Logo from '../Logo/Logo';

const MobileMenu = forwardRef(
  ({ onClick, isShowMobileMenu, closeMenu }, ref) => {
    const categoryMenuRef = useRef(null);
    const navigate = useNavigate();

    const navigationHome = () => {
      navigate('/masterok');
      closeMenu();
    };
    const navigationFavorites = () => {
      navigate('/masterok/favorites');
      closeMenu();
    };

    const navigationStock = () => {
      navigate('/masterok/sale');
      closeMenu();
    };

    const favoriteProducts = useSelector(
      (store) => store.user.favoriteProducts,
    );

    return (
      <div
        className={`mobileMenu ${isShowMobileMenu ? 'show' : 'hide'}`}
        ref={ref}
      >
        <div className="mobileMenuNavigation">
          <div className="mobileMenuHeader">
            <div className="mobMenuLogo">
              <Logo onClick={navigationHome} />
              <h3>AquaZone</h3>
            </div>
            <ButtonWrapper
              buttonClassName="mobileMenuCloseBtn"
              icon="close"
              onClick={onClick}
            />
          </div>
          <div className="mobileUserBox">
            <ButtonWrapper
              buttonClassName="mobileBtnUser"
              buttonText="Кабінет"
              icon="user"
              onClick={() => {
                console.log('Login');
                closeMenu();
              }}
            />

            <ButtonWrapper
              buttonClassName="mobileBtnFavorite"
              imgClassName="favoritesImg"
              buttonText="Улюблене"
              icon="favorites"
              value={favoriteProducts.length}
              onClick={navigationFavorites}
            />
          </div>
          <CatalogBatton
            buttonClassName="mobileMenuCatalogBtn"
            svgWrapperClassName="svgWrapper"
            buttonText="Каталог товарів"
            categories={categories}
            refProp={categoryMenuRef}
            iconBurger="menu"
            closeMenu={closeMenu}
          />
          <ButtonWrapper
            buttonClassName="mobileBtnStock"
            buttonText="Акції"
            icon="sale"
            onClick={navigationStock}
          />
          <nav className="mobileNavBar">
            <ul>
              {foterNavLinks.map(({ link, name }) => (
                <li key={link} onClick={closeMenu}>
                  <Link to={link}>{name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="schedule">
          Пн-Пт з 09:00 до 18:00 <br />
          Сб-Нд - вихідний
        </p>
      </div>
    );
  },
);

MobileMenu.displayName = 'MobileMenu';

MobileMenu.propTypes = {
  props: PropTypes.array,
  onClick: PropTypes.func,
  isShowMobileMenu: PropTypes.bool,
  closeMenu: PropTypes.func,
};
export default MobileMenu;
