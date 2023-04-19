import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import SingleRoom from "../components/SingleRoom/SingleRoom";
import PrivateRote from "../PrivateRote/PrivateRote";
import About from "../pages/About/About";

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/room/:id",
        element: (
          <PrivateRote>
            <SingleRoom />
          </PrivateRote>
        ),
      },
    ],
  },
]);

export default route;
