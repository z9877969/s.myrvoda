import { useEffect, useState } from 'react';

import OptionsList from './OptionsList';
import RoundButton from 'common/RoundButton';
import SendInfo from 'common/SendInfo';
import { configs } from 'data/energy-options';
import quotes from 'images/quotes.svg';
import s from './OnBoard.module.css';
import { useMediaQuery } from 'react-responsive';

// import { energyOptionsConfig } from 'data/energy-options';

// const buttonOptions = [
//   {
//     id: 'btn-1',
//     cardTitle: 'Card name 1',
//     cardList: [
//       { id: 'item-1', text: 'Descr-1/1' },
//       { id: 'item-2', text: 'Descr-1/2' },
//       { id: 'item-3', text: 'Descr-1/3' },
//     ],
//   },
//   {
//     id: 'btn-2',
//     cardTitle: 'Card name 2',
//     cardList: [
//       { id: 'item-1', text: 'Descr-2/1' },
//       { id: 'item-2', text: 'Descr-2/2' },
//       { id: 'item-3', text: 'Descr-2/3' },
//     ],
//   },
// ];

const OnBoard = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  // const [configList, setConfigList] = useState(consumersConfig);
  // console.log('configList', configList);
  const [cardOptions, setCardOptions] = useState(configs.additional);

  // useEffect(() => {
  //   setConfigList(consumersConfig);
  // }, []);

  // const onClick = e => {
  //   let list = consumersConfig;
  //   if (e.target.id === 1) list = consumersConfig;
  //   if (e.target.id === 2) list = controlConfig;
  //   if (e.target.id === 3) list = optionConfig;
  //   if (e.target.id === 4) list = additionalConfig;

  //   return setConfigList(list);
  // };

  // console.log('configList', consumersConfig);

  // const onClick = e => {
  //   console.log(e.target.id);
  //   let list = consumersConfig;
  //   if (e.target.id === 1) {
  //     list = consumersConfig;
  //     // setConfigList(consumersConfig);
  //   } else if (e.target.id === 2) {
  //     list = controlConfig;
  //     // setConfigList(controlConfig);
  //   } else if (e.target.id === 3) {
  //     list = optionConfig;
  //     // setConfigList(optionConfig);
  //   } else {
  //     list = additionalConfig;
  //     // setConfigList(additionalConfig);
  //   }
  //   console.log('list', list);

  //   return setConfigList(list);
  // };

  const setConfig = configName => {
    console.log('configName :>> ', configName);
    console.log('configs :>> ', configs);
    console.log('configs[configName] :>> ', configs[configName]);
    setCardOptions(configs[configName]);
  };

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

        <RoundButton onClick={setConfig} configName="consumers" />
        <RoundButton onClick={setConfig} configName="control" />
        <RoundButton onClick={setConfig} configName="option" />
        <RoundButton onClick={setConfig} configName="additional" />
        {/* {buttonOptions.map(el => (
          <RoundButton key={el.id} {...el} onClick={setCardOptions} />
        ))} */}

        <div className={s.options}>
          {isDesktop && <OptionsList config={cardOptions} />}
          {/* <OptionsList config={additionalConfig} /> */}
        </div>

        {!isDesktop && <OptionsList config={cardOptions} />}
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
