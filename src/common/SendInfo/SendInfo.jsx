import { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import BigButton from 'common/BigButton';
import Form from 'common/Form';
import Modal from 'common/Modal';

import s from './SendInfo.module.css';

const SendInfo = ({ linkName = '', linkPath = '', hideLink }) => {
  const [formsList, setFormsList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const sendForm = newForm => {
    setFormsList([...formsList, newForm]);
    closeModal();
  };

  return (
    <div className={s.contacts}>
      <BigButton onClick={openModal} text="Оставить заявку" />
      <div className={clsx(hideLink && s.isHideLink)}>
        <a href={linkPath} className={s.link}>
          {linkName}
        </a>
      </div>

      {isModalOpen && (
        <Modal title="Оставить заявку" onClose={closeModal}>
          <Form onSubmit={sendForm} />
        </Modal>
      )}
    </div>
  );
};

SendInfo.propTypes = {
  linkName: PropTypes.string.isRequired,
  linkPath: PropTypes.string.isRequired,
  isShowLink: PropTypes.bool,
};

export default SendInfo;
