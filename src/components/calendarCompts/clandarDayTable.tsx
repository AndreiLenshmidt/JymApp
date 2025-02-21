import { Box, Typography } from "@mui/material";
import { useJymAppStore } from "../../store/store";

export default function CalendarDayTable() {
  const trainInfo = useJymAppStore((store) => store.tranInfo);
  return (
    <Box height={"412px"} padding={"10px"}>
      <Typography component={"p"}>{trainInfo.date.toDateString()}</Typography>
      <Typography component={"p"}>{trainInfo.status}</Typography>
      <Typography component={"p"}>{trainInfo.traidingName}</Typography>
      <Typography component={"p"}>{trainInfo.info}</Typography>
    </Box>
  );
}
