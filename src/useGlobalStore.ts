import { create } from "zustand";

type GlobalStore = {
  user: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
  };
};

const initialState = {
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
  };
});
