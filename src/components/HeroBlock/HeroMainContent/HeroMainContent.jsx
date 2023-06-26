import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import BigButton from 'common/BigButton';
import Form from 'common/Form';
import Modal from 'common/Modal';
import ship from 'images/hero-bg-mob.png';
import s from './HeroMainContent.module.css';

const HeroMainContent = () => {
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
    <div className={s.heroContent}>
      <p className={s.head}>
        Европейская компания с высококачественными решениями
      </p>
      <h1 className="taglineBig">
        Ваш надежный <br /> помощник <br />
        по сервису судов
      </h1>
      <p className={s.description}>
        NJORDMARINE заботится о своих клиентах и ​​ценит их время, поэтому мы
        предоставляем необходимое оборудование, оригинальные и OEM запчасти, а
        также сервисное обслуживание в кратчайшие сроки и по разумной цене.
      </p>
      {!isDesktop && <img src={ship} alt="ship" />}
      <div className={s.nav}>
        <BigButton onClick={openModal} text="Оставить заявку" />
        <a href="/" className={s.serviceLink}>
          Ознакомиться с услугами
        </a>

        {isModalOpen && (
          <Modal title="Отправить заявку" onClose={closeModal}>
            <Form onSubmit={sendForm} />
          </Modal>
        )}
      </div>
      <ul className={s.list}>
        <li className={s.listItem}>
          <p className={s.top}>800+</p>
          <p className={s.bot}>Выполненных проектов</p>
        </li>
        <li className={s.listItem}>
          <p className={s.top}>5 лет</p>
          <p className={s.bot}>На рынке</p>
        </li>
        <li className={s.listItem}>
          <p className={s.top}>20</p>
          <p className={s.bot}>Стран</p>
        </li>
      </ul>
    </div>
  );
};

export default HeroMainContent;
