import { create } from "zustand";

type GlobalStore = {
  isAuthorized: boolean;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
  };
  setUser: (user: GlobalStore["user"]) => void;
  setIsAuthorized: (isAuthorized: boolean) => void;
};

const initialState = {
  isAuthorized: false,
  user: {
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    avatar: "",
  },
};

export const useGlobalStore = create<GlobalStore>((set) => {
  return {
    ...initialState,
    setUser(user) {
      set({
        user,
      });
    },
    setIsAuthorized(isAuthorized) {
      set({
        isAuthorized,
      });
    },
  };
});
