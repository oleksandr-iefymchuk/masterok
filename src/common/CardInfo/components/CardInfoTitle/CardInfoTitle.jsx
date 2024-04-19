import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import './CardInfoTitle.scss';
import { messengers } from '../../../../constants';

import ButtonWrapper from '../../../Button/Button';

const CardInfoTitle = ({ id, title, quantity }) => {
  const isMobileDevice = useMediaQuery({ maxWidth: 1024 });
  const [isOpen, setIsOpen] = useState(false);
  const url = window.location.href;

  const togglePopup = () => {
    if (!isOpen) {
      document.body.classList.add('mobileMenuOpen');
    } else {
      document.body.classList.remove('mobileMenuOpen');
    }
    setIsOpen(!isOpen);
  };

  const openNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="cardInfoTitle">
      <div className="title">
        <h2>{title}</h2>
        {isOpen && (
          <Fragment>
            <div className="shareOverlay" onClick={togglePopup}></div>
            <div className="sharePopup">
              <div className="sharePopupHeader">
                <h3>Поділитися</h3>
                <ButtonWrapper
                  buttonClassName="closePopupBtn"
                  icon="close"
                  onClick={togglePopup}
                />
              </div>
              {messengers(url).map((messenger, index) => (
                <ButtonWrapper
                  buttonClassName="messengerBtn"
                  icon={messenger.icon}
                  key={index}
                  onClick={() => openNewTab(messenger.link)}
                />
              ))}
            </div>
          </Fragment>
        )}
      </div>
      <div className="productCode">
        {!isMobileDevice && (
          <p
            className={
              quantity !== 0 ? 'availableProduct' : 'unavailableProduct'
            }
          >
            {quantity !== 0 ? 'В наявності' : 'Немає в наявності'}
          </p>
        )}
        <p>
          Код товару: <span>{id}</span>{' '}
        </p>
        <ButtonWrapper
          buttonClassName="shareButton"
          icon="share"
          onClick={togglePopup}
        />
      </div>
    </div>
  );
};

CardInfoTitle.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CardInfoTitle;
