import classNames from "classnames/bind";
import Styles from "./Popper.module.scss";

function Wrapper({ children }) {
  const cx = classNames.bind(Styles);
  return <div className={cx("wrapper")}>{children}</div>;
}

export default Wrapper;
