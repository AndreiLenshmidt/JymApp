import { Box } from "@mui/material";
import { Outlet } from "react-router";
import { type Navigation, type Session } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import { useMemo, useState } from "react";

export default function AuthLayout() {
  const [session, setSession] = useState<Session | null>(null);
  const NAVIGATION: Navigation = [
    {
      kind: "header",
      title: "Main items",
    },
    {
      title: "Dashboard",
      icon: <DashboardIcon />,
    },
    {
      segment: "test",
      title: "Orders",
      icon: <ShoppingCartIcon />,
    },
  ];

  const BRANDING = {
    title: "My Toolpad Core App",
  };

  const authentication = useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: "Андрей",
            email: "lenshmidt.andrei@gmail.com",
            image:
              "https://web.telegram.org/79ba22d0-f498-4d78-ac12-eeb30b8b53c6",
          },
        });
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  return (
    <ReactRouterAppProvider
      navigation={NAVIGATION}
      branding={BRANDING}
      // session={session}
      authentication={authentication}
    >
      <DashboardLayout>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "calc(100vh - 56px)",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Outlet />
        </Box>
      </DashboardLayout>
    </ReactRouterAppProvider>
  );
}
