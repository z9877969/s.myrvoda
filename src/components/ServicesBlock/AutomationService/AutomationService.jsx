import Scheme from './Scheme';
import WorksList from './WorksList';
import { schemeConfig } from 'data/scheme';
import { worksConfig } from 'data/works';

import s from './AutomationService.module.css';

const AutomationService = () => {
  return (
    <div className={s.blockWrapper}>
      <div className={s.hero}>
        <p className={s.title}>Автоматизация процессов на судне</p>
      </div>

      <p className={s.text}>
        Наша цель - помочь клиентам автоматизировать ответственные с точки
        зрения безопасности эксплуатации процессы, а также наиболее трудоемкие и
        регулярно повторяющиеся операции.
      </p>

      <Scheme schemeConfig={schemeConfig} />
      <WorksList worksConfig={worksConfig} />
    </div>
  );
};

export default AutomationService;
