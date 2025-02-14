import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Outlet } from "react-router";
import type { User } from "firebase/auth";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import type { Navigation, Authentication } from "@toolpad/core/AppProvider";
import {
  firebaseSignOut,
  signInWithGoogle,
  onAuthStateChanged,
} from "./firebase/auth";
import SessionContext, { type Session } from "./SessionContext";
import { useEffect, useMemo, useState } from "react";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    title: "Главная",
    icon: <DashboardIcon />,
  },
  {
    segment: "train",
    title: "Тренировки",
    icon: <FitnessCenterIcon />,
  },
  {
    segment: "statistics",
    title: "Статистика",
    icon: <QueryStatsIcon />,
  },
  {
    segment: "programm",
    title: "Программа тренировок",
    icon: <EditNoteIcon />,
  },
  {
    segment: "options",
    title: "Настройки",
    icon: <ManageAccountsIcon />,
  },
  {
    segment: "exersises",
    title: "Упражнения",
    icon: <SportsGymnasticsIcon />,
  },
  {
    segment: "calendar",
    title: "Календарь",
    icon: <CalendarMonthIcon />,
  },
];

const BRANDING = {
  logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
  title: "", // Если передать пустую строку, то можно кастомизировать лого через img
  homeUrl: "/toolpad/core/introduction",
};

const AUTHENTICATION: Authentication = {
  signIn: signInWithGoogle,
  signOut: firebaseSignOut,
};

export default function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  const sessionContextValue = useMemo(
    () => ({
      session,
      setSession,
      loading,
    }),
    [session, loading]
  );

  useEffect(() => {
    // Returns an `unsubscribe` function to be called during teardown
    const unsubscribe = onAuthStateChanged((user: User | null) => {
      if (user) {
        setSession({
          user: {
            name: user.displayName || "",
            email: user.email || "",
            image: user.photoURL || "",
          },
        });
      } else {
        setSession(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <ReactRouterAppProvider
      navigation={NAVIGATION}
      branding={BRANDING}
      session={session}
      authentication={AUTHENTICATION}
    >
      <SessionContext.Provider value={sessionContextValue}>
        <Outlet />
      </SessionContext.Provider>
    </ReactRouterAppProvider>
  );
}
