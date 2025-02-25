export type TPseudoTraidind = Array<TTrainInfo>;

export type TTrainInfo = {
  date: Date;
  status: string;
  info: string;
  traidingName: string;
};

type TApproaches = {
  iteration: string;
  weight: number;
  rest: number;
};

export type TExersise = {
  id: number;
  name: string;
  type: string;
  positions: string;
  simulator: string;
  outfit: string;
  main_muscle_group: string;
  musclu_groups: Array<string>;
  approaches: Array<TApproaches>;
  description: string;
  image_schem: string;
  animation: string;
};

export type TUserTrainExersises = Array<{ id: number; inprogramm: boolean }>;
