import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useJymAppStore } from "../../store/store";

// стили для таблицы
const tableDay = {
  height: "52px",
  padding: "10px",
  borderBottom: "1px solid #000",
  backgroundColor: "light-dark(#ededed, #696969)",
  userSelect: "none",
};
const tableDayTrain = {
  ...tableDay,
  backgroundColor: "light-dark( #68ddb0, #48876f)",
};
const tableDayCancel = {
  ...tableDay,
  backgroundColor: "light-dark( #ffa6a6, #9f3939)",
};

export default function CalendarWeekTable() {
  const pseudoTraidingInfo = useJymAppStore(
    (store) => store.pseudoTraidingInfo
  );
  const currentDay = useJymAppStore((store) => store.tranInfo.date);
  const [choosenDay, setChoosenDay] = useState<Element | null>(null);
  const setTrainInfo = useJymAppStore((store) => store.setTrainInfo);

  const highlightCeil = (element: Element | null) => {
    choosenDay?.setAttribute("style", "");
    setChoosenDay(element);
    element?.setAttribute("style", "outline: 2px solid #6f63fb");
  };

  useEffect(() => {
    const elem = document.querySelector("[data-scroll-into-view=true]");
    elem?.scrollIntoView({ block: "center" });
    highlightCeil(elem);
  }, []);

  const chooseDay = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const element = e.target as HTMLElement;
    if (element.tagName === "P") {
      element.parentElement && highlightCeil(element.parentElement);
      element?.parentElement?.dataset.index &&
        setTrainInfo(pseudoTraidingInfo[+element.parentElement.dataset.index]);
    } else {
      highlightCeil(element);
      element?.dataset?.index &&
        setTrainInfo(pseudoTraidingInfo[+element.dataset.index]);
    }
  };

  return (
    <Box
      sx={{
        height: "412px",
        maxWidth: "631px",
        overflowY: "scroll",
        padding: "2px",
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
