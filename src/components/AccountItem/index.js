import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function AccountItem() {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("wrapper")}>
      <span className={styles.avatar}>
        <img
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f89b316574f8f0ab300e20d4b7ff6a29~c5_300x300.webp?x-expires=1663034400&x-signature=YSk5bokBDvNxL%2BeXY4MgAB56PeA%3D"
          alt="avatar"
        />
      </span>
      <div className={cx("info")}>
        <h4 className={cx("user-name")}>
          <span>hoaa.hanassii</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <p className={cx("name")}>Đào Lê Phương Hoa</p>
      </div>
    </div>
  );
}

export default AccountItem;
