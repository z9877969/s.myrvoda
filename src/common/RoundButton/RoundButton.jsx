import PropTypes from 'prop-types';

import s from './RoundButton.module.css';

const RoundButton = props => {
  const { onClick = () => {}, type = 'button' } = props;

  return <button type={type} onClick={onClick} className={s.button}></button>;
};

RoundButton.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default RoundButton;
