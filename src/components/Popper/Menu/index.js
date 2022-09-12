import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import Styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";
const cx = classNames.bind(Styles);
const defaultFN = () => {};
function Menu({ children, items = [], onChange = defaultFN }) {
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
      delay={[0, 700]}
      interactive
      placement={"bottom-end"}
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
            {renderItem()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
