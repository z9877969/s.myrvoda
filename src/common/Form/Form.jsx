import BigButton from 'common/BigButton';
import PropTypes from 'prop-types';
import s from './Form.module.css';
import { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [themeMessage, setThemeMessage] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ customerName, phone, email, themeMessage, message });
    reset();
  };

  const reset = () => {
    setCustomerName('');
    setEmail('');
    setPhone('');
    setThemeMessage('');
    setMessage('');
  };

  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit} className={s.inner}>
        <label>
          <p className={s.label}>Ваше Имя*</p>
          <input
            name="customerName"
            value={customerName}
            type="text"
            placeholder="Ваше Имя*"
            required
            onChange={e => setCustomerName(e.target.value)}
          />
        </label>
        <label>
          <p className={s.label}>E-mail*</p>
          <input
            name="email"
            value={email}
            type="email"
            placeholder="Ваш e-mail*"
            required
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label>
          <p className={s.label}>Телефон (не обязательно)</p>
          <input
            name="phone"
            value={phone}
            type="tel"
            placeholder="Номер телефона"
            onChange={e => setPhone(e.target.value)}
          />
        </label>
        <label>
          <p className={s.label}>Тема обращения (не обязательно)</p>
          <input
            name="themeMessage"
            value={themeMessage}
            type="text"
            placeholder="Тема сообщения"
            onChange={e => setThemeMessage(e.target.value)}
          />
        </label>
        <label className={s.labelTextarea}>
          <p className={s.label}>Сообщение</p>
          <textarea
            className={s.textarea}
            name="message"
            value={message}
            type="text"
            placeholder="Сообщение"
            onChange={e => setMessage(e.target.value)}
          ></textarea>
        </label>
        {/* <input
            name="message"
            value={message}
            type="text"
            placeholder="Сообщение"
            onChange={e => setMessage(e.target.value)}
          /> */}

        <BigButton type="submit" text="Отправить" />

        <a href="http://">Ознакомиться с условиями конфиденциальности</a>
      </form>
    </div>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
