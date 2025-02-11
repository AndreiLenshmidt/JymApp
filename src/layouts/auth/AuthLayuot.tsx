import { Box } from "@mui/material";
import { Outlet } from "react-router";

export default function AuthLayout() {
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
          backgroundColor: "#a5d2ff",
        }}
        component={"header"}
      >
        <img src="#" alt="logo" />
      </Box>
      <Outlet />
      <Box
        sx={{
          padding: "20px 0",
          width: "100%",
          textAlign: "center",
          backgroundColor: "#a5d2ff",
        }}
        component={"footer"}
      ></Box>
    </Box>
  );
}
