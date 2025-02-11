import { Box } from "@mui/material";
import { Outlet } from "react-router";

export default function UnAuthLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          padding: "20px 0",
          width: "100%",
          textAlign: "center",
          backgroundColor: "#1976d22e",
        }}
        component={"header"}
      >
        header
      </Box>
      <Outlet />
      <Box
        sx={{
          padding: "20px 0",
          width: "100%",
          textAlign: "center",
          backgroundColor: "#1976d22e",
        }}
        component={"footer"}
      >
        footer
      </Box>
    </Box>
  );
}
