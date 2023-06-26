import PropTypes from 'prop-types';
import s from './AdvantagesList.module.css';

const AdvantagesList = ({ advantagesConfig }) => {
  return (
    <ul className={s.list}>
      {advantagesConfig.map(({ imgUrl, head, text, alt }, index) => (
        <li key={index} className={s.item}>
          <img className={s.image} src={imgUrl} alt={alt} />
          <p className={s.head}>{head}</p>
          <p className={s.descr}>{text}</p>
        </li>
      ))}
    </ul>
  );
};

AdvantagesList.propTypes = {
  advantagesConfig: PropTypes.arrayOf(
    PropTypes.shape({
      imgUrl: PropTypes.string,
      head: PropTypes.string,
      text: PropTypes.string,
      alt: PropTypes.string,
    }),
  ).isRequired,
};

export default AdvantagesList;
