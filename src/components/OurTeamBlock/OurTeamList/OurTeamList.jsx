import s from './OurTeamList.module.css';
import PropTypes from 'prop-types';

const OurTeamList = ({ ourTeamConfig }) => {
  return (
    <ul className={s.list}>
      {ourTeamConfig.map(({ imgUrl, name, position, alt }, index) => (
        <li key={index} className={s.item}>
          <img className={s.image} src={imgUrl} alt={alt} />
          <p className={s.name}>{name}</p>
          <p className={s.position}>{position}</p>
        </li>
      ))}
    </ul>
  );
};

OurTeamList.propTypes = {
  ourTeamConfig: PropTypes.arrayOf(
    PropTypes.shape({
      imgUrl: PropTypes.string,
      name: PropTypes.string,
      position: PropTypes.string,
      alt: PropTypes.string,
    }),
  ).isRequired,
};

export default OurTeamList;
