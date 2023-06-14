// import PropTypes from 'prop-types';
import Paper from 'common/Paper';
import s from './ServiceList.module.css';

const ServiceList = ({ serviceConfig }) => {
  console.log(serviceConfig);
  return (
    <ul className={s.list}>
      {serviceConfig.map(({ src, text, alt }, index) => (
        <Paper>
          <li key={index} className={s.item}>
            <img src={src} alt={alt} />
            <p className={s.descr}>{text}</p>
            <a href="/" className={s.link}>
              Подробнее
            </a>
          </li>
        </Paper>
      ))}
    </ul>
  );
};

// ServiceList.propTypes = {
//   src: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
//   alt: PropTypes.string,
// };

export default ServiceList;
