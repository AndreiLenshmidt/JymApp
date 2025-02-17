// import { Pagination } from "@mui/material";
import Typography from "@mui/material/Typography";
import CalendarCustom from "../components/calendarCompts/customCalendar";

export default function CalendarPage() {
  return (
    <>
      <div>
        <Typography mt={2} maxWidth={590} textAlign={"center"}>
          Добро пожаловать на страницу календарь!
        </Typography>
        <Typography maxWidth={590} textAlign={"center"}>
          Здесь вы можете посмотреть и изменить расписание тренировок.
        </Typography>
      </div>
      {/* <Pagination count={10} color="primary" /> */}
      <CalendarCustom />
      <p></p>
    </>
  );
}
