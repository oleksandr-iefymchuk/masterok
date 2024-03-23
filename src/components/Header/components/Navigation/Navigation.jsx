import { useState } from 'react';
import './Navigation.scss';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

import InputWrapper from '../../../../common/Input/Input';
import ButtonWrapper from '../../../../common/Button/Button';

import {
  PLACEHOLDER_LABELS,
  BUTTON_LABELS,
  navbarLinks,
} from '../../../../constants';

import { useDispatch } from 'react-redux';
import { searchProduct } from '../../../../store/searchProduct/actionCreators';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const { SEARCH_PLACEHOLDER } = PLACEHOLDER_LABELS;
  const { BUTTON_SEARCH, BUTTON_CATALOG } = BUTTON_LABELS;
  const isMobileDevice = useMediaQuery({ maxWidth: 768 });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchListNav = () => navigate('/masterok/search');

  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const handleSearchSubmit = () => {
    dispatch(searchProduct(searchValue));
    searchListNav();
  };

  return (
    <div className="navWrapper">
      <div className="controlPanel">
        <ButtonWrapper
          buttonClassName="catalogButton"
          icon="burger"
          buttonText={!isMobileDevice ? BUTTON_CATALOG : ''}
          onClick={() => console.log('Каталог товарів')}
        />

        <nav className="navBar">
          <ul>
            {navbarLinks.map(({ link, name }) => (
              <li key={link}>
                <Link to={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
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
            buttonText={BUTTON_SEARCH}
            onClick={handleSearchSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
