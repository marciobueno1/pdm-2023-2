import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useStore = create(
  persist(
    (set) => ({
      scores: [],
      addScore: (payload) =>
        set((state) => {
          const title = `${payload.date.getFullYear()}-${
            payload.date.getMonth() + 1
          }`;
          const index = state.scores.findIndex((v) => v.title === title);
          const score = {
            date: payload.date.toString(),
            result: payload.result,
          };
          if (index == -1) {
            state.scores.unshift({ title, data: [score] });
          } else {
            state.scores[index].data.unshift(score);
          }
          return state;
        }),
      clearScore: () => set({ scores: [] }),
    }),
    {
      name: "score-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => AsyncStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
