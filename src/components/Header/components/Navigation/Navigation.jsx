import { useState } from 'react';
import './Navigation.scss';

import InputWrapper from '../../../../common/Input/Input';
import ButtonWrapper from '../../../../common/Button/Button';
import NavBarItem from './components/NavBarItem/NavBarItem';

import {
  PLACEHOLDER_LABELS,
  BUTTON_LABELS,
  navbarLinks,
} from '../../../../constants';

import { useDispatch } from 'react-redux';
import { searchProduct } from '../../../../store/searchProduct/actionCreators';

const Navigation = () => {
  const { SEARCH_PLACEHOLDER } = PLACEHOLDER_LABELS;
  const { BUTTON_SEARCH, BUTTON_CATALOG } = BUTTON_LABELS;

  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);

    if (!value.trim()) {
      dispatch(searchProduct(''));
    }
  };

  const handleSearchSubmit = () => {
    dispatch(searchProduct(searchValue));
  };

  return (
    <div className="navWrapper">
      <div className="controlPanel">
        <ButtonWrapper
          buttonClassName="catalogButton"
          icon="burger"
          buttonText={BUTTON_CATALOG}
          onClick={() => console.log('Каталог товарів')}
        />

        <nav className="navBar">
          <ul>
            {navbarLinks.map((item) => (
              <NavBarItem key={item.link} {...item} />
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
