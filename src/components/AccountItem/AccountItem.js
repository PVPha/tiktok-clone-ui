import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "~/components/Image";
import { Link } from "react-router-dom";

function AccountItem({ data }) {
  const cx = classNames.bind(styles);
  return (
    <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
      <span className={styles.avatar}>
        <Image src={data.avatar} alt={data.full_name} />
      </span>
      <div className={cx("info")}>
        <h4 className={cx("user-name")}>
          <span>{data.nickname}</span>
          {data.tick && (
            <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
          )}
        </h4>
        <p className={cx("name")}>{data.full_name}</p>
      </div>
    </Link>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};
export default AccountItem;
