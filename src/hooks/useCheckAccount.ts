import { useEffect } from 'react';
import accountStore from '../zustand/accountStore';
import { ACCESS_TOKEN, USER_NAME } from '../constants/keys';

const useCheckAccount = () => {
  const setAccountInfo = accountStore((selector) => selector.setState);

  useEffect(() => {
    const accessToken = window.localStorage.getItem(ACCESS_TOKEN);
    const name = window.localStorage.getItem(USER_NAME);

    if (!accessToken || !name) {
      return;
    }

    setAccountInfo({
      accessToken,
      name,
    });
  }, []);
};

export default useCheckAccount;
