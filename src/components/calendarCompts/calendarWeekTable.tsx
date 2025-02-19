import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useJymAppStore } from "../../store/store";

export default function CalendarWeekTable() {
  const pseudoTraidingInfo = useJymAppStore(
    (store) => store.pseudoTraidingInfo
  );
  const currentDay = useJymAppStore((store) => store.tranInfo.date);
  useEffect(() => {
    const elem = document.querySelector("[data-scroll-into-view=true]");
    elem?.scrollIntoView({ block: "center" });
  }, []);
  // стили для таблицы
  const tableDay = {
    height: "52px",
    padding: "10px",
    borderBottom: "1px solid #000",
    backgroundColor: "light-dark(#ededed, #696969)",
  };
  const tableDayTrain = {
    ...tableDay,
    backgroundColor: "light-dark( #68ddb0, #48876f)",
  };
  const tableDayCancel = {
    ...tableDay,
    backgroundColor: "light-dark( #ffa6a6, #9f3939)",
  };

  const [choosenDay, setChooDay] = useState<string | undefined>("0");

  const chooseDay = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const element = e.target as HTMLElement;
    // const parent = element.parentElement;
    if (element.tagName === "P") {
      // parent?.dataset.index && console.log(pseudoTraidingInfo[+parent.dataset.index]);
      element.parentElement && setChooDay(element.parentElement.dataset.index);
    } else {
      setChooDay(element.dataset.index);
    }
  };

  return (
    <Box
      sx={{
        height: "364px",
        maxWidth: "631",
        overflowY: "scroll",
      }}
      onClick={(e) => chooseDay(e)}
    >
      {pseudoTraidingInfo.map((item, index) => (
        <Box
          key={item.date.getDate() + 1253}
          sx={
            item.status === "тренировка"
              ? tableDayTrain
              : item.status === "отменена"
                ? tableDayCancel
                : tableDay
          }
          data-scroll-into-view={item.date.getDate() === currentDay.getDate()}
          data-index={index}
        >
          <Typography component={"p"} maxWidth={"631"}>
            {item.date.toDateString()} {item.traidingName} {item.status}{" "}
            {item.traidingName}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
