import { Box } from "@mui/material";
import { Outlet } from "react-router";
import { type Navigation } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";

export default function AuthLayout() {
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

  return (
    <ReactRouterAppProvider navigation={NAVIGATION} branding={BRANDING}>
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
