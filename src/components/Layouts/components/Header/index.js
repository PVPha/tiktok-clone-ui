import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faEarthAsia,
  faQuestionCircle,
  faKeyboard,
  faPlus,
  faPersonRifle,
  faCoins,
  faGear,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import Styles from "./Header.module.scss";
import configRoute from "~/config/routes";
import images from "~/assets/image";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import Image from "~/components/Image";
import { InboxIcon, MessageIcon } from "~/components/Icons";
import Search from "../Search";
import { Link } from "react-router-dom";

function Header() {
  const cx = classNames.bind(Styles);
  const currentUser = true;
  const MENU_ITEMS = [
    {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: "English",
      sub: {
        title: "Language",
        data: [
          {
            type: "language",
            code: "en",
            title: "English",
          },
          {
            type: "language",
            code: "vi",
            title: "Việt Nam",
          },
        ],
      },
    },
    {
      icon: <FontAwesomeIcon icon={faQuestionCircle} />,
      title: "Feedback and help",
      to: "Feedback",
    },
    {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: "Keyboard shortcuts",
    },
  ];
  const USER_MENU_ITEMS = [
    {
      icon: <FontAwesomeIcon icon={faPersonRifle} />,
      title: "View profile",
      to: "/profile",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "/setting",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      separate: true,
    },
  ];
  const handleChange = (data) => {
    console.log(data);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={configRoute.home} className={cx("logo")}>
          <img src={images.logo} alt="tiktok" />
        </Link>

        <Search />

        <div className={cx("actions")}>
          <Button
            outline
            classSpecific={cx("btn-upload")}
            leftIcon={<FontAwesomeIcon icon={faPlus} />}
          >
            Upload
          </Button>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Message" placement="bottom">
                <button className={cx("user-btn", "btn-messages")}>
                  <MessageIcon />
                  <span className={cx("quantity")}>1</span>
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                <button className={cx("user-btn", "btn-inbox")}>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <Button primary>Login</Button>
          )}

          <Menu
            items={currentUser ? USER_MENU_ITEMS : MENU_ITEMS}
            onChange={handleChange}
          >
            {currentUser ? (
              <Image
                className={cx("avatar")}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/e4c61c54794b26f4ab3184c1a32c1483~c5_720x720.jpeg?x-expires=1663174800&x-signature=D0THN%2BHqNToHeQMnRhZ7Pyk0jXs%3D"
                alt="Phadz"
              />
            ) : (
              <button className={cx("menu")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Header;
