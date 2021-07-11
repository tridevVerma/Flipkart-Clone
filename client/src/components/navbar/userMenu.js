import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import LocalHospitalOutlinedIcon from "@material-ui/icons/LocalHospitalOutlined";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatIcon from "@material-ui/icons/Chat";
import ViewStreamIcon from "@material-ui/icons/ViewStream";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

const userMenu = [
  {
    text: "my profile",
    icon: <AccountCircleIcon color="primary" fontSize="small" />,
  },
  {
    text: "supercoin zone",
    icon: <OfflineBoltIcon color="primary" fontSize="small" />,
  },
  {
    text: "flipkart plus zone",
    icon: <LocalHospitalOutlinedIcon color="primary" fontSize="small" />,
  },
  {
    text: "orders",
    icon: <OpenInBrowserIcon color="primary" fontSize="small" />,
  },
  { text: "wishlist", icon: <FavoriteIcon color="primary" fontSize="small" /> },
  { text: "my chats", icon: <ChatIcon color="primary" fontSize="small" /> },
  {
    text: "coupons",
    icon: <ViewStreamIcon color="primary" fontSize="small" />,
  },
  {
    text: "gift cards",
    icon: <CardGiftcardIcon color="primary" fontSize="small" />,
  },
  {
    text: "notifications",
    icon: <NotificationsIcon color="primary" fontSize="small" />,
  },
  {
    text: "logout",
    icon: <PowerSettingsNewIcon color="primary" fontSize="small" />,
  },
];

export default userMenu;
