import LinearProgress from "@mui/material/LinearProgress";
import { Outlet, Navigate, useLocation } from "react-router";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { Account } from "@toolpad/core/Account";
import { useSession } from "../SessionContext";
import { Box } from "@mui/material";

function CustomAccount() {
  return (
    <Account
      slotProps={{
        preview: { slotProps: { avatarIconButton: { sx: { border: "0" } } } },
      }}
    />
  );
}

export default function Layout() {
  const { session, loading } = useSession();
  const location = useLocation();

  if (loading) {
    return (
      <div style={{ width: "100%" }}>
        <LinearProgress />
      </div>
    );
  }

  if (!session) {
    // Add the `callbackUrl` search parameter
    const redirectTo = `/sign-in?callbackUrl=${encodeURIComponent(location.pathname)}`;

    return <Navigate to={redirectTo} replace />;
  }

  return (
    <DashboardLayout slots={{ toolbarAccount: CustomAccount }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "calc(100vh - 65px)",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Outlet />
      </Box>
    </DashboardLayout>
  );
}
