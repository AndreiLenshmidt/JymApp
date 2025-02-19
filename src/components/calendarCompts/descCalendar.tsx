import { Box, Typography } from "@mui/material";
import { useJymAppStore } from "../../store/store";

export default function DescCalendar() {
  const CALENDARDESCR = useJymAppStore((store) => store.CALENDARDESCR);
  return (
    <Box
      sx={{
        width: "631px",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        mt: 1,
      }}
    >
      {CALENDARDESCR.map((item) => (
        <Box display="flex" key={item.color + "#$%%"} flexBasis="33%">
          <Box
            sx={{
              backgroundColor: `${item.color}`,
              width: "30px",
              height: "30px",
              flexShrink: 0,
            }}
          ></Box>
          <Typography
            paddingLeft={3}
            component="p"
            lineHeight="1.2"
            fontSize="12px"
          >
            {item.desc}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
