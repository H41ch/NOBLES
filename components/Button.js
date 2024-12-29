import PropTypes from 'prop-types';

function Button({ text, onClick, type }) {
  return (
    <button className="button" onClick={onClick} type={type}>
      <span className="button-text">{text}</span>
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  onClick: () => {},
  type: 'button',
};

export default Button;
