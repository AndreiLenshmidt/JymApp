import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { memo, useEffect, useState } from "react";
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
  const [border, setBorder] = useState<Element | null>(
    document.querySelector("[data-today=true]")
  );

  useEffect(() => {
    const elem = document.querySelector("[data-today=true]");
    const click = new Event("click");
    elem && showDateInfo(click, elem);
  }, []);

  const highlightCeil = (element: Element | null) => {
    border?.setAttribute("style", "");
    setBorder(element);
    element?.setAttribute("style", "outline: 2px solid #6f63fb");
  };

  const showDateInfo = (
    e: React.MouseEvent<HTMLTableSectionElement, MouseEvent> | Event,
    elem?: Element
  ) => {
    const element = (elem || e?.target) as HTMLElement;
    const parentElement = element?.parentElement;
    const getDefaultTrain = (date: Date) => {
      return {
        date: date,
        status: "",
        info: "",
        traidingName: "",
      };
    };

    if (element && element.tagName === "P" && parentElement?.dataset.idxCeil) {
      highlightCeil(parentElement);
      mounth === currentDay.getMonth() &&
      pseudoTraidingInfo[+parentElement.dataset.idxCeil]
        ? setTrainInfo(pseudoTraidingInfo[+parentElement.dataset.idxCeil])
        : setTrainInfo(
            getDefaultTrain(allDays[+parentElement?.dataset.idxCeil])
          );
    } else if (element && element.tagName === "TD" && element.dataset.idxCeil) {
      // console.log(element.dataset.idxCeil);
      highlightCeil(element);
      mounth === currentDay.getMonth() &&
      pseudoTraidingInfo[+element.dataset.idxCeil]
        ? setTrainInfo(pseudoTraidingInfo[+element.dataset.idxCeil])
        : setTrainInfo(getDefaultTrain(allDays[+element.dataset.idxCeil]));
    } else {
      return;
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
      <TableBody id="table-body" onClick={(e) => showDateInfo(e)}>
        {"012345".split("").map((item) => (
          <TableRow key={+item * 12}>
            {allDays.slice(+item * 7, +item * 7 + 7).map((i, index) => (
              <TableCell
                data-idx-ceil={+item * 7 + index}
                data-today={
                  i.getMonth() === today.getMonth() &&
                  i.getDate() === today.getDate()
                }
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
