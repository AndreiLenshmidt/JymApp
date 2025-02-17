import { Box, Typography } from "@mui/material";

const DESCRIPT = [
  { color: "light-dark( #68ddb0, #48876f)", desc: "День тренировки" },
  {
    color: "light-dark( #ffa6a6, #9f3939)",
    desc: "Тренировка пропущена или отменена",
  },
  { color: "light-dark( #cfceff, #41406f)", desc: "День не распланирован" },
];

export default function DescCalendar() {
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
      {DESCRIPT.map((item) => (
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
