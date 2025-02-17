import {
  Box,
  Button,
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
import EditNoteIcon from "@mui/icons-material/EditNote";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";

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
const DESCRIPT = [
  { color: "#FF0000", desc: "День тренировки" },
  { color: "#00FF00", desc: "Тренировка отмененна" },
  { color: "#0000FF", desc: "День не распланирован" },
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
  const allDays: [Date] = [new Date(firstDayOfTable)];
  for (let i = 1; i < 42; i++) {
    firstDayOfTable.setDate(firstDayOfTable.getDate() + 1);
    allDays.push(new Date(firstDayOfTable));
  }
  return allDays;
};
// Стили для ячеек таблицы
const tableCeil = {
  padding: "5px",
  borderRight: "1px solid var(--mui-palette-TableCell-border)",
  borderLeft: "1px solid var(--mui-palette-TableCell-border)",
  cursor: "pointer",
  height: "51px",
};
const defaultTableCeil = {
  backgroundColor: "#cfceff",
  ...tableCeil,
};
const baseTableCeil = {
  backgroundColor: "#ededed",
  ...tableCeil,
};
const currentTableCeil = {
  backgroundColor: "#fffa90",
  ...tableCeil,
};

const pseudoTraidingInfo: Array<{
  date: Date;
  status: string;
  info: string;
  traidingName: string;
}> = [
  {
    date: new Date(2025, 1, -4),
    status: "отдых",
    info: "сегодня день отдыха",
    traidingName: "",
  },
  {
    date: new Date(2025, 1, -3),
    status: "отдых",
    info: "сегодня день отдыха",
    traidingName: "",
  },
  {
    date: new Date(2025, 1, -2),
    status: "отдых",
    info: "сегодня день отдыха",
    traidingName: "",
  },
  {
    date: new Date(2025, 1, -1),
    status: "отдых",
    info: "сегодня день отдыха",
    traidingName: "",
  },
  {
    date: new Date(2025, 1, 0),
    status: "отдых",
    info: "сегодня день отдыха",
    traidingName: "",
  },
  {
    date: new Date(2025, 1, 1),
    status: "отдых",
    info: "сегодня день отдыха",
    traidingName: "",
  },
  {
    date: new Date(2025, 1, 2),
    status: "отдых",
    info: "сегодня день отдыха",
    traidingName: "",
  },
  {
    date: new Date(2025, 1, 3),
    status: "отдых",
    info: "сегодня день отдыха",
    traidingName: "",
  },
  {
    date: new Date(2025, 1, 4),
    status: "отдых",
    info: "сегодня день отдыха",
    traidingName: "",
  },
  {
    date: new Date(2025, 1, 5),
    status: "отдых",
    info: "сегодня день отдыха",
    traidingName: "",
  },
  {
    date: new Date(2025, 1, 6),
    status: "отдых",
    info: "сегодня день отдыха",
    traidingName: "",
  },
  {
    date: new Date(2025, 1, 7),
    status: "отдых",
    info: "сегодня день отдыха",
    traidingName: "",
  },
  {
    date: new Date(2025, 1, 8),
    status: "отдых",
    info: "сегодня день отдыха",
    traidingName: "",
  },
  {
    date: new Date(2025, 1, 9),
    status: "отдых",
    info: "сегодня день отдыха",
    traidingName: "",
  },
  {
    date: new Date(2025, 1, 10),
    status: "отдых",
    info: "сегодня день отдыха",
    traidingName: "",
  },
  {
    date: new Date(2025, 1, 11),
    status: "отдых",
    info: "сегодня день отдыха",
    traidingName: "",
  },
  {
    date: new Date(2025, 1, 12),
    status: "отдых",
    info: "сегодня день отдыха",
    traidingName: "",
  },
  {
    date: new Date(2025, 1, 13),
    status: "отдых",
    info: "сегодня день отдыха",
    traidingName: "",
  },
  {
    date: new Date(2025, 1, 14),
    status: "отменена",
    info: "пропущена тренировка спины",
    traidingName: "тренировка спины",
  },
  {
    date: new Date(2025, 1, 15),
    status: "отдых",
    info: "сегодня день отдыха",
    traidingName: "",
  },
  {
    date: new Date(2025, 1, 16),
    status: "отдых",
    info: "сегодня день отдыха",
    traidingName: "",
  },
  {
    date: new Date(2025, 1, 17),
    status: "тренировка",
    info: "сегодня тренировка",
    traidingName: "тренировка рук",
  },
  {
    date: new Date(2025, 1, 18),
    status: "отдых",
    info: "сегодня день отдыха",
    traidingName: "",
  },
  {
    date: new Date(2025, 1, 19),
    status: "отдых",
    info: "сегодня день отдыха",
    traidingName: "",
  },
  {
    date: new Date(2025, 1, 20),
    status: "тренировка",
    info: "сегодня тренировка",
    traidingName: "тренировка груди",
  },
];

export default function CalendarCustom() {
  const [mounth, setMounth] = useState<number>(currentDay.getMonth());
  const [today, setToday] = useState(currentDay);
  const [firstDay, setFirstDay] = useState(getFirstDay(2025, mounth));
  const [allDays, setAllDays] = useState(getAllDays(firstDay));
  const [tranInfo, setTrainInfo] = useState({
    date: today,
    status: "",
    info: "",
    traidingName: "",
  });

  const increaseMounth = () => {
    if (mounth > 10) {
      setMounth(0);
      setFirstDay(getFirstDay(currentDay.getFullYear() + 1, mounth + 1));
      setAllDays(getAllDays(getFirstDay(currentDay.getFullYear(), mounth + 1)));
      currentDay.setFullYear(currentDay.getFullYear() + 1);
    } else {
      setMounth(mounth + 1);
      setFirstDay(getFirstDay(currentDay.getFullYear(), mounth + 1));
      setAllDays(getAllDays(getFirstDay(currentDay.getFullYear(), mounth + 1)));
    }
  };

  const decreaseMounth = () => {
    if (mounth < 1) {
      setMounth(11);
      setFirstDay(getFirstDay(currentDay.getFullYear() - 1, mounth - 1));
      setAllDays(getAllDays(getFirstDay(currentDay.getFullYear(), mounth - 1)));
      currentDay.setFullYear(currentDay.getFullYear() - 1);
    } else {
      setMounth(mounth - 1);
      setFirstDay(getFirstDay(currentDay.getFullYear(), mounth - 1));
      setAllDays(getAllDays(getFirstDay(currentDay.getFullYear(), mounth - 1)));
    }
  };

  const showDateInfo = (
    e: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    row: number
  ) => {
    const element = e.target as HTMLElement;
    const parentElement = element.parentElement;
    const getDefaultTrain = (date: Date) => {
      return {
        date: date,
        status: "",
        info: "",
        traidingName: "",
      };
    };

    if (element.tagName !== "P" && element.tagName !== "TD") return;

    const index =
      parseInt(element?.textContent || "NAN") ||
      parseInt(parentElement?.textContent || "NAN");

    if (row < 4) {
      const date = allDays.findIndex((item) => index === item.getDate());
      setTrainInfo(
        mounth === today.getMonth()
          ? pseudoTraidingInfo[date] ||
              getDefaultTrain(new Date(currentDay.getFullYear(), mounth, index))
          : getDefaultTrain(new Date(currentDay.getFullYear(), mounth, index))
      );
      // console.log(pseudoTraidingInfo[date]);
    } else {
      const date = allDays.findLastIndex((item) => index === item.getDate());
      setTrainInfo(
        pseudoTraidingInfo[date] ||
          getDefaultTrain(
            new Date(
              today.getFullYear(),
              index < 20 ? mounth + 1 : mounth,
              index
            )
          )
      );
    }
  };

  return (
    <div>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 1,
          boxShadow: "0 0 2px 1px #c5c5c5",
        }}
      >
        <IconButton
          aria-label="arrowback"
          size="large"
          onClick={decreaseMounth}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <Typography component="p" width={100} textAlign="center">
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
      <Paper sx={{ boxShadow: "0 0 2px 1px #c5c5c5" }}>
        <Typography padding="10px 32px">
          {MOUNTH[mounth]} {currentDay.getFullYear()}
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              {DAYS.map((item) => (
                <TableCell
                  sx={{
                    backgroundColor: "#d9ffca",
                    padding: "16px 32px",
                    borderBottomWidth: "3px",
                  }}
                  key={item.day}
                >
                  {item.day}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {"012345".split("").map((item) => (
              <TableRow
                key={+item * 12}
                onClick={(e) => showDateInfo(e, +item)}
              >
                {allDays.slice(+item * 7, +item * 7 + 7).map((i, index) => (
                  <TableCell
                    key={index + Date.now()}
                    sx={
                      i.getDate() === today.getDate() &&
                      i.getMonth() === today.getMonth() &&
                      i.getFullYear() === today.getFullYear()
                        ? currentTableCeil
                        : i.getMonth() !== today.getMonth()
                          ? baseTableCeil
                          : defaultTableCeil
                    }
                  >
                    <p>{i.getDate()}</p>
                    <p>
                      {" "}
                      {i.getDate() ===
                        pseudoTraidingInfo[+item * 7 + index]?.date.getDate() &&
                      i.getMonth() ===
                        pseudoTraidingInfo[
                          +item * 7 + index
                        ]?.date.getMonth() &&
                      i.getFullYear() ===
                        pseudoTraidingInfo[
                          +item * 7 + index
                        ]?.date.getFullYear()
                        ? pseudoTraidingInfo[+item * 7 + index]?.status
                        : ""}
                    </p>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <Paper
        sx={{
          width: "590px",
          padding: "20px",
          boxShadow: "0 0 2px 1px #c5c5c5",
          minHeight: "136px",
          display: "flex",
          justifyContent: "space-between",
          mt: 1,
        }}
      >
        <div>
          <Typography component="p">
            {tranInfo?.date?.toDateString()}
          </Typography>
          <Typography component="p">{tranInfo?.status}</Typography>
          <Typography component="p">{tranInfo?.traidingName}</Typography>
          <Typography component="p">{tranInfo?.info}</Typography>
        </div>
        <div>
          <Button
            variant="outlined"
            sx={{ height: "36px", display: "block", mb: "15px" }}
          >
            <EditNoteIcon />
          </Button>
          <Button variant="outlined" sx={{ height: "36px", display: "block" }}>
            <EditCalendarIcon />
          </Button>
        </div>
      </Paper>
      <Box
        sx={{
          width: "590px",
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
    </div>
  );
}
