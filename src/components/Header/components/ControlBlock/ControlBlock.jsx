import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { searchProduct } from '../../../../store/appReduser/actionCreators';
// import CategoryMenu from '../../../Catalog/components/CategoryMenu/CategoryMenu';

import './ControlBlock.scss';
import { PLACEHOLDER_LABELS, BUTTON_LABELS } from '../../../../constants';

import Logo from './components/Logo/Logo';
import UserBox from './components/UserBox/UserBox';
import ButtonWrapper from '../../../../common/Button/Button';
import InputWrapper from '../../../../common/Input/Input';
import { categories } from '../../../../constants';
import CatalogBatton from '../../../Catalog/components/CatalogBatton/CatalogBatton';
import MobileMenu from './components/MobileMenu/MobileMenu';

const ControlBlock = () => {
  const { BUTTON_SEARCH, BUTTON_CATALOG } = BUTTON_LABELS;
  const { SEARCH_PLACEHOLDER } = PLACEHOLDER_LABELS;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categoryMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const navigationHome = () => navigate('/masterok');
  const navigationSearchList = () => navigate('/masterok/search');

  const [searchValue, setSearchValue] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const isMobileDevice = useMediaQuery({ maxWidth: 1024 });

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const handleSearchSubmit = () => {
    dispatch(searchProduct(searchValue));
    navigationSearchList();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest('.mobileMenuButton')
      ) {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuRef]);

  const toggleMobileMenu = () => {
    setShowMobileMenu((prevState) => !prevState);
  };

  return (
    <div className="controlBlockWrapper">
      <div className="controlBlock">
        <Logo onClick={navigationHome} />

        {isMobileDevice ? (
          <ButtonWrapper
            buttonClassName="mobileMenuButton"
            icon={!showMobileMenu ? 'burger' : 'close'}
            onClick={toggleMobileMenu}
          />
        ) : (
          <CatalogBatton
            buttonClassName="catalogButton"
            buttonText={BUTTON_CATALOG}
            categories={categories}
            refProp={categoryMenuRef}
            isShowButtonText={!isMobileDevice}
            iconBurger="menu"
          />
        )}

        <MobileMenu
          isShowMobileMenu={showMobileMenu}
          ref={mobileMenuRef}
          onClick={toggleMobileMenu}
          closeMenu={toggleMobileMenu}
        />

        <div className="searchBar">
          <InputWrapper
            placeholder={SEARCH_PLACEHOLDER}
            type="text"
            value={searchValue}
            onChangeInput={handleSearchChange}
          />
          <ButtonWrapper
            disabled={searchValue.trim() === ''}
            buttonClassName="searchButton"
            buttonText={!isMobileDevice && BUTTON_SEARCH}
            icon={isMobileDevice && 'search'}
            onClick={handleSearchSubmit}
          />
        </div>
        <UserBox />
      </div>
    </div>
  );
};

export default ControlBlock;
