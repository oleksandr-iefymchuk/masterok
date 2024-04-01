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
    <>
      {buttonBlockClassName ? (
        <div className={buttonBlockClassName}>
          <button
            disabled={disabled}
            className={buttonClassName}
            type={type}
            onClick={onClick}
          >
            {icon && (
              <span className="svgWrapper">
                <SvgIcon
                  name={icon}
                  color={svgColor}
                  width={svgWidth}
                  height={svgHeight}
                />
              </span>
            )}
            {buttonText}
            {value > 0 && <span className="value">{value}</span>}
          </button>
        </div>
      ) : (
        <button
          disabled={disabled}
          className={buttonClassName}
          type={type}
          onClick={onClick}
        >
          {icon && (
            <span className="svgWrapper">
              <SvgIcon
                name={icon}
                color={svgColor}
                width={svgWidth}
                height={svgHeight}
              />
            </span>
          )}
          {buttonText}
          {value > 0 && <span className="value">{value}</span>}
        </button>
      )}
    </>
  );
};

ButtonWrapper.propTypes = {
  disabled: PropTypes.bool,
  buttonBlockClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
  imgClassName: PropTypes.string,
  type: PropTypes.string,
  buttonText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onClick: PropTypes.func,
  src: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  svgColor: PropTypes.string,
  svgWidth: PropTypes.string,
  svgHeight: PropTypes.string,
  alt: PropTypes.string,
  value: PropTypes.number,
};

export default ButtonWrapper;
