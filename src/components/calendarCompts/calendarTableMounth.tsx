import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { memo, useState } from "react";
import { useJymAppStore } from "../../store/store";
import { ceilGetStyles, tableHeadStyles } from "./styles";

const CalendarTableMounth = memo(function CalendarTableMounth() {
  const setTrainInfo = useJymAppStore((store) => store.setTrainInfo);
  const pseudoTraidingInfo = useJymAppStore(
    (store) => store.pseudoTraidingInfo
  );
  const RUDAYSOFWEEK = useJymAppStore((store) => store.RUDAYSOFWEEK);
  const currentDay = useJymAppStore((store) => store.currentDay);
  const allDays = useJymAppStore((store) => store.allDays);
  const today = new Date(Date.now());
  const mounth = useJymAppStore((store) => store.mounth);
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
          {RUDAYSOFWEEK.map((item) => (
            <TableCell sx={tableHeadStyles} key={item.day + 112}>
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
