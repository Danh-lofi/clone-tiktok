import styles from "./ItemAccount.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function ItemAccount({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
      <img src={data.avatar} className={cx("image")} alt="img" />
      <div className={cx("container")}>
        <p className={cx("name")}>
          <h4>{data.nickname}</h4>
          {data.tick && (
            <FontAwesomeIcon className={cx("icon")} icon={faCheckCircle} />
          )}
        </p>
        <span className={cx("username")}>{data.full_name}</span>
      </div>
    </Link>
  );
}

export default ItemAccount;
