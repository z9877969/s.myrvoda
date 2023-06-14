import PropTypes from "prop-types";
import s from "./Header.module.css";
import BigButton from "../../common/BigButton/BigButton";

const Header = ({ title }) => {
  return (
    <div className={s.block}>
      <header className={s.mainHeader}>
        {/* {title && <h2 className="heading">{title}</h2>} */}
        <ul className={s.list}>
          <li className={s.phone}>
            <a href="tel:+37258667396">+372 5866 7196</a>
          </li>
          <li className={s.mail}>
            <a href="mailto:sales@njordmarine.eu">sales@njordmarine.eu</a>
          </li>
        </ul>
        <ul className={s.language}>
          <li>RU</li>
          <li>|</li>
          <li>EN</li>
        </ul>

        <BigButton text="Скачать брошюру" isGray={true} />
      </header>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
