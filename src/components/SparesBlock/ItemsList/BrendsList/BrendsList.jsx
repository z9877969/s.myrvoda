import BigButton from 'common/BigButton/BigButton';
import s from './BrendsList.module.css';
import PropTypes from 'prop-types';

const BrendsList = ({ brends, onClose }) => {
  return (
    <div className={s.listWrapper}>
      <ul className={s.list}>
        {brends.map((brend, index) => (
          <li key={index} className={s.item}>
            {brend}
          </li>
        ))}
      </ul>

      <BigButton onClick={onClose} text="Закрыть" />
    </div>
  );
};

BrendsList.propTypes = {
  brends: PropTypes.array.isRequired,
};

export default BrendsList;
