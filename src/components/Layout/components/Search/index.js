import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
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
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  useEffect(() => {
    if (valueSearch.trim() === "") {
      setSearchResult([]);
      return;
    }
    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        valueSearch
      )}&type=less`
    )
      .then((response) => {
        setLoading(true);
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        return setSearchResult(data.data);
      })
      .catch(() => setLoading(false));
  }, [valueSearch]);

  const changeValueHandler = (e) => {
    if (e.target.value[0] === " ") {
      setLoading(false);
      setValueSearch("");
    } else setValueSearch(e.target.value);
  };
  const clearValueHandler = () => {
    setLoading(false);
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
            {searchResult &&
              searchResult.map((account) => <ItemAccount data={account} />)}
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
        {!!valueSearch && !loading && (
          <button className={cx("clear")} onClick={clearValueHandler}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && (
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
        )}
        <button className={cx("search-btn")}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
