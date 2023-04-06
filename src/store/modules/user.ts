// src/store/modules/user.ts
import { defineStore } from "pinia";

const useUserStore = defineStore({
  id: "user",
  state: () => ({
    count: 0,
  }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});

export default useUserStore;
