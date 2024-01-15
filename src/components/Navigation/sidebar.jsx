import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as luIcons from "react-icons/lu";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Explore",
    path: "/explore",
    icon: <FaIcons.FaSearch />,
    cName: "nav-text",
  },
  {
    title: "Notification",
    path: "/notification",
    icon: <IoIcons.IoMdNotifications />,
    cName: "nav-text",
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Lists",
    path: "/lists",
    icon: <IoIcons.IoMdList />,
    cName: "nav-text",
  },
  {
    title: "Communities",
    path: "/communities",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <IoIcons.IoMdPerson />,
    cName: "nav-text",
  },
  {
    title: "More",
    path: "/more",
    icon: <luIcons.LuMoreHorizontal />,
    cName: "nav-text",
  },
];
