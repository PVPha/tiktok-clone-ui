import classNames from "classnames/bind";
import Styles from "./Sidebar.module.scss";
function Siderbar() {
  const cx = classNames.bind(Styles);
  return (
    <aside className={cx("wrapper")}>
      <h1>Sidebar</h1>
    </aside>
  );
}

export default Siderbar;
