import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import './CardInfoTitle.scss';

const CardInfoTitle = ({ id, title, quantity }) => {
  const isMobileDevice = useMediaQuery({ maxWidth: 1024 });
  return (
    <div className="cardInfoTitle">
      <h2>{title}</h2>
      {!isMobileDevice && (
        <p
          className={quantity !== 0 ? 'availableProduct' : 'unavailableProduct'}
        >
          {quantity !== 0 ? 'В наявності' : 'Немає в наявності'}
        </p>
      )}

      <p>
        Код товару: <span>{id}</span>{' '}
      </p>
    </div>
  );
};

CardInfoTitle.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CardInfoTitle;
