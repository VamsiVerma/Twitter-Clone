import "./App.css";
import * as React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Explore from "./Routes/explore";
import Home from "./Routes/home";
import Notification from "./Routes/notification";
import Messages from "./Routes/messages";
import Lists from "./Routes/lists";
import Communities from "./Routes/communities";
import Profile from "./Routes/Profile";
import More from "./Routes/More";
import Navigation from "./components/Navigation/navigation";

const AppLayout = () => (
  <React.Fragment>
    <Navigation />
    <Outlet />
  </React.Fragment>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "Explore",
        element: <Explore />,
      },
      {
        path: "Notification",
        element: <Notification />,
      },
      {
        path: "Messages",
        element: <Messages />,
      },
      {
        path: "Lists",
        element: <Lists />,
      },
      {
        path: "Communities",
        element: <Communities />,
      },
      {
        path: "Profile",
        element: <Profile />,
      },
      {
        path: "More",
        element: <More />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div id="container" className={`p-4`}>
      <div id="nav-bar" className={`nav-bar`}>
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;
