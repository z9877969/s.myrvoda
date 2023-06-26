import PropTypes from 'prop-types';
import s from './Block.module.css';

const Block = ({ children }) => {
  return <div className={s.block}>{children}</div>;
};

Block.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Block;
