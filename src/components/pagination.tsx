import { IconButton, Paper, Typography } from "@mui/material";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Pagination() {
  const Mounth = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  const [mounth, setMounth] = useState<number>(0);

  const increaseMounth = () => {
    mounth > 10 ? setMounth(0) : setMounth(mounth + 1);
  };

  const decreaseMounth = () => {
    mounth < 1 ? setMounth(11) : setMounth(mounth - 1);
  };

  return (
    <>
      <Paper sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          aria-label="arrowback"
          size="large"
          onClick={decreaseMounth}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <Typography component="p" width={80} textAlign="center">
          {Mounth[mounth]}
        </Typography>
        <IconButton
          aria-label="arrowforward"
          size="large"
          onClick={increaseMounth}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Paper>
      <Paper></Paper>
    </>
  );
}
