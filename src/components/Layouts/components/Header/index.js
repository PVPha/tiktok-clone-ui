import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
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
import images from "~/assets/image";
import TippyHeadless from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import Image from "~/components/Image";
import { InboxIcon, MessageIcon } from "~/components/Icons";

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
        <div className={cx("logo")}>
          <img src={images.logo} alt="tiktok" />
        </div>

        <TippyHeadless
          interactive={true}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <div className={cx("search-title")}>Account</div>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input placeholder="Search accounts and videos" />
            <button className={cx("clear-btn")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </TippyHeadless>

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
