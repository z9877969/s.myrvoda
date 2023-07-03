import PropTypes from 'prop-types';
import dot from 'images/serv-auto-dotlist.svg';
import s from './OptionsList.module.css';

const OptionsList = ({ config }) => {
  console.log(config);
  return (
    <div className={s.blockWrapper}>
      <ul className={s.list}>
        {config.map(({ text }, index) => (
          <li key={index} className={s.item}>
            <img src={dot} alt="dot"></img>
            <div className={s.text}>{text}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

OptionsList.propTypes = {
  config: PropTypes.arrayOf(
    PropTypes.shape({
      imgUrl: PropTypes.string,
      head: PropTypes.string,
      text: PropTypes.string,
      alt: PropTypes.string,
    }),
  ).isRequired,
};

export default OptionsList;
