import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import ItemAccount from "~/components/ItemAccount";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [valueSearch, setValueSearch] = useState("");
  const [showResult, setShowResult] = useState(true);
  const inputRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 0);
  });

  const changeValueHandler = (e) => {
    setValueSearch(e.target.value);
  };
  const clearValueHandler = () => {
    setValueSearch("");
    inputRef.current.focus();
    setShowResult(false);
  };
  return (
    <HeadlessTippy
      interactive
      visible={searchResult.length > 0 && showResult}
      onClickOutside={() => setShowResult(false)}
      render={(attrs) => (
        <div className={cx("search-results")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx("search-results-title")}>Accounts</h4>
            <ItemAccount />
            <ItemAccount />
            <ItemAccount />
            <ItemAccount />
          </PopperWrapper>
        </div>
      )}
    >
      <div className={cx("search")}>
        <input
          value={valueSearch}
          placeholder="Search accounts and videos"
          ref={inputRef}
          onChange={changeValueHandler}
          onFocus={() => setShowResult(true)}
        />
        {!!valueSearch && (
          <button className={cx("clear")} onClick={clearValueHandler}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {/* <FontAwesomeIcon className={cx("loading")} icon={faSpinner} /> */}

        <button className={cx("search-btn")}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
