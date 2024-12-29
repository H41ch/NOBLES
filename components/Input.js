import PropTypes from 'prop-types';

function Input({ type, name, id, className, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  type: 'text',
  name: '',
  id: '',
  className: 'Input',
  placeholder: '',
  value: '',
  onChange: () => {},
};

export default Input;
