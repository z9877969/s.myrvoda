import { Route, useHistory, useRouteMatch } from 'react-router-dom';

import BrendsList from './BrendsList';
import CardWithMenu from 'common/CardWithMenu';
import Modal from 'common/Modal';
import PropTypes from 'prop-types';
import { editItemApi } from 'services/api';
import s from './ItemsList.module.css';
import { useState } from 'react';

// import { useState } from 'react';

const Item = ({ itemTitle, imgUrl, brends, id, editData }) => {
  const [isAuth] = useState(true);
  const [editedData, setEditedData] = useState({
    imgUrl: null, // url
    itemTitle: null, // title
  });
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const match = useRouteMatch();
  const history = useHistory();
  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);
  const openModal = () => history.push({ pathname: `${match.url}/${id}` });
  const handleEditData = () => {
    !editedData.imgUrl
      ? setEditedData({ imgUrl, itemTitle })
      : editData(id, editedData).finally(() =>
          setEditedData({ itemTitle: null, imgUrl: null }),
        );
  };

  return (
    <li key={id} className={s.item}>
      <div className={s.imgWrapper}>
        {!editedData.imgUrl ? (
          <img className={s.img} src={imgUrl} alt={itemTitle}></img>
        ) : (
          <input
            type="text"
            value={editedData.imgUrl}
            name="imgUrl"
            onChange={e =>
              setEditedData(p => ({ ...p, [e.target.name]: e.target.value }))
            }
          />
        )}
      </div>
      <div className={s.itemMenu}>
        {!editedData.itemTitle ? (
          <p className={s.title}> {itemTitle}</p>
        ) : (
          <input
            type="text"
            value={editedData.itemTitle}
            name="itemTitle"
            onChange={e =>
              setEditedData(p => ({ ...p, [e.target.name]: e.target.value }))
            }
          />
        )}
        <button onClick={openModal} className={s.button}>
          Смотреть бренды
        </button>
      </div>

      {isAuth && (
        <CardWithMenu
          isEditing={editedData.itemTitle}
          onEdit={handleEditData}
          // onDelete={() => onDeleteItem(item)}
        />
      )}

      {/* {isModalOpen && (
        <Modal title={itemTitle} onClose={closeModal}>
          <BrendsList brends={brends} onClose={closeModal} />
        </Modal>
      )} */}
    </li>
  );
};

const ItemsList = ({ items, onEditItem, onDeleteItem, editData }) => {
  const match = useRouteMatch();
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);
  //   console.log(items);
  return (
    <>
      <ul className={s.listWrapper}>
        {items.map(({ itemTitle, imgUrl, brends, id }, index) => (
          <Item
            key={id}
            id={id}
            itemTitle={itemTitle}
            imgUrl={imgUrl}
            brends={brends}
            index={index}
            editData={editData}
          />
        ))}
        {/* <ul>
  {spare.brends.map((brend, index) => (
    <li key={index}>{brend} </li>
    ))}
  </ul> */}
      </ul>
      <Route
        path={match.path + '/:itemId'}
        render={routerProps => {
          const { match, history } = routerProps;
          const { itemId } = match.params;
          const { itemTitle, brends } = items.find(el => el.id === itemId);

          const closeModal = () => {
            history.goBack();
          };

          return (
            <Modal title={itemTitle} onClose={closeModal}>
              <BrendsList brends={brends} onClose={closeModal} />
            </Modal>
          );
        }}
      />
    </>
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
