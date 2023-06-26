import { useState } from 'react';
import PropTypes from 'prop-types';
import BigButton from 'common/BigButton';
import s from './Form.module.css';

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
      <div className={s.inner}>
        <form onSubmit={handleSubmit}>
          <input
            name="customerName"
            value={customerName}
            type="text"
            placeholder="Ваше имя*"
            required
            onChange={e => setCustomerName(e.target.value)}
          />
          <input
            name="email"
            value={email}
            type="email"
            placeholder="Ваш e-mail*"
            required
            onChange={e => setEmail(e.target.value)}
          />
          <input
            name="phone"
            value={phone}
            type="tel"
            placeholder="Номер телефона"
            onChange={e => setPhone(e.target.value)}
          />
          <input
            name="themeMessage"
            value={themeMessage}
            type="text"
            placeholder="Тема сообщения"
            onChange={e => setThemeMessage(e.target.value)}
          />
          <textarea
            name="message"
            value={message}
            type="text"
            placeholder="Сообщение"
            onChange={e => setMessage(e.target.value)}
          ></textarea>
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
    </div>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
