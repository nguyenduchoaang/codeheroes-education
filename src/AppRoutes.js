import Homepage from "./homepage/Homepage";
import DefaultLayout from "./based/DefaultLayout";
import Road from "./roadpage/Road";
import Blog from "./blogpage/Blog";
import DetailCourse from "./detailcousre/DetailCourse";
import Lesson from "./lesson/Lesson";
import DetailBlog from "./blogpage/DetailBlog";
import EmptyLayout from "./based/EmptyLayout";
import CreateBlog from "./blogpage/CreateBlog";
import InfoMe from "./infome/infome";
const AppRoutes = [
  {
    path: "/",
    element: <Homepage />,
    layout: DefaultLayout,
  },
  {
    path: "/road",
    element: <Road />,
    layout: DefaultLayout,
  },
  {
    path: "/blog",
    element: <Blog />,
    layout: DefaultLayout,
  },
  {
    path: "/course/:id",
    element: <DetailCourse />,
    layout: DefaultLayout,
  },
  {
    path: "/lessons/:id",
    element: <Lesson />,
    layout: EmptyLayout,
  },
  {
    path: "/blog/:id",
    element: <DetailBlog />,
    layout: DefaultLayout,
  },
  {
    path: "/create-blog",
    element: <CreateBlog />,
    layout: DefaultLayout,
  },
  {
    path: "/info-me",
    element: <InfoMe />,
    layout: DefaultLayout,
  },
];

export default AppRoutes;
