import create from 'zustand';
import { ACCESS_TOKEN, USER_NAME } from '../constants/keys';

interface IAccountStore {
  state: {
    accessToken: string;
    name: string;
  };
  setState: ({ accessToken, name }: { accessToken: string; name: string }) => void;
  clearState: () => void;
}

const accountStore = create<IAccountStore>((set) => ({
  state: {
    accessToken: window.localStorage.getItem(ACCESS_TOKEN) || '',
    name: window.localStorage.getItem(USER_NAME) || '',
  },
  setState: ({ accessToken, name }) => {
    window.localStorage.setItem(ACCESS_TOKEN, accessToken);
    window.localStorage.setItem(USER_NAME, name);

    set((prev) => ({
      ...prev,
      state: {
        accessToken,
        name,
      },
    }));
  },
  clearState: () => {
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
