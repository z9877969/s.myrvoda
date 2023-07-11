import {
  useHistory,
  useRouteMatch,
} from 'react-router-dom/cjs/react-router-dom.min';

import BrendsList from '../BrendsList/BrendsList';
import Modal from 'common/Modal/Modal';
import PropTypes from 'prop-types';
import React from 'react';

const BrendsModal = ({ items, setSpares }) => {
  const match = useRouteMatch();
  const history = useHistory();
  const { itemId } = match.params;
  const curentItem = items.find(el => el.id === itemId);
  const { itemTitle, brends } = curentItem ? curentItem : {};
  // console.log('items', items);
  const closeModal = () => {
    history.goBack();
  };

  return (
    <Modal title={itemTitle} onClose={closeModal}>
      <BrendsList
        // path={match.path}
        brends={brends}
        onClose={closeModal}
        setSpares={setSpares}
      />
      {/* <BrendsList brends={brends} onClose={closeModal} /> */}
    </Modal>
  );
};

BrendsModal.propTypes = {};

export default BrendsModal;
