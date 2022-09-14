import TippyHeadless from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import { useEffect, useRef, useState } from "react";
import { SearchIcon } from "~/components/Icons";
import { useDebounce } from "~/hooks";
import * as searchService from "~/services/searchService";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showSearch, setShowSearch] = useState(true);
  const [loading, setLoading] = useState(false);

  const searchRef = useRef();
  const debounce = useDebounce(searchValue, 500);

  useEffect(() => {
    if (!debounce.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);

    const fetchAPI = async () => {
      const result = await searchService.search(debounce);
      setSearchResult(result);
      setLoading(false);
    };

    fetchAPI();
  }, [debounce]);

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    searchRef.current.focus();
  };
  const handleHideResult = () => {
    setShowSearch(false);
  };
  const handleInput = (e) => {
    const inputValue = e.target.value;
    if (!inputValue.startsWith(" ")) {
      setSearchValue(inputValue);
    }
  };

  return (
    // Using a wrapper <div> or <span> tag around the reference element solves
    //this by creating a new parentNode context.
    <div>
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
            onChange={handleInput}
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
          <button
            className={cx("search-btn")}
            onMouseDown={(e) => e.preventDefault()}
          >
            <SearchIcon width="24px" height="24px" />
          </button>
        </div>
      </TippyHeadless>
    </div>
  );
}

export default Search;
