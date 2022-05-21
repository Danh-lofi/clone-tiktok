import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function Button({
  className,
  children,
  to,
  href,
  onClick,
  primary,
  outline,
  rounded,
  text,
  small,
  large,
  lefticon,
  separate,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };
  if (to) {
    Comp = Link;
    props.to = to;
  } else if (href) {
    Comp = "a";
    props.href = href;
  }
  const classes = cx("wrapper", {
    [className]: className,
    separate,
    primary,
    outline,
    small,
    large,
    text,
    rounded,
  });
  return (
    <Comp className={classes} {...props}>
      {lefticon && <span className={cx("icon")}>{lefticon}</span>}
      {children}
    </Comp>
  );
}

export default Button;
