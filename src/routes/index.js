import Home from "~/Pages/Home";
import Following from "~/Pages/Following";
import Profile from "~/Pages/Profile";
import Upload from "~/Pages/Upload";
import Search from "~/Pages/Search";
import { HeaderOnly } from "~/layouts";
import config from "~/config";
const publicRoutes = [
  {
    path: config.configRoutes.home,
    component: Home,
  },
  {
    path: config.configRoutes.following,
    component: Following,
  },
  {
    path: config.configRoutes.profile,
    component: Profile,
  },
  {
    path: config.configRoutes.upload,
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: config.configRoutes.search,
    component: Search,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
