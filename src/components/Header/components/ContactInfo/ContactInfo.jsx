import { NavLink } from 'react-router-dom';
import './ContactInfo.scss';
import Logo from './components/Logo/Logo';
import UserBox from './components/UserBox/UserBox';

const ContactInfo = () => {
  return (
    <div className="contactInfoWrapper">
      <div className="contactInfo">
        <NavLink to="/">
          <Logo />
        </NavLink>
        <p>Телефон: +38 (093) 93-04-137</p>
        <p>Електронна пошта: example@example.com</p>
        <UserBox />
      </div>
    </div>
  );
};

export default ContactInfo;
