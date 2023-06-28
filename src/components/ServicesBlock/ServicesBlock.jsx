import BigButton from 'common/BigButton';
import Form from 'common/Form';
import Modal from 'common/Modal';
import ServiceList from './ServiceList';
import s from './ServicesBlock.module.css';
import { serviceConfig } from 'data/service';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

const ServicesBlock = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  const [formsList, setFormsList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const sendForm = newForm => {
    setFormsList([...formsList, newForm]);
    closeModal();
  };

  // console.log(formsList);
  return (
    <div className={s.servicesBlock}>
      <div className={s.orderWrapepr}>
        <div className={s.taglineBlock}>
          <p className="headingBlock">Наши услуги</p>
          <h2 className="tagline">
            Мы заботимся о наших клиентах и предоставляем лучший сервис
          </h2>
        </div>
        {isDesktop && (
          <BigButton
            onClick={openModal}
            text="Оставить заявку"
            className={s.buttonOrder}
          />
        )}
      </div>

      <ServiceList serviceConfig={serviceConfig} />

      {!isDesktop && <BigButton onClick={openModal} text="Оставить заявку" />}

      {isModalOpen && (
        <Modal title="Оставить заявку" onClose={closeModal}>
          <Form onSubmit={sendForm} />
        </Modal>
      )}
    </div>
  );
};

export default ServicesBlock;
