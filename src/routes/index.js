import configRoute from "~/config/routes";
//import layouts
import { UploadLayout } from "~/components/Layouts";
//import pages
import Following from "~/pages/Following";
import Home from "~/pages/Home";
import Upload from "~/pages/Upload";
import Profile from "~/pages/Profile";
//public route
const publicRoute = [
  {
    path: configRoute.home,
    component: Home,
  },
  {
    path: configRoute.following,
    component: Following,
  },
  {
    path: configRoute.upload,
    component: Upload,
    layout: UploadLayout,
  },
  {
    path: configRoute.profile,
    component: Profile,
    layout: null,
  },
];

//private route
const privateRoute = [];

export { publicRoute, privateRoute };
