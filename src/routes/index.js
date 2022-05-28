import Home from "~/Pages/Home";
import Following from "~/Pages/Following";
import Profile from "~/Pages/Profile";
import Upload from "~/Pages/Upload";
import Search from "~/Pages/Search";
import { HeaderOnly } from "~/components/Layout";
import configRoutes from "~/config/configRoutes";
const publicRoutes = [
  {
    path: configRoutes.home,
    component: Home,
  },
  {
    path: configRoutes.following,
    component: Following,
  },
  {
    path: configRoutes.profile,
    component: Profile,
  },
  {
    path: configRoutes.upload,
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: configRoutes.search,
    component: Search,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
