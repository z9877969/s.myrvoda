import { useState } from 'react';

import {
  consumersConfig,
  controlConfig,
  optionConfig,
  additionalConfig,
} from 'data/energy-options';
// import { energyOptionsConfig } from 'data/energy-options';

import SendInfo from 'common/SendInfo';
import quotes from 'images/quotes.svg';
import s from './OnBoard.module.css';
import OptionsList from './OptionsList';
import RoundButton from 'common/RoundButton';

const OnBoard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleList = () => setIsOpen(prevIsOpen => !prevIsOpen);

  return (
    <div className={s.blockWrapper}>
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

      <div className={s.stroke}></div>

      <div className={s.optionsWrapper}>
        <h2 className={s.optionsTitle}>
          Параметры контролируемые системой установленной на судне:
        </h2>
        <RoundButton onClick={toggleList} />
        <RoundButton onClick={toggleList} />
        <div className={s.options}>
          {isOpen && <OptionsList config={consumersConfig} />}
          {isOpen && <OptionsList config={controlConfig} />}
        </div>
      </div>

      <SendInfo
        linkName="Система FOCUS для флота"
        linkPath="/"
        hideLink={false}
      />
    </div>
  );
};

export default OnBoard;
