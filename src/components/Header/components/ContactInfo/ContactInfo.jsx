import { NavLink } from 'react-router-dom';
import './ContactInfo.scss';
import Logo from './components/Logo/Logo';
import UserBox from './components/UserBox/UserBox';
import ButtonWrapper from '../../../../common/Button/Button';

const ContactInfo = () => {
  return (
    <div className="contactInfoWrapper">
      <div className="contactInfo">
        <NavLink to="/masterok">
          <Logo />
        </NavLink>
        <div className="contactIcons">
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
        </div>

        <div className="contactText">
          <p>
            <span>Телефон:</span> +38 (093) 93-04-137
          </p>
          <p>
            <span>E-mail:</span> masterok.mk24@gmail.com
          </p>
        </div>
        <UserBox />
      </div>
    </div>
  );
};

export default ContactInfo;
