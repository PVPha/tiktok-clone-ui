import classNames from "classnames/bind";
import Styles from "./Popper.module.scss";

function Wrapper({ children, className }) {
  const cx = classNames.bind(Styles);
  return <div className={cx("wrapper", className)}>{children}</div>;
}

export default Wrapper;
