import PropTypes from 'prop-types';

import s from './Contacts.module.css';

const Contacts = ({ contactsConfig }) => {
  return (
    <ul className={s.list}>
      {contactsConfig.map(({ imgUrl, text, alt }, index) => (
        <li key={index} className={s.item}>
          <img src={imgUrl} alt={alt} />
          <a href={`tel:${text}`}>{text}</a>
        </li>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  contactsConfig: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Contacts;
