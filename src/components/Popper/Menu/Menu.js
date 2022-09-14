import PropTypes from "prop-types";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import Styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";
const cx = classNames.bind(Styles);
const defaultFN = () => {};
function Menu({
  children,
  items = [],
  hideOnClick = false,
  onChange = defaultFN,
}) {
  const [history, setHistory] = useState([{ data: items }]);
  const currentMenu = history[history.length - 1];
  const renderItem = () => {
    return currentMenu.data.map((item, index) => {
      const isParent = !!item.sub;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => {
                return [...prev, item.sub];
              });
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      hideOnClick={hideOnClick}
      delay={[0, 700]}
      offset={[15, 5]}
      interactive
      placement={"bottom-end"}
      onHide={() => {
        setHistory((prev) => {
          return prev.slice(0, 1);
        });
      }}
      render={(attrs) => (
        <div className={cx("wrapper")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            {history.length > 1 && (
              <Header
                title={currentMenu.title}
                onBack={() => {
                  setHistory(history.slice(0, history.length - 1));
                }}
              />
            )}
            <div className={cx("menu-body")}>{renderItem()}</div>
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};
export default Menu;
