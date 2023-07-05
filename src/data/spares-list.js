import engine from 'images/spares-engine.svg';
import lifebuoy from 'images/spares-lifebuoy.svg';
import wheel from 'images/spares-steering-wheel.svg';

export const sparesListConfig = [
  {
    imgUrl: engine,
    name: 'Машинное отделение',
    alt: 'engine',
    to: 'engine-room',
  },
  {
    imgUrl: lifebuoy,
    name: 'Палуба',
    alt: 'lifebuoy',
    to: 'deck',
  },
  {
    imgUrl: wheel,
    name: 'Мостик',
    alt: 'wheel',
    to: 'bridge',
  },
];
