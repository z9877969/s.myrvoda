import magnifer from 'images/maint-magnifer.svg';
import engeneer from 'images/maint-engeneer.svg';
import angular from 'images/maint-ruler-angular.svg';
import document from 'images/maint-document.svg';
import pen from 'images/maint-ruler-pen.svg';

export const measurementsConfig = [
  {
    imgUrl: magnifer,
    count: '01.',
    title: 'Предварительный осмотр',
    text: 'Предварительный осмотр места проведения замеров остаточных толщин и согласования объема работ',
    alt: 'magnifer',
  },
  {
    imgUrl: engeneer,
    count: '02.',
    title: 'Cогласование',
    text: 'Согласование программ обследования с инспектором классификационного общества',
    alt: 'engeneer',
  },
  {
    imgUrl: angular,
    count: '03.',
    title: 'Измерение',
    text: 'Измерение толщины стальных конструкций судов и наземных терминалов',
    alt: 'angular',
  },
  {
    imgUrl: document,
    count: '04.',
    title: 'Документация',
    text: 'Составление рапортов о проведенных работах в соответствии с правилами классификационных обществ',
    alt: 'document',
  },
  {
    imgUrl: pen,
    count: '05.',
    title: 'Чертежи',
    text: 'Составление чертежей ремонта с использованием подробных весовых таблиц',
    alt: 'pen',
  },
];
