import './Header.scss';
import ContactInfo from './components/ContactInfo/ContactInfo';
import Navigation from './components/Navigation/Navigation';

const Header = () => {
  return (
    <header className="headerWrapper">
      <ContactInfo />
      <Navigation />
    </header>
  );
};

export default Header;
