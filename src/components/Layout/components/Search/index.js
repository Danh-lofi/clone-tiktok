import { useEffect, useRef, useState } from "react";
import { useDebounce } from "~/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import search from "~/apiService/searchService";

import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import ItemAccount from "~/components/ItemAccount";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [valueSearch, setValueSearch] = useState("");
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const debouced = useDebounce(valueSearch, 500);
  const inputRef = useRef();
  useEffect(() => {
    if (debouced.trim() === "") {
      setLoading(false);
      setSearchResult([]);
      return;
    }
    // fetch(
    //   `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
    //     valueSearch
    //   )}&type=less`
    // )
    //   .then((response) => {
    //     setLoading(true);
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setLoading(false);
    //     return setSearchResult(data.data);
    //   })
    //   .catch(() => setLoading(false));

    const fetchAPI = async () => {
      setLoading(true);

      const result = await search(debouced);
      setSearchResult(result);

      setLoading(false);
    };
    fetchAPI();
  }, [debouced]);

  const changeValueHandler = (e) => {
    if (e.target.value[0] === " ") {
      setLoading(false);
      setValueSearch("");
    } else {
      setLoading(true);
      setValueSearch(e.target.value);
    }
  };
  const clearValueHandler = () => {
    setLoading(false);
    setValueSearch("");
    inputRef.current.focus();
    setShowResult(false);
  };
  return (
    <div>
      <HeadlessTippy
        interactive
        visible={searchResult.length > 0 && showResult}
        onClickOutside={() => setShowResult(false)}
        render={(attrs) => (
          <div className={cx("search-results")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx("search-results-title")}>Accounts</h4>
              {searchResult &&
                searchResult.map((account, index) => (
                  <ItemAccount key={index} data={account} />
                ))}
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
          <Link to="/search">
            <button
              className={cx("search-btn")}
              onMouseDown={(e) => e.preventDefault}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </Link>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
