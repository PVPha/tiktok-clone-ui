import classNames from "classnames/bind";
import Styles from "./Header.module.scss";
function Header() {
  const cx = classNames.bind(Styles);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}></div>
    </div>
  );
}

export default Header;
