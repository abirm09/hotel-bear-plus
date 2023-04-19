import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import SingleRoom from "../components/SingleRoom/SingleRoom";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/room/:id",
        element: <SingleRoom />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/room/${params.id}`),
      },
    ],
  },
]);

export default route;
