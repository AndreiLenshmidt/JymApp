import { Box, Typography } from "@mui/material";
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
          padding: "10px 0",
          width: "100%",
          textAlign: "left",
          backgroundColor: "#a5d2ff",
        }}
        component={"header"}
      >
        {" "}
        <Typography fontSize="0.75rem" ml={3}>
          Добро пожаловать в JymApp!
        </Typography>
      </Box>
      <Outlet />
      <Box
        sx={{
          padding: "10px 0",
          width: "100%",
          textAlign: "left",
          backgroundColor: "#a5d2ff",
        }}
        component={"footer"}
      >
        <Typography fontSize="0.75rem" ml={3}>
          Разработчик: Lenshmidt A.
        </Typography>
        <Typography fontSize="0.75rem" ml={3}>
          lenshmidt.andrei@gmail.com
        </Typography>
        <Typography fontSize="0.75rem" ml={3}>
          тел: 8 (999) 635 47 59
        </Typography>
      </Box>
    </Box>
  );
}
