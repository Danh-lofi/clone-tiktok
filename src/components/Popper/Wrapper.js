import styles from "./Wrapper.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function Wrapper(props) {
  const classes = cx("wrapper", {
    [props.className]: props.className,
  });
  return <div className={classes}>{props.children}</div>;
}

export default Wrapper;
