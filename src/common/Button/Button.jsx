import './Button.scss';
import PropTypes from 'prop-types';

const ButtonWrapper = ({
  disabled,
  buttonBlockClassName,
  buttonClassName,
  imgClassName,
  type,
  buttonText,
  onClick,
  src,
  alt,
  value,
}) => {
  return (
    <div className={buttonBlockClassName}>
      <button
        disabled={disabled}
        className={buttonClassName}
        type={type}
        onClick={onClick}
      >
        {src && <img className={imgClassName} src={src} alt={alt} />}
        {buttonText}
      </button>
      {value > 0 && <span>{value}</span>}
    </div>
  );
};

ButtonWrapper.propTypes = {
  disabled: PropTypes.bool,
  buttonBlockClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
  imgClassName: PropTypes.string,
  type: PropTypes.string,
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
  src: PropTypes.string,
  alt: PropTypes.string,
  value: PropTypes.number,
};

export default ButtonWrapper;
