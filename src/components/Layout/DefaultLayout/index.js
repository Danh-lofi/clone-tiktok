import Header from "../components/Header";
import SideBar from "./SideBar";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function DefaultLayout(props) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <SideBar />
        <div className={cx("content")}>{props.children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
