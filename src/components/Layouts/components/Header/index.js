import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
  faEllipsisVertical,
  faEarthAsia,
  faQuestionCircle,
  faKeyboard,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import Styles from "./Header.module.scss";
import images from "~/assets/image";
import Tippy from "@tippyjs/react";
import { useEffect, useState } from "react";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";

function Header() {
  const cx = classNames.bind(Styles);
  const MENU_ITEM = [
    {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: "English",
    },
    {
      icon: <FontAwesomeIcon icon={faQuestionCircle} />,
      title: "Feedback and help",
      to: "Feedback",
    },
    {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: "Keyboard shortcuts",
    },
  ];
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setInterval(() => {
      setSearchResult([]);
    }, 2000);
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="tiktok" />
        </div>

        <Tippy
          visible={searchResult.length > 0}
          interactive={true}
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
            <input placeholder="Search accounts and videos" />
            <button className={cx("clear-btn")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx("actions")}>
          <Button text>Upload</Button>
          <Button primary>Login</Button>
          <Menu items={MENU_ITEM}>
            <button className={cx("menu")}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Header;
