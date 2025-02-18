import { Box, Typography } from "@mui/material";
import { TPseudoTraidind, TTrainInfo } from "../../types";
import { useState } from "react";

export default function CalendarWeekTable({
  trainInfo,
  currentDay,
}: {
  trainInfo: TPseudoTraidind;
  currentDay: Date;
}) {
  return (
    <Box
      sx={{
        height: "364px",
        maxWidth: "631",
        overflowY: "scroll",
      }}
    >
      {trainInfo.map((item) => (
        <Box
          key={item.date.getDate() + 1253}
          sx={{
            height: "52px",
            padding: "10px",
            borderBottom: "1px solid #000",
            backgroundColor: "light-dark(#ededed, #696969)",
          }}
        >
          <Typography maxWidth={"631"}>{item.date.toDateString()}</Typography>
        </Box>
      ))}
    </Box>
  );
}
