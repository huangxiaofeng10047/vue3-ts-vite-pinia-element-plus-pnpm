// src/store/index.ts
import useUserStore from "./modules/user";

const useStore = () => {
  return {
    user: useUserStore(),
  };
};

export default useStore;
