import { create } from "zustand";
import { persist } from "zustand/middleware";

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
  setAccessToken: (token: string) => void;
  isAuth: boolean;
  accessToken: string | null;
  setAuth: (auth: boolean) => void;
}

export const useJymAppStore = create<IJymAppStore>()(
  persist(
    (set) => ({
      isAuth: false,
      accessToken: null,
      setAuth: (auth: boolean) => set({ isAuth: auth }),
      setAccessToken: (token: string) => set({ accessToken: token }),
    }),
    { name: "jym-store" }
  )
);
