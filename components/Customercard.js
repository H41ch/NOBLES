import PropTypes from 'prop-types';

function Customercard({ text, img, name }) {
  return (
    <div className="Customercard">
      <div className="Customercard-top">
        <p className="Customercard-top-text">{text}</p>
      </div>
      <div className="Customercard-bottom">
        <img src={img} alt="Customer profile" className="Customercard-bottom-profile" />
        <span className="Customercard-bottom-name">{name}</span>
      </div>
    </div>
  );
}

Customercard.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Customercard;
