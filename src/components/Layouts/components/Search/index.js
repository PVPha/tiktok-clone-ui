import TippyHeadless from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import { useEffect, useRef, useState } from "react";
import { SearchIcon } from "~/components/Icons";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showSearch, setShowSearch] = useState(true);
  const [loading, setLoading] = useState(false);

  const searchRef = useRef();

  useEffect(() => {
    if (!searchValue.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);
    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${searchValue}&type=less`
    )
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(true);
      });
  }, [searchValue]);

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    searchRef.current.focus();
  };
  const handleHideResult = () => {
    setShowSearch(false);
  };

  return (
    <TippyHeadless
      visible={showSearch && searchResult.length > 0}
      interactive={true}
      onClickOutside={handleHideResult}
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <div className={cx("search-title")}>Account</div>
            {searchResult.map((item) => (
              <AccountItem key={item.id} data={item} />
            ))}
          </PopperWrapper>
        </div>
      )}
    >
      <div className={cx("search")}>
        <input
          ref={searchRef}
          placeholder="Search accounts and videos"
          value={searchValue}
          autoComplete="off"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onFocus={() => {
            setShowSearch(true);
          }}
        />
        {searchValue && !loading && (
          <button className={cx("clear-btn")} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && (
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
        )}
        <button className={cx("search-btn")}>
          <SearchIcon width="24px" height="24px" />
        </button>
      </div>
    </TippyHeadless>
  );
}

export default Search;
