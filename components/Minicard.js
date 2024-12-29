import PropTypes from 'prop-types';

function Minicard(props) {
  return (
    <div className="Minicard">
      <img src={props.src} alt={props.alt || 'Minicard icon'} className="Minicard-icon" />
      <div className="Minicard-content">
        <h4 className="Minicard-content-title">{props.title}</h4>
        <p className="Minicard-content-text">{props.text}</p>
      </div>
    </div>
  );
}

Minicard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

Minicard.defaultProps = {
  alt: 'Minicard icon',
};

export default Minicard;
