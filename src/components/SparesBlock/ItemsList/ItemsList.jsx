import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ItemsList.module.css';

import CardWithMenu from 'common/CardWithMenu';
import BrendsList from './BrendsList';
import Modal from 'common/Modal';

const ItemsList = ({ items, onEditItem, onDeleteItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  //   console.log(items);
  return (
    <ul className={s.listWrapper}>
      {items.map(({ itemTitle, imgUrl, brends }, index) => (
        <li key={index} className={s.item}>
          <div className={s.imgWrapper}>
            <img className={s.img} src={imgUrl} alt={itemTitle}></img>
          </div>
          <div className={s.itemMenu}>
            <p className={s.title}> {itemTitle}</p>
            <button onClick={openModal} className={s.button}>
              Смотреть бренды
            </button>
          </div>

          {/* <CardWithMenu
            onEdit={() => onEditItem(item)}
            onDelete={() => onDeleteItem(item)}
        /> */}

          {isModalOpen && (
            <Modal title={itemTitle} onClose={closeModal}>
              <BrendsList brends={brends} onClose={closeModal} />
            </Modal>
          )}
        </li>
      ))}
      {/* <ul>
  {spare.brends.map((brend, index) => (
    <li key={index}>{brend} </li>
    ))}
  </ul> */}
    </ul>
  );
};

ItemsList.propTypes = {};
ItemsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      imgUrl: PropTypes.string,
      itemTitle: PropTypes.string,
    }),
  ).isRequired,
  //   onEditItem: PropTypes.func.isRequired,
  //   onDeleteItem: PropTypes.func.isRequired,
};

export default ItemsList;
