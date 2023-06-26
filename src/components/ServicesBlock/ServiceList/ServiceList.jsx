import PropTypes from 'prop-types';
import Paper from 'common/Paper';
import s from './ServiceList.module.css';

const ServiceList = ({ serviceConfig }) => {
  return (
    <ul className={s.list}>
      {serviceConfig.map(({ imgUrl, text, alt }, index) => (
        <li key={index}>
          <Paper>
            <div className={s.item}>
              <img className={s.image} src={imgUrl} alt={alt} />
              <p className={s.descr}>{text}</p>
              <a href="/" className={s.link}>
                Подробнее
              </a>
            </div>
          </Paper>
        </li>
      ))}
    </ul>
  );
};

ServiceList.propTypes = {
  serviceConfig: PropTypes.arrayOf(
    PropTypes.shape({
      imgUrl: PropTypes.string,
      text: PropTypes.string,
      alt: PropTypes.string,
    }),
  ).isRequired,
};

export default ServiceList;
