import TippyHeadless from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
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

  const searchRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 1]);
    }, 3000);
  }, []);

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
            <AccountItem />
            <AccountItem />
            <AccountItem />
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
        {searchValue && (
          <button className={cx("clear-btn")} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        <button className={cx("search-btn")}>
          <SearchIcon width="24px" height="24px" />
        </button>
      </div>
    </TippyHeadless>
  );
}

export default Search;
