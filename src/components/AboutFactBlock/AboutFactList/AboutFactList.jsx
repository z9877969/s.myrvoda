import PropTypes from 'prop-types';
import s from './AboutFactList.module.css';

const AboutFactList = ({ aboutFactConfig }) => {
  return (
    <ul className={s.list}>
      {aboutFactConfig.map(({ imgUrl, text, alt }, index) => (
        <li key={index}>
          <div className={s.item}>
            <img className={s.image} src={imgUrl} alt={alt} />
            <p className={s.count}>{index + 1}</p>
            <p className={s.descr}>{text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

AboutFactList.propTypes = {
  aboutFactConfig: PropTypes.arrayOf(
    PropTypes.shape({
      imgUrl: PropTypes.string,
      text: PropTypes.string,
      alt: PropTypes.string,
    }),
  ).isRequired,
};

export default AboutFactList;
