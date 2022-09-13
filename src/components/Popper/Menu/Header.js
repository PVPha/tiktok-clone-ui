import classNames from "classnames/bind";
import Styles from "./Menu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(Styles);

function Header({ title, onBack }) {
  return (
    <div className={cx("header-menu")}>
      <button className={cx("header-back-btn")} onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h4 className={cx("header-title")}>{title}</h4>
    </div>
  );
}
export default Header;