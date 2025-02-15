import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MOUNTH = [
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
const DAYS = [
  { day: "ПН", idx: 1 },
  { day: "ВТ", idx: 2 },
  { day: "СР", idx: 3 },
  { day: "ЧТ", idx: 4 },
  { day: "ПТ", idx: 5 },
  { day: "СБ", idx: 6 },
  { day: "ВС", idx: 0 },
];
const currentDay = new Date(Date.now());
const getFirstDay = (year: number, mounth: number) => {
  const firstDayOfTable = new Date(year, mounth, 1);
  if (firstDayOfTable.getDay() > 1) {
    firstDayOfTable.setDate(2 - firstDayOfTable.getDay());
  } else if (firstDayOfTable.getDay() === 0) {
    firstDayOfTable.setDate(firstDayOfTable.getDay() - 5);
  }
  return firstDayOfTable;
};
const getAllDays = (firstDayOfTable: Date) => {
  const allDays: [number] = [firstDayOfTable.getDate()];
  for (let i = 1; i < 42; i++) {
    firstDayOfTable.setDate(firstDayOfTable.getDate() + 1);
    allDays.push(firstDayOfTable.getDate());
  }
  return allDays;
};

const tableCeil = {
  backgroundColor: "#cfceff",
};

export default function Pagination() {
  const [mounth, setMounth] = useState<number>(currentDay.getMonth());
  const [today, setToday] = useState(currentDay);
  const [firstDay, setFirstDay] = useState(getFirstDay(2025, mounth));
  const [allDays, setAllDays] = useState(getAllDays(firstDay));

  const increaseMounth = () => {
    mounth > 10 ? setMounth(0) : setMounth(mounth + 1);
    setFirstDay(getFirstDay(2025, mounth + 1));
    setAllDays(getAllDays(getFirstDay(2025, mounth + 1)));
  };

  const decreaseMounth = () => {
    mounth < 1 ? setMounth(11) : setMounth(mounth - 1);
    setFirstDay(getFirstDay(2025, mounth - 1));
    setAllDays(getAllDays(getFirstDay(2025, mounth - 1)));
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
          {MOUNTH[mounth]}
        </Typography>
        <IconButton
          aria-label="arrowforward"
          size="large"
          onClick={increaseMounth}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Paper>
      <Paper>
        <Typography>
          {MOUNTH[mounth]} {today.getFullYear()}
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              {DAYS.map((item) => (
                <TableCell sx={{ backgroundColor: "#d9ffca" }} key={item.day}>
                  {item.day}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {allDays.slice(0, 7).map((item, index) => (
                <TableCell
                  sx={item > 10 ? { backgroundColor: "#ededed" } : tableCeil}
                  key={index + Date.now()}
                >
                  {item}
                </TableCell>
              ))}
            </TableRow>
            {"1234".split("").map((item) => (
              <TableRow key={+item * 12}>
                {allDays.slice(+item * 7, +item * 7 + 7).map((item, index) => (
                  <TableCell
                    key={index + Date.now()}
                    sx={
                      item < index ? { backgroundColor: "#ededed" } : tableCeil
                    }
                  >
                    {item}
                  </TableCell>
                ))}
              </TableRow>
            ))}
            <TableRow>
              {allDays.slice(35).map((item, index) => (
                <TableCell
                  key={index + Date.now()}
                  sx={item < 15 ? { backgroundColor: "#ededed" } : tableCeil}
                >
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
      <p>vbwjgbju</p>
    </>
  );
}
