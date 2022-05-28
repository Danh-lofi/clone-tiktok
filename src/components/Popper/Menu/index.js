import Tippy from "@tippyjs/react/headless";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";

const cx = classNames.bind(styles);

function Menu({ children, items = [], onChange }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const changeMenuChildrenHandler = (isParent, item) => {
    if (isParent) {
      setHistory((prev) => [...prev, item.children]);
    } else {
      onChange(item);
    }
  };
  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => changeMenuChildrenHandler(isParent, item)}
        />
      );
    });
  };

  const backToMenuHandler = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };
  return (
    <Tippy
      offset={[12, 8]}
      interactive
      hideOnClick="false"
      delay={[0, 500]}
      placement="bottom-end"
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
      render={(attrs) => (
        <div className={cx("wrapper")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={"pb"}>
            {history.length > 1 && (
              <Header title="Language" onBack={backToMenuHandler} />
            )}
            <div className={cx("container-menuItem")}> {renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
