import { lazy } from "react";

const Welcome = lazy(() => import("./pages/WelcomeChats"));
const Chats = lazy(() => import("./pages/Chats"));

const routes = [
  /**
   * if not found redirect to homepage or another page
   * change this element to redirect 404 page for the example
   */
  {
    path: "*",
    restricted: false,
    component: Welcome,
  },
  {
    path: "/",
    restricted: false,
    component: Welcome,
  },
  {
    path: "/chats",
    restricted: false,
    component: Chats,
  },
];

export default routes;
