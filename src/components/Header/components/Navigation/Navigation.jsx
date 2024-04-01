import './Navigation.scss';
import { Link } from 'react-router-dom';

import { navbarLinks } from '../../../../constants';

const Navigation = () => {
  return (
    <div className="navWrapper">
      <div className="controlPanel">
        <nav className="navBar">
          <ul>
            {navbarLinks.map(({ link, name }) => (
              <li key={link}>
                <Link to={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* <div className="contactIcons">
          <ButtonWrapper
            buttonClassName="phoneButton"
            icon="phone"
            onClick={() => (window.location.href = 'tel:+380939304137')}
          />
          <ButtonWrapper
            buttonClassName="emailButton"
            icon="email"
            onClick={() => (window.location.href = 'tel:+380939304137')}
          />
        </div> */}

        <div className="contacts">
          <p>
            <span>Телефон:</span> +38 (093) 93-04-137
          </p>
          <p>
            <span>E-mail:</span> masterok.mk24@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
