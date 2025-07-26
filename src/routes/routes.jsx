import Home from "../pages/Home";
import Post from "../pages/Post";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/posts/:id",
    element: <Post />,
  },
];

export default routes;
