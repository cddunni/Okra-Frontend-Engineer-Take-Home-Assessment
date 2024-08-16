import "./button.css"
import Spinner from "../Spinner";
import PropTypes from 'prop-types';

const Button = ({
  btnText,
  onClick,
  theme = "primary",
  disabled = false,
  type,
  loading,
  variant
}) => {

  const handleClick = (e) => {
    e.preventDefault()
    onClick && onClick()
  }
  return (
    <button
      role="button"
      className={`cc-button ${loading ? 'cc-button--loading' : `cc-button--${theme}`} ${disabled && "cursor-not-allowed"} ${theme !== 'transparent' ? 'shadow-btnShadowOne': ''} ${variant}`}
      onClick={handleClick}
      disabled={disabled || loading}
      type={type}
    >
      {loading && <Spinner containerVariant='mr-2'/>} {btnText}
    </button>
  )
}

export default Button;
Button.propTypes = {
  btnText: PropTypes.string,
  onClick: PropTypes.func,
  theme: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  loading: PropTypes.bool,
  variant: PropTypes.string
};
