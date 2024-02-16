import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavBarItem = ({ link, name }) => {
  return (
    <li>
      <NavLink to={link}>{name}</NavLink>
    </li>
  );
};

NavBarItem.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string,
};

export default NavBarItem;
