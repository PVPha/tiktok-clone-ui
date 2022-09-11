import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import Styles from "./Button.module.scss";
function Button({
  children,
  to,
  href,
  onClick,
  leftIcon,
  rightIcon,
  classSpecific = false,
  rounded = false,
  disabled = false,
  text = false,
  primary = false,
  outline = false,
  small = false,
  large = false,
}) {
  const cx = classNames.bind(Styles);
  const className = cx("wrapper", {
    [classSpecific]: classSpecific, //if classSpecific is true return value of [classSpecific]
    rounded,
    disabled,
    text,
    primary,
    outline,
    small,
    large,
  });

  let Comp = "button";
  const props = {
    onClick,
  };

  //remove event listener when button is disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on")) {
        //delete item in obj props
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  return (
    <Comp {...props} className={className}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}
export default Button;
