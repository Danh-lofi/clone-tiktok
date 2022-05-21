import styles from "./ItemAccount.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function ItemAccount() {
  return (
    <div className={cx("wrapper")}>
      <img
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/557695794d1cb0b4a32322da33aac45d~c5_300x300.webp?x-expires=1653094800&x-signature=9NHR7C8iW2thmS%2B2OtrxG%2BTDcjg%3D"
        className={cx("image")}
        alt="img"
      />
      <div className={cx("container")}>
        <p className={cx("name")}>
          <h4>lebong95</h4>
          <FontAwesomeIcon className={cx("icon")} icon={faCheckCircle} />
        </p>
        <span className={cx("username")}>le hoa</span>
      </div>
    </div>
  );
}

export default ItemAccount;
