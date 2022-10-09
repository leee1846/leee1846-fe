import create from 'zustand';
import { ACCESS_TOKEN, USER_NAME } from '../constants/keys';

interface IAccountParams {
  accessToken: string;
  name: string;
}
interface IAccountStore {
  state: {
    accessToken: string;
    name: string;
  };
  setState: ({ accessToken, name }: IAccountParams) => void;
  setLogin: ({ accessToken, name }: IAccountParams) => void;
  setLogout: () => void;
}

const accountStore = create<IAccountStore>((set) => ({
  state: {
    accessToken: '',
    name: '',
  },
  setState: ({ accessToken, name }) => {
    set((prev) => ({
      ...prev,
      state: {
        accessToken,
        name,
      },
    }));
  },
  setLogin: ({ accessToken, name }) => {
    if (typeof window !== undefined) {
      window.localStorage.setItem(ACCESS_TOKEN, accessToken);
      window.localStorage.setItem(USER_NAME, name);
    }

    set((prev) => ({
      ...prev,
      state: {
        accessToken,
        name,
      },
    }));
  },
  setLogout: () => {
    set((prev) => ({
      ...prev,
      state: {
        accessToken: '',
        name: '',
      },
    }));
  },
}));

export default accountStore;
