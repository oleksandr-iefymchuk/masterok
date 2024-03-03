import './Button.scss';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';

const ButtonWrapper = ({
  disabled,
  buttonBlockClassName,
  buttonClassName,
  type,
  buttonText,
  onClick,
  icon,
  svgColor,
  svgWidth,
  svgHeight,
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
        {icon && (
          <SvgIcon
            name={icon}
            color={svgColor}
            width={svgWidth}
            height={svgHeight}
          />
        )}
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
  icon: PropTypes.string,
  svgColor: PropTypes.string,
  svgWidth: PropTypes.string,
  svgHeight: PropTypes.string,
  alt: PropTypes.string,
  value: PropTypes.number,
};

export default ButtonWrapper;
