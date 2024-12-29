import PropTypes from 'prop-types';

function Impactcard({ img, title, description }) {
  return (
    <div className="Impactcard">
      <div className="Impactcard-left">
        <img src={img} alt={title} className="Impactcard-left-img" />
      </div>
      <div className="Impactcard-right">
        <div className="Impactcard-right-title">{title}</div>
        <div className="Impactcard-right-description">{description}</div>
      </div>
    </div>
  );
}

Impactcard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Impactcard;
