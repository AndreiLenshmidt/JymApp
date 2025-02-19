import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TPseudoTraidind, TTrainInfo } from "../types";

interface IJymAppStore {
  currentDay: Date;
  pseudoTraidingInfo: TPseudoTraidind;
  MOUNTH: Array<string>;
  RUDAYSOFWEEK: Array<{ day: string; idx: number }>;
  mounth: number;
  setMounth: (mounth: number) => void;
  increaseMounth: (mounth: number) => void;
  decreaseMounth: (mounth: number) => void;
  firstDay: Date;
  setFirstDay: (firstDay: Date) => void;
  allDays: [Date];
  setAllDays: (allDays: [Date]) => void;
  tranInfo: TTrainInfo;
  setTrainInfo: (train: TTrainInfo) => void;
}

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

export const useJymAppStore = create<IJymAppStore>()(
  // persist(
  (set) => ({
    currentDay: currentDay,
    pseudoTraidingInfo: [
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
    ],
    MOUNTH: [
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
    ],
    RUDAYSOFWEEK: [
      { day: "ПН", idx: 1 },
      { day: "ВТ", idx: 2 },
      { day: "СР", idx: 3 },
      { day: "ЧТ", idx: 4 },
      { day: "ПТ", idx: 5 },
      { day: "СБ", idx: 6 },
      { day: "ВС", idx: 0 },
    ],
    mounth: currentDay.getMonth(),
    setMounth: (mounth) => set({ mounth: mounth }),
    increaseMounth: (mounth: number) => {
      if (mounth > 10) {
        set({
          mounth: 0,
          firstDay: getFirstDay(currentDay.getFullYear() + 1, mounth + 1),
          allDays: getAllDays(
            getFirstDay(currentDay.getFullYear(), mounth + 1)
          ),
        });
        currentDay.setFullYear(currentDay.getFullYear() + 1);
      } else {
        set({
          mounth: mounth + 1,
          firstDay: getFirstDay(currentDay.getFullYear(), mounth + 1),
          allDays: getAllDays(
            getFirstDay(currentDay.getFullYear(), mounth + 1)
          ),
        });
      }
    },
    decreaseMounth: (mounth: number) => {
      if (mounth > 10) {
        set({
          mounth: 11,
          firstDay: getFirstDay(currentDay.getFullYear() - 1, mounth - 1),
          allDays: getAllDays(
            getFirstDay(currentDay.getFullYear(), mounth - 1)
          ),
        });
        currentDay.setFullYear(currentDay.getFullYear() - 1);
      } else {
        set({
          mounth: mounth - 1,
          firstDay: getFirstDay(currentDay.getFullYear(), mounth - 1),
          allDays: getAllDays(
            getFirstDay(currentDay.getFullYear(), mounth - 1)
          ),
        });
      }
    },
    firstDay: getFirstDay(currentDay.getFullYear(), currentDay.getMonth()),
    setFirstDay: (firstDay) => set({ firstDay: firstDay }),
    allDays: getAllDays(
      getFirstDay(currentDay.getFullYear(), currentDay.getMonth())
    ),
    setAllDays: (allDays) => set({ allDays: allDays }),
    tranInfo: {
      date: new Date(Date.now()),
      status: "",
      info: "",
      traidingName: "",
    },
    setTrainInfo: (trainInfo) => set({ tranInfo: trainInfo }),
  })
  // {
  //   name: "jym-store",
  //   partialize: (state) => ({
  //     pseudoTraidingInfo: state.pseudoTraidingInfo,
  //     MOUNTH: state.MOUNTH,
  //   }),
  // }
  // )
);
