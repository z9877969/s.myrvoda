import ServiceList from './ServiceList';
import BigButton from 'common/BigButton';
import { serviceConfig } from 'data/service';
import s from './ServicesBlock.module.css';

const ServicesBlock = () => {
  return (
    <div className={s.servicesBlock}>
      <p className={s.ourServ}>Наши услуги</p>
      <div className={s.taglineBlock}>
        <p className={s.tagline}>
          Мы заботимся о наших клиентах <br /> и предоставляем лучший сервис
        </p>
        <BigButton text="Оставить заявку" />
      </div>
      <ServiceList serviceConfig={serviceConfig} />
    </div>
  );
};

export default ServicesBlock;
