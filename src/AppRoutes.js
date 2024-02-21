import Homepage from "./homepage/Homepage";
import DefaultLayout from "./based/DefaultLayout";
import Road from "./roadpage/Road";
import Blog from "./blogpage/Blog";
import DetailCourse from "./detailcousre/DetailCourse";
import Lesson from "./lesson/Lesson";
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
    path: "/lesson/:id",
    element: <Lesson />,
  },
];

export default AppRoutes;
