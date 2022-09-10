//import layouts
import { UploadLayout } from "~/pages/Layouts";
//import pages
import Following from "~/pages/Following";
import Home from "~/pages/Home";
import Upload from "~/pages/Upload";
import Profile from "~/pages/Profile";
//public route
const publicRoute = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/Following",
    component: Following,
  },
  {
    path: "/Upload",
    component: Upload,
    layout: UploadLayout,
  },
  {
    path: "/Profile",
    component: Profile,
    layout: null,
  },
];

//private route
const privateRoute = [];

export { publicRoute, privateRoute };
