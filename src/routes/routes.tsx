import Home from "@/modules/Home/Home";
import Main from "@/modules/Main/Main";
import Task from "@/modules/Task/Task";
import User from "@/modules/User/User";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/task",
        element: <Task></Task>,
      },
      {
        path: "/user",
        element: <User></User>,
      },
    ],
  },
]);

export default routes;
