import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { memo, useState } from "react";
import type { TPseudoTraidind } from "../../types";

const DAYS = [
  { day: "ПН", idx: 1 },
  { day: "ВТ", idx: 2 },
  { day: "СР", idx: 3 },
  { day: "ЧТ", idx: 4 },
  { day: "ПТ", idx: 5 },
  { day: "СБ", idx: 6 },
  { day: "ВС", idx: 0 },
];
// Стили для ячеек таблицы
const tableCeil = {
  padding: "5px",
  borderRight: "1px solid var(--mui-palette-TableCell-border)",
  borderLeft: "1px solid var(--mui-palette-TableCell-border)",
  cursor: "pointer",
  height: "51px",
  verticalAlign: "top",
  boxSizing: "border-box",
  width: "90px",
  userSelect: "none",
};
const defaultTCeil = {
  backgroundColor: "light-dark( #cfceff, #41406f)",
  ...tableCeil,
};
const baseTCeil = {
  backgroundColor: "light-dark( #ededed, #696969)",
  ...tableCeil,
};
const currentTCeil = {
  backgroundColor: "light-dark( #fffa90, #758100)",
  ...tableCeil,
  borderLeft: "3px solid #ff5e5e",
};
const trainTCeil = {
  backgroundColor: "light-dark( #68ddb0, #48876f)",
  ...tableCeil,
};
const cancelTCeil = {
  backgroundColor: "light-dark( #ffa6a6, #9f3939)",
  ...tableCeil,
};
const ceilGetStyles = (i: Date, today: Date, status: string) => {
  if (
    i.getDate() === today.getDate() &&
    i.getMonth() === today.getMonth() &&
    i.getFullYear() === today.getFullYear()
  ) {
    return currentTCeil;
  } else if (status === "тренировка") {
    return trainTCeil;
  } else if (status === "отменена") {
    return cancelTCeil;
  } else {
    return i.getMonth() !== today.getMonth() ? baseTCeil : defaultTCeil;
  }
};

const CalendarTableMounth = memo(function CalendarTableMounth({
  pseudoTraidingInfo,
  mounth,
  allDays,
  setTrainInfo,
  currentDay,
  today,
}: {
  pseudoTraidingInfo: TPseudoTraidind;
  mounth: number;
  allDays: [Date];
  setTrainInfo: CallableFunction;
  currentDay: Date;
  today: Date;
}) {
  const [border, setBorder] = useState<HTMLElement | null>(null);

  const highlightCeil = (element: HTMLElement | null) => {
    border?.setAttribute("style", "");
    setBorder(element);
    element?.setAttribute("style", "outline: 2px solid #6f63fb");
    // console.dir(element);
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
    if (element.tagName === "TD") {
      highlightCeil(element);
    } else {
      highlightCeil(parentElement);
    }

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

  const getStatus = (i: Date, item: number, index: number) =>
    i.getDate() === pseudoTraidingInfo[item * 7 + index]?.date.getDate() &&
    i.getMonth() === pseudoTraidingInfo[item * 7 + index]?.date.getMonth() &&
    i.getFullYear() === pseudoTraidingInfo[item * 7 + index]?.date.getFullYear()
      ? pseudoTraidingInfo[item * 7 + index]?.status
      : "";

  return (
    <Table>
      <TableHead>
        <TableRow>
          {DAYS.map((item) => (
            <TableCell
              sx={{
                backgroundColor: "light-dark( #d9ffca, #336f35)",
                padding: "16px 32px",
                borderBottomWidth: "3px",
                userSelect: "none",
              }}
              key={item.day + 112}
            >
              {item.day}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {"012345".split("").map((item) => (
          <TableRow key={+item * 12} onClick={(e) => showDateInfo(e, +item)}>
            {allDays.slice(+item * 7, +item * 7 + 7).map((i, index) => (
              <TableCell
                key={index + 1234}
                sx={ceilGetStyles(i, today, getStatus(i, +item, index))}
              >
                <p>{i.getDate()}</p>
                <p style={{ fontSize: "12px" }}>
                  {" "}
                  {getStatus(i, +item, index)}
                </p>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
});

export { CalendarTableMounth };
