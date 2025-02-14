import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Layout from "./layouts/dashboard";
import DashboardPage from "./pages";
import SignInPage from "./pages/signin";
import TrainPage from "./pages/train";
import StatisticPage from "./pages/statistics";
import ProgrammPage from "./pages/programm";
import OptionsPage from "./pages/options";
import ExersisesPage from "./pages/exercises";
import CalendarPage from "./pages/calendar";
import NotFound from "./pages/notfound";

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: "/",
        Component: Layout,
        children: [
          {
            path: "",
            Component: DashboardPage,
          },
          {
            path: "train",
            Component: TrainPage,
          },
          {
            path: "statistics",
            Component: StatisticPage,
          },
          {
            path: "programm",
            Component: ProgrammPage,
          },
          {
            path: "options",
            Component: OptionsPage,
          },
          {
            path: "exersises",
            Component: ExersisesPage,
          },
          {
            path: "calendar",
            Component: CalendarPage,
          },
        ],
      },
      {
        path: "/sign-in",
        Component: SignInPage,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
