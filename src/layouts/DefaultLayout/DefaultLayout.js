import PropTypes from "prop-types";
import Header from "~/layouts/components/Header";
import Sidebar from "./Sidebar";
import classNames from "classnames/bind";
import Styles from "./DefaultLayout.module.scss";
function DefaultLayout({ children }) {
  const cx = classNames.bind(Styles);
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DefaultLayout;
