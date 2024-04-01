import './MobileMenu.scss';
import { forwardRef, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonWrapper from '../../../../../../common/Button/Button';
import CatalogBatton from '../../../../../Catalog/components/CatalogBatton/CatalogBatton';
import { categories } from '../../../../../../constants';

const MobileMenu = forwardRef(
  ({ onClick, isShowMobileMenu, closeMenu }, ref) => {
    const categoryMenuRef = useRef(null);
    const navigate = useNavigate();
    const navigationFavorites = () => navigate('/masterok/favorites');

    const favoriteProducts = useSelector(
      (store) => store.user.favoriteProducts,
    );

    return (
      <div
        className={`mobileMenu ${isShowMobileMenu ? 'show' : 'hide'}`}
        ref={ref}
      >
        <div className="mobileMenuHeader">
          <h3>Меню</h3>
          <ButtonWrapper
            buttonClassName="mobileMenuCloseBtn"
            icon="close"
            onClick={onClick}
          />
        </div>

        {/* <ButtonWrapper
          buttonClassName="buttonBlock"
          imgClassName="favoritesImg"
          icon="favorites"
          value={favoriteProducts.length}
          onClick={navigationFavorites}
        /> */}

        <CatalogBatton
          buttonClassName="mobileMenuCatalogBtn"
          svgWrapperClassName="svgWrapper"
          buttonText="Каталог товарів"
          categories={categories}
          refProp={categoryMenuRef}
          iconBurger="menu"
          closeMenu={closeMenu}
        />
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
