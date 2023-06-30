import EnergyMenu from './EnergyMenu';
import quotes from 'images/quotes.svg';
import s from './EnergyService.module.css';

const EnergyService = () => {
  return (
    <div className={s.blockWrapper}>
      <EnergyMenu />

      <div className={s.hero}>
        <p className={s.title}>Решение на борту</p>
      </div>

      <div className={s.descrWrapper}>
        <img className={s.quotes} src={quotes} alt="quotes" />

        <p className={s.head}>
          Ваш первый шаг к снижению расхода топлива и повышению эффективности
          эксплуатационных характеристик судна
        </p>
        <p className={s.text}>
          Наша система прекрасно интегрируется с другими установленными на борту
          судна системами, позволяя отображать все необходимые параметры.
        </p>
      </div>
    </div>
  );
};

export default EnergyService;
