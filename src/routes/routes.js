import config from "~/config";
//import layouts
import { UploadLayout } from "~/layouts";
//import pages
import Following from "~/pages/Following";
import Home from "~/pages/Home";
import Upload from "~/pages/Upload";
import Profile from "~/pages/Profile";
//public route
const publicRoute = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.following,
    component: Following,
  },
  {
    path: config.routes.upload,
    component: Upload,
    layout: UploadLayout,
  },
  {
    path: config.routes.profile,
    component: Profile,
    layout: null,
  },
];

//private route
const privateRoute = [];

export { publicRoute, privateRoute };
