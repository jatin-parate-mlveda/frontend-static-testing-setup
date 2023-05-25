import { createContext, useContext } from 'react';

const UserContext = createContext(null);

export const UserContextProvider = UserContext.Provider;

export default function useUserContext() {
  const userContext = useContext(UserContext);

  if (userContext === undefined) {
    throw Error('Please wrap this component into UserContext');
  }

  return userContext;
}
