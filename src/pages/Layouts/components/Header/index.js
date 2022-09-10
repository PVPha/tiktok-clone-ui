import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import Styles from "./Header.module.scss";
import images from "~/assets/image";
function Header() {
  const cx = classNames.bind(Styles);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="tiktok" />
        </div>
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
        <div className={cx("actions")}></div>
      </div>
    </div>
  );
}

export default Header;
