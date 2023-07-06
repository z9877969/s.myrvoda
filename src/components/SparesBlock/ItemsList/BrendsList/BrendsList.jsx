import BigButton from 'common/BigButton/BigButton';
import PropTypes from 'prop-types';
import { addBrendApi } from 'services/api';
import s from './BrendsList.module.css';
import { useRouteMatch } from 'react-router-dom';
import { useState } from 'react';

const BrendItem = ({ brend }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <li
      key={brend}
      className={s.item}
      onClick={e => {
        if (e.target !== e.currentTarget) return;
        setIsMenuOpen(p => !p);
      }}
    >
      {brend}
      {isMenuOpen && (
        <>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </>
      )}
    </li>
  );
};

const BrendsList = ({ brends = [], onClose }) => {
  const match = useRouteMatch();
  const [newBrend, setNewBrend] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      addBrendApi({ pathname: match.url, brend: newBrend });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={s.listWrapper}>
      <ul className={s.list}>
        {brends.map((brend, index) => (
          <BrendItem brend={brend} />
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newBrend}
          onChange={e => setNewBrend(e.target.value)}
        />
        <button type="submit">Ok</button>
      </form>
      <BigButton onClick={onClose} text="Закрыть" />
    </div>
  );
};

BrendsList.propTypes = {
  brends: PropTypes.array.isRequired,
};

export default BrendsList;
