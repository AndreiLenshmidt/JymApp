import {
  Backdrop,
  Box,
  Button,
  Fade,
  IconButton,
  Modal,
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
import DescCalendar from "./descCalendar";
import { CalendarTableMounth } from "./calendarTableMounth";
import CalendarWeekTable from "./calendarWeekTable";
import CalendarDayTable from "./clandarDayTable";
import { useJymAppStore } from "../../store/store";
import { dayDescBoxStyles, flexCenter, modalStyle } from "./styles";
import { useModal } from "./useModal";
import { createPortal } from "react-dom";
import ChangeTrainInfo from "./changeTrainInfo";

export default function CalendarCustom() {
  const currentDay = useJymAppStore((store) => store.currentDay);
  const MOUNTH = useJymAppStore((store) => store.MOUNTH);
  const mounth = useJymAppStore((store) => store.mounth);
  const increaseMounth = useJymAppStore((store) => store.increaseMounth);
  const decreaseMounth = useJymAppStore((store) => store.decreaseMounth);

  const [value, setValue] = useState("one");
  const { open, handleOpen, handleClose } = useModal();

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
          onChange={(_, newValue) => setValue(newValue)}
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
        <Box sx={value === "one" ? flexCenter : { display: "none" }}>
          <IconButton
            aria-label="arrowback"
            size="large"
            onClick={() => decreaseMounth(mounth)}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <Typography component="p" width={150} textAlign="center">
            {MOUNTH[mounth]} {currentDay.getFullYear()}
          </Typography>
          <IconButton
            aria-label="arrowforward"
            size="large"
            onClick={() => increaseMounth(mounth)}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
        {value === "one" ? (
          <CalendarTableMounth />
        ) : value === "two" ? (
          <CalendarWeekTable />
        ) : (
          <CalendarDayTable />
        )}
      </Paper>
      <Paper sx={dayDescBoxStyles}>
        <DayDescription />
        <div>
          <Button
            variant="outlined"
            sx={{ height: "36px", display: "block", mb: "15px" }}
            onClick={handleOpen}
          >
            <EditNoteIcon />
          </Button>
          <Button
            variant="outlined"
            sx={{ height: "36px", display: "block" }}
            onClick={handleOpen}
          >
            <EditCalendarIcon />
          </Button>
        </div>
      </Paper>
      <DescCalendar />
      {createPortal(
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={modalStyle}>
              <DayDescription />
              <ChangeTrainInfo />
            </Box>
          </Fade>
        </Modal>,
        document.body,
        "createTrain"
      )}
    </div>
  );
}
