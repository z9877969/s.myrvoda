import { useMediaQuery } from 'react-responsive';
import SendInfo from 'common/SendInfo';
import ServiceList from './ServiceList';
import { serviceConfig } from 'data/service';
import s from './ServicesBlock.module.css';

const ServicesBlock = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

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
          <div className={s.sendInfo}>
            <SendInfo
              linkName="Ознакомиться с услугами"
              linkPath="/"
              hideLink={true}
            />
          </div>
        )}
      </div>

      <ServiceList serviceConfig={serviceConfig} />

      {!isDesktop && (
        <SendInfo
          linkName="Ознакомиться с услугами"
          linkPath="/"
          hideLink={true}
        />
      )}
    </div>
  );
};

export default ServicesBlock;
