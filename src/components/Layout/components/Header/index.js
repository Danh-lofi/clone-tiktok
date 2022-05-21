import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCircleQuestion,
  faCircleXmark,
  faEllipsisVertical,
  faKeyboard,
  faMagnifyingGlass,
  faPlus,
  faSpinner,
  faCoins,
  faUser,
  faGear,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import ItemAccount from "~/components/ItemAccount";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assests/images";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import { faMessage, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { InboxIcon, MessageIcon } from "~/components/Icons";
import Image from "~/components/Image";

const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faBook} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];

function Header() {
  const currentUser = true;
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 0);
  });

  const changeMenuItemHandler = (item) => {
    console.log(item);
  };

  const MENU_LOGIN = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/@danh",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coins",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Setting",
      to: "/setting",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
      title: "Log out",
      to: "/logout",
      separate: true,
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="tiktok" />
        </div>
        <HeadlessTippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-results")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-results-title")}>Accounts</h4>
                <ItemAccount />
                <ItemAccount />
                <ItemAccount />
                <ItemAccount />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input placeholder="Search accounts and videos" />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>
        <div className={cx("action")}>
          {currentUser ? (
            <>
              <Button
                className="outline-upload"
                lefticon={<FontAwesomeIcon icon={faPlus} />}
              >
                Upload
              </Button>
              {/* Tippy Message */}
              <Tippy placement="bottom" content="Message">
                <button className={cx("bg-trans")}>
                  <Button to="/message" btnIcon>
                    <MessageIcon />
                  </Button>
                </button>
              </Tippy>
              {/* Tippy Inbox */}
              <Tippy placement="bottom" content="Inbox">
                <button className={cx("bg-trans")}>
                  <Button to="/inbox" btnIcon>
                    <InboxIcon />
                  </Button>
                </button>
              </Tippy>

              <Menu items={MENU_LOGIN} onChange={changeMenuItemHandler}>
                <button className={cx("btn-icon")}>
                  <Image
                    className={cx("img")}
                    src="https://p1-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/557695794d1cb0b4a32322da33aac45d~c5_300x300.webp?x-expires=1653094800&x-signature=9NHR7C8iW2thmS%2B2OtrxG%2BTDcjg%3D"
                    alt="img"
                    fallback="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/557695794d1cb0b4a32322da33aac45d~c5_300x300.webp?x-expires=1653094800&x-signature=9NHR7C8iW2thmS%2B2OtrxG%2BTDcjg%3D"
                  />
                </button>
              </Menu>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log In</Button>

              <Menu items={MENU_ITEMS} onChange={changeMenuItemHandler}>
                <button className={cx("menu-more")}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </Menu>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
export default Header;
