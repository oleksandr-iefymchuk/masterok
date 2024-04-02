import { useState, forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './CategoryMenu.scss';
import { useMediaQuery } from 'react-responsive';
import {
  selectCategory,
  selectSubcategory,
} from '../../../../store/appReduser/actionCreators';

import SvgIcon from '../../../../common/SvgIcon';
import ButtonWrapper from '../../../../common/Button/Button';

const CategoryMenu = forwardRef(
  ({ categories, categoryMenuClass, closeCategoryMenu, closeMenu }, ref) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const isMobileDevice = useMediaQuery({ maxWidth: 1024 });

    const handleCategoryClick = (category) => {
      dispatch(selectCategory(category.name));
      dispatch(selectSubcategory(null));
      navigate(`/masterok/catalog/${category.linkName}`);
      closeMenu();
    };

    const handleSubcategoryClick = (subcategory) => {
      dispatch(selectSubcategory(subcategory.name));
      dispatch(selectCategory(null));
      navigate(`/masterok/catalog/${subcategory.linkName}`);
      closeMenu();
    };

    const handleCategoryHover = (category) => {
      setHoveredCategory(category.name);
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setHoveredCategory(null);
      setIsHovered(false);
    };

    return (
      <div
        className={`categoryMenu ${categoryMenuClass ? 'show' : 'hide'}`}
        ref={ref}
        onMouseLeave={handleMouseLeave}
      >
        {isMobileDevice && (
          <div className="categoryHeader">
            <ButtonWrapper
              buttonClassName="categoryBtn"
              icon="arrowPrev"
              color="#008ec8"
              onClick={closeCategoryMenu}
            />
            <h3>Категорія товарів</h3>
            <ButtonWrapper
              buttonClassName="categoryBtn"
              icon="close"
              color="#008ec8"
              onClick={closeMenu}
            />
          </div>
        )}
        <div className="categoryList">
          {categories.map((categoryData, index) => (
            <div className="category" key={index}>
              <div
                className={`categoryItem ${
                  hoveredCategory === categoryData.name ? 'active' : ''
                }`}
                onClick={() => handleCategoryClick(categoryData)}
                onMouseEnter={() => handleCategoryHover(categoryData)}
              >
                {categoryData.name}
                {!isMobileDevice && (
                  <SvgIcon name="arrowNext" color="#008ec8"></SvgIcon>
                )}
              </div>
              {isMobileDevice && (
                <ButtonWrapper
                  buttonClassName="categoryBtn"
                  icon="arrowNext"
                  color="#008ec8"
                  onClick={() => handleCategoryHover(categoryData)}
                />
              )}
            </div>
          ))}
        </div>
        <div className={`subcategoryMenu ${isHovered ? 'show' : 'hide'}`}>
          {isMobileDevice && (
            <div className="subcategoryHeader">
              <ButtonWrapper
                buttonClassName="categoryBtn"
                icon="arrowPrev"
                color="#008ec8"
                onClick={() => setIsHovered(false)}
              />
              <h3>{hoveredCategory}</h3>
              <ButtonWrapper
                buttonClassName="categoryBtn"
                icon="close"
                color="#008ec8"
                onClick={closeMenu}
              />
            </div>
          )}
          <div className="subcategoryList">
            {categories
              .filter((category) => category.name === hoveredCategory)
              .map((category) =>
                category.subcategories.map((subcategory, subIndex) => (
                  <div
                    key={subIndex}
                    className="subcategoryItem"
                    onClick={() => handleSubcategoryClick(subcategory)}
                  >
                    {subcategory.name}
                  </div>
                )),
              )}
          </div>
        </div>
      </div>
    );
  },
);

CategoryMenu.displayName = 'CategoryMenu';

CategoryMenu.propTypes = {
  categories: PropTypes.array.isRequired,
  categoryMenuClass: PropTypes.bool,
  closeCategoryMenu: PropTypes.func,
  closeMenu: PropTypes.func,
};

export default CategoryMenu;
