import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TPseudoTraidind } from "../types";

// interface IBearStore {
//   bears: number;
//   increasePopulation: () => void;
//   removeAllBears: () => void;
// }
// store без дублирования инфы в localStore
// export const useBearStore = create<IBearStore>((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
// }));
// middlewair позволяющий сохранить все в localStore
// export const useBearStore = create<IBearStore>()(
//   persist(
//     (set) => ({
//       bears: 0,
//       increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//       removeAllBears: () => set({ bears: 0 }),
//     }),
//     { name: "bear-storage" }
//   )
// );

interface IJymAppStore {
  currentDay: Date;
  pseudoTraidingInfo: TPseudoTraidind;
  MOUNTH: Array<string>;
  mounth: number;
  setMounth: (mounth: number) => void;
  firstDay: Date;
  setFirstDay: (firstDay: Date) => void;
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

export const useJymAppStore = create<IJymAppStore>()(
  persist(
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
      mounth: currentDay.getMonth(),
      setMounth: (mounth: number) => set({ mounth: mounth }),
      firstDay: getFirstDay(currentDay.getFullYear(), currentDay.getMonth()),
      setFirstDay: (firstDay: Date) => set({ firstDay: firstDay }),
    }),
    {
      name: "jym-store",
      partialize: (state) => ({
        pseudoTraidingInfo: state.pseudoTraidingInfo,
        MOUNTH: state.MOUNTH,
      }),
    }
  )
);
