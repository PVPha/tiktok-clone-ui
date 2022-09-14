import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Styles from "./Popper.module.scss";

function Wrapper({ children, className }) {
  const cx = classNames.bind(Styles);
  return <div className={cx("wrapper", className)}>{children}</div>;
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
export default Wrapper;
