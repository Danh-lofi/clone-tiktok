import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function Header({ title, onBack }) {
  return (
    <header className={cx("header")}>
      <h3 className={cx("header-title")}>{title}</h3>
      <div className={cx("header-icon")} onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    </header>
  );
}

export default Header;
