import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
// import { persist } from "zustand/middleware";
import {
  TExersise,
  TPseudoTraidind,
  TTrainInfo,
  TUserTrainExersises,
  TApproaches,
} from "../types";

interface IJymAppStore {
  currentDay: Date;
  pseudoTraidingInfo: TPseudoTraidind;
  MOUNTH: Array<string>;
  RUDAYSOFWEEK: Array<{ day: string; idx: number }>;
  CALENDARDESCR: Array<{ color: string; desc: string }>;
  STANDARTEXERSISES: Array<TExersise>;
  delMuscleGrop: (item: string, id: number) => void;
  addMuscleGroup: (muscle: string, id: number) => void;
  addApproach: (approch: TApproaches, id: number) => void;
  delApproach: (idExersise: number, idApproach: number) => void;
  changeApproachCount: (
    count: number,
    idExersise: number,
    idApproach: number
  ) => void;
  changeApproachWeight: (
    weight: number,
    idExersise: number,
    idApproach: number
  ) => void;
  changeApproachRest: (
    rest: number,
    idExersise: number,
    idApproach: number
  ) => void;
  setMainMuscle: (main: string, id: number) => void;
  setOutfit: (outfit: string, id: number) => void;
  setPosition: (position: string, id: number) => void;
  setSimulator: (simulator: string, id: number) => void;
  setExersiseType: (type: string, id: number) => void;
  setExersiseName: (name: string, id: number) => void;
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
  userProgrammExersises: TUserTrainExersises;
  setUserExersisList: (id: number) => void;
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
  immer((set) => ({
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
    CALENDARDESCR: [
      { color: "light-dark( #68ddb0, #48876f)", desc: "День тренировки" },
      {
        color: "light-dark( #ffa6a6, #9f3939)",
        desc: "Тренировка пропущена или отменена",
      },
      { color: "light-dark( #cfceff, #41406f)", desc: "День не распланирован" },
    ],
    STANDARTEXERSISES: [
      {
        id: 0,
        name: "Подъем гантелей на бицепс стоя",
        type: "Упражнения с отягощением", /// собственный вес
        positions: "Стоя", // Сидя, лежа, в наклоне 45град,
        simulator: "Отсутсвует", // Турник, брусья прочие тренажеры
        outfit: "Гантеля",
        main_muscle_group: "Бицепс",
        musclu_groups: ["Бицепс", "Предплечие", "Спина"],
        approaches: [
          {
            iteration: 0,
            weight: 0,
            rest: 0,
          },
          {
            iteration: 0,
            weight: 0,
            rest: 0,
          },
        ],
        description:
          "Встаньте прямо, отведите логти немного вперед и слегда уприте в живот. Далее выполняйте сгибание рук в логтевых суставах не выше чем до уровня груди, и плавно опускайте вниз до комфортного разгибания",
        image_schem: "схема на картинке",
        animation: "анимация движения svg-качка",
      },
      {
        id: 1,
        name: "Подъем штанги на бицепс стоя",
        type: "Упражнения с отягощением", /// собственный вес
        positions: "Стоя", // Сидя, лежа, в наклоне 45град,
        simulator: "Отсутсвует", // Турник, брусья прочие тренажеры
        outfit: "Штанга (прямой гриф)",
        main_muscle_group: "Бицепс",
        musclu_groups: ["Бицепс", "Предплечие", "Спина"],
        approaches: [
          {
            iteration: 0,
            weight: 0,
            rest: 0,
          },
          {
            iteration: 0,
            weight: 0,
            rest: 0,
          },
        ],
        description:
          "Встаньте прямо, отведите логти немного вперед и слегда уприте в живот. Далее выполняйте сгибание рук в логтевых суставах не выше чем до уровня груди, и плавно опускайте вниз до комфортного разгибания",
        image_schem: "схема на картинке",
        animation: "анимация движения svg-качка",
      },
      {
        id: 2,
        name: "Отжимания на брусьях",
        type: "Упражнения с собственным весом", /// собственный вес
        positions: "Стоя", // Сидя, лежа, в наклоне 45град,
        simulator: "Брусья", // Турник, брусья прочие тренажеры
        outfit: "Отсутсвует",
        main_muscle_group: "Грудь",
        musclu_groups: ["Грудь", "Трицепс", "Передние дельты"],
        approaches: [
          {
            iteration: 0,
            weight: 0,
            rest: 0,
          },
          {
            iteration: 0,
            weight: 0,
            rest: 0,
          },
        ],
        description:
          "Вертикально зависните на брусьях. Плавно опускайтесь вниз при помоши сгибания рук на 90 град, затем поднимитесь вертикально вверх",
        image_schem: "схема на картинке",
        animation: "анимация движения svg-качка",
      },
      {
        id: 3,
        name: "Отжимания на брусьях",
        type: "Упражнения с собственным весом", /// собственный вес
        positions: "Стоя", // Сидя, лежа, в наклоне 45град,
        simulator: "Брусья", // Турник, брусья прочие тренажеры
        outfit: "Отсутсвует",
        main_muscle_group: "Грудь",
        musclu_groups: ["Грудь", "Трицепс", "Передние дельты"],
        approaches: [
          {
            iteration: 0,
            weight: 0,
            rest: 0,
          },
          {
            iteration: 0,
            weight: 0,
            rest: 0,
          },
        ],
        description:
          "Вертикально зависните на брусьях. Плавно опускайтесь вниз при помоши сгибания рук на 90 град, затем поднимитесь вертикально вверх",
        image_schem: "схема на картинке",
        animation: "анимация движения svg-качка",
      },
      {
        id: 4,
        name: "Отжимания на брусьях",
        type: "Упражнения с собственным весом", /// собственный вес
        positions: "Стоя", // Сидя, лежа, в наклоне 45град,
        simulator: "Брусья", // Турник, брусья прочие тренажеры
        outfit: "",
        main_muscle_group: "Грудь",
        musclu_groups: ["Грудь", "Трицепс", "Передние дельты"],
        approaches: [
          {
            iteration: 0,
            weight: 0,
            rest: 0,
          },
          {
            iteration: 0,
            weight: 0,
            rest: 0,
          },
        ],
        description:
          "Вертикально зависните на брусьях. Плавно опускайтесь вниз при помоши сгибания рук на 90 град, затем поднимитесь вертикально вверх",
        image_schem: "схема на картинке",
        animation: "анимация движения svg-качка",
      },
      {
        id: 5,
        name: "Отжимания на брусьях",
        type: "Упражнения с собственным весом", /// собственный вес
        positions: "Стоя", // Сидя, лежа, в наклоне 45град,
        simulator: "Брусья", // Турник, брусья прочие тренажеры
        outfit: "Отсутсвует",
        main_muscle_group: "Грудь",
        musclu_groups: ["Грудь", "Трицепс", "Передние дельты"],
        approaches: [
          {
            iteration: 0,
            weight: 0,
            rest: 0,
          },
          {
            iteration: 0,
            weight: 0,
            rest: 0,
          },
        ],
        description:
          "Вертикально зависните на брусьях. Плавно опускайтесь вниз при помоши сгибания рук на 90 град, затем поднимитесь вертикально вверх",
        image_schem: "схема на картинке",
        animation: "анимация движения svg-качка",
      },
      {
        id: 6,
        name: "Отжимания на брусьях",
        type: "Упражнения с собственным весом", /// собственный вес
        positions: "Стоя", // Сидя, лежа, в наклоне 45град,
        simulator: "Брусья", // Турник, брусья прочие тренажеры
        outfit: "Отсутсвует",
        main_muscle_group: "Грудь",
        musclu_groups: ["Грудь", "Трицепс", "Передние дельты"],
        approaches: [
          {
            iteration: 0,
            weight: 0,
            rest: 0,
          },
          {
            iteration: 0,
            weight: 0,
            rest: 0,
          },
        ],
        description:
          "Вертикально зависните на брусьях. Плавно опускайтесь вниз при помоши сгибания рук на 90 град, затем поднимитесь вертикально вверх",
        image_schem: "схема на картинке",
        animation: "анимация движения svg-качка",
      },
      {
        id: 7,
        name: "Отжимания на брусьях",
        type: "Упражнения с собственным весом", /// собственный вес
        positions: "Стоя", // Сидя, лежа, в наклоне 45град,
        simulator: "Брусья", // Турник, брусья прочие тренажеры
        outfit: "Отсутсвует",
        main_muscle_group: "Грудь",
        musclu_groups: ["Грудь", "Трицепс", "Передние дельты"],
        approaches: [
          {
            iteration: 0,
            weight: 0,
            rest: 0,
          },
          {
            iteration: 0,
            weight: 0,
            rest: 0,
          },
        ],
        description:
          "Вертикально зависните на брусьях. Плавно опускайтесь вниз при помоши сгибания рук на 90 град, затем поднимитесь вертикально вверх",
        image_schem: "схема на картинке",
        animation: "анимация движения svg-качка",
      },
    ],
    addMuscleGroup: (muscle, id) =>
      set((store) => {
        if (!store.STANDARTEXERSISES[id].musclu_groups.includes(muscle)) {
          store.STANDARTEXERSISES[id].musclu_groups.push(muscle);
        }
      }),
    delMuscleGrop: (item, id) =>
      set((store) => {
        store.STANDARTEXERSISES[id].musclu_groups = store.STANDARTEXERSISES[
          id
        ].musclu_groups.filter((group) => group !== item);
      }),
    addApproach: (approch, id) =>
      set((store) => {
        store.STANDARTEXERSISES[id].approaches.push(approch);
      }),
    delApproach: (idExersise, idApproach) =>
      set((store) => {
        store.STANDARTEXERSISES[idExersise].approaches.splice(idApproach, 1);
      }),
    changeApproachCount: (count, idExersise, idApproach) =>
      set((store) => {
        store.STANDARTEXERSISES[idExersise].approaches[idApproach].iteration =
          count;
      }),
    changeApproachWeight: (weight, idExersise, idApproach) =>
      set((store) => {
        store.STANDARTEXERSISES[idExersise].approaches[idApproach].weight =
          weight;
      }),
    changeApproachRest: (rest, idExersise, idApproach) =>
      set((store) => {
        store.STANDARTEXERSISES[idExersise].approaches[idApproach].rest = rest;
      }),
    setMainMuscle: (main, id) =>
      set((store) => {
        store.STANDARTEXERSISES[id].main_muscle_group = main;
      }),
    setOutfit: (outfit, id) =>
      set((store) => {
        store.STANDARTEXERSISES[id].outfit = outfit;
      }),
    setPosition: (position, id) =>
      set((store) => {
        store.STANDARTEXERSISES[id].positions = position;
      }),
    setSimulator: (simulator, id) =>
      set((store) => {
        store.STANDARTEXERSISES[id].simulator = simulator;
      }),
    setExersiseType: (type, id) =>
      set((store) => {
        store.STANDARTEXERSISES[id].type = type;
      }),
    setExersiseName: (name, id) =>
      set((store) => {
        store.STANDARTEXERSISES[id].name = name;
      }),
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
    userProgrammExersises: [
      { id: 0, inprogramm: true },
      { id: 1, inprogramm: false },
      { id: 2, inprogramm: false },
      { id: 3, inprogramm: false },
      { id: 4, inprogramm: false },
      { id: 5, inprogramm: false },
      { id: 6, inprogramm: false },
      { id: 7, inprogramm: false },
    ],
    setUserExersisList: (id) =>
      set((store) => {
        store.userProgrammExersises[id].inprogramm =
          !store.userProgrammExersises[id].inprogramm;
      }),
  }))
  // {
  //   name: "jym-store",
  //   partialize: (state) => ({
  //     pseudoTraidingInfo: state.pseudoTraidingInfo,
  //     MOUNTH: state.MOUNTH,
  //   }),
  // }
  // )
);
