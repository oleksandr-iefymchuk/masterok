import './Button.scss';
import PropTypes from 'prop-types';

const ButtonWrapper = ({
  disabled,
  className,
  type,
  buttonText,
  onClick,
  imgClassName,
  src,
  alt,
  value,
}) => {
  return (
    <div className="buttonBlock">
      <button
        disabled={disabled}
        className={className}
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
  className: PropTypes.string,
  type: PropTypes.string,
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
  imgClassName: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  value: PropTypes.number,
};

export default ButtonWrapper;
