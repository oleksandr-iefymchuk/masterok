import { useState, useEffect } from 'react';
import ButtonWrapper from '../../../../common/Button/Button';
import CategoryMenu from '../CategoryMenu/CategoryMenu';
import './CatalogBatton.scss';
import PropTypes from 'prop-types';

const CatalogBatton = ({
  categories,
  refProp,
  buttonText,
  buttonClassName,
  svgWrapperClassName,
  iconBurger,
  closeMenu,
}) => {
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        refProp.current &&
        !refProp.current.contains(event.target) &&
        !event.target.closest('.catalogButton')
      ) {
        setShowCategoryMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [refProp]);

  const toggleCategoryMenu = () => {
    setShowCategoryMenu((prevState) => !prevState);
  };

  return (
    <div className="catalogButtonWrap">
      <ButtonWrapper
        buttonClassName={buttonClassName}
        svgWrapperClassName={svgWrapperClassName}
        icon={!showCategoryMenu ? iconBurger : 'close'}
        onClick={toggleCategoryMenu}
        buttonText={buttonText}
      />
      <CategoryMenu
        closeMenu={closeMenu ? closeMenu : toggleCategoryMenu}
        categoryMenuClass={showCategoryMenu}
        closeCategoryMenu={toggleCategoryMenu}
        categories={categories}
        ref={refProp}
      />
    </div>
  );
};

CatalogBatton.propTypes = {
  categories: PropTypes.array.isRequired,
  refProp: PropTypes.object.isRequired,
  buttonText: PropTypes.string.isRequired,
  iconBurger: PropTypes.string,
  buttonClassName: PropTypes.string,
  svgWrapperClassName: PropTypes.string,
  closeMenu: PropTypes.func,
};

export default CatalogBatton;
