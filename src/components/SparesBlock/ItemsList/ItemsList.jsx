import { Route, useRouteMatch } from 'react-router-dom';

import BrendsList from './BrendsList';
import BrendsModal from './BrendsModal/BrendsModal';
import Item from './Item';
import Modal from 'common/Modal';
import PropTypes from 'prop-types';
import s from './ItemsList.module.css';

const ItemsList = ({
  items,
  onEditItem,
  onDeleteItem,
  editData,
  deleteData,
  editBrend,
  setSpares,
}) => {
  const match = useRouteMatch();

  // const itemsNormalize = [...items].map(
  //   ({ itemTitle = '', imgUrl, brends = [], id }) => {
  //     const brendsNormalize = Object.entries(brends).map(([id, brend = []]) => {
  //       if (typeof brend === 'string') {
  //         return { id, brend };
  //       }
  //       return { id, ...brend };
  //     });
  //     // console.log('brendsNormal', brendsNormalize);
  //     return { itemTitle, imgUrl, brends: [...brendsNormalize], id };
  //   },
  // );

  // console.log('itemsNorma', itemsNormalize);

  return (
    <>
      <ul className={s.listWrapper}>
        {items.map(({ itemTitle, imgUrl, id }) => {
          return (
            <Item
              key={id}
              id={id}
              itemTitle={itemTitle}
              imgUrl={imgUrl}
              editData={editData}
              deleteData={deleteData}
            />
          );
        })}
      </ul>

      <Route
        path={`${match.path}/:itemId`}
        render={() => <BrendsModal items={items} setSpares={setSpares} />}
      />
    </>
  );
};

ItemsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      imgUrl: PropTypes.string,
      itemTitle: PropTypes.string,
    }),
  ).isRequired,
  editData: PropTypes.func.isRequired,
  deleteData: PropTypes.func.isRequired,
};

export default ItemsList;
