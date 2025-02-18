import {
  Box,
  Button,
  IconButton,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EditNoteIcon from "@mui/icons-material/EditNote";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import DayDescription from "./dayDescription";
import type { TPseudoTraidind } from "../../types";

import DescCalendar from "./descCalendar";
import { CalendarTableMounth } from "./calendarTableMounth";
import CalendarWeekTable from "./calendarWeekTable";
import CalendarDayTable from "./clandarDayTable";

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

const pseudoTraidingInfo: TPseudoTraidind = [
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
    status: "тренировка",
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
  {
    date: new Date(2025, 1, 21),
    status: "тренировка",
    info: "сегодня тренировка",
    traidingName: "тренировка груди",
  },
  {
    date: new Date(2025, 1, 22),
    status: "тренировка",
    info: "сегодня тренировка",
    traidingName: "тренировка груди",
  },
  {
    date: new Date(2025, 1, 23),
    status: "тренировка",
    info: "сегодня тренировка",
    traidingName: "тренировка груди",
  },
  {
    date: new Date(2025, 1, 24),
    status: "тренировка",
    info: "сегодня тренировка",
    traidingName: "тренировка груди",
  },
];

const flexCenter = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function CalendarCustom() {
  const [mounth, setMounth] = useState<number>(currentDay.getMonth());
  const [today, _] = useState(currentDay);
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
  const [value, setValue] = useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <Paper
        sx={{
          ...flexCenter,
          mb: 1,
          boxShadow: "0 0 2px 1px #c5c5c5",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
          centered
          sx={{ mb: 1 }}
        >
          <Tab value="three" label="День" />
          <Tab value="two" label="Неделя" />
          <Tab value="one" label="Месяц" />
        </Tabs>
      </Paper>
      <Paper sx={{ boxShadow: "0 0 2px 1px #c5c5c5" }}>
        <Box sx={flexCenter}>
          <IconButton
            aria-label="arrowback"
            size="large"
            onClick={decreaseMounth}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <Typography component="p" width={150} textAlign="center">
            {MOUNTH[mounth]} {currentDay.getFullYear()}
          </Typography>
          <IconButton
            aria-label="arrowforward"
            size="large"
            onClick={increaseMounth}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
        {value === "one" ? (
          <CalendarTableMounth
            pseudoTraidingInfo={pseudoTraidingInfo}
            mounth={mounth}
            allDays={allDays}
            setTrainInfo={setTrainInfo}
            currentDay={currentDay}
            today={today}
          />
        ) : value === "two" ? (
          <CalendarWeekTable
            trainInfo={pseudoTraidingInfo}
            currentDay={tranInfo.date}
          />
        ) : (
          <CalendarDayTable />
        )}
      </Paper>
      <Paper
        sx={{
          width: "631px",
          padding: "20px",
          boxShadow: "0 0 2px 1px #c5c5c5",
          minHeight: "136px",
          display: "flex",
          justifyContent: "space-between",
          mt: 1,
        }}
      >
        <DayDescription
          info={tranInfo?.info}
          status={tranInfo?.status}
          date={tranInfo?.date}
          traidingName={tranInfo?.traidingName}
        />
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
      <DescCalendar />
    </div>
  );
}
