import React, { useState, useMemo, useContext, ReactNode, createContext } from 'react';

interface UserDataActions {
  updateUser(userInput: UserData): void;
}

// @TODO, take it from schema file while testing context
export interface UserData {
  name: string;
  email: string;
  image_url: string;
  breakup_test_taken: boolean;
  challenge_day: number;
  next_challenge_can_be_opened_on: number;
}

interface GlobalUserDataProviderProps {
  children: ReactNode;
}

const UserDataContext = createContext<UserData | undefined>(undefined);
const UserDataActionsContext = createContext<UserDataActions | undefined>(undefined);

export const GlobalUserDataProvider = ({ children }: GlobalUserDataProviderProps) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  const updateUser = (userInput: UserData) => {
    setUserData(userInput);
  };


  const actions = useMemo(
    () => ({
      updateUser,
    }),
    [],
  );

  const state = useMemo(() => {
    return {
      userData,
    };
  }, [userData]);

  return (
    //  TODO, remove this or make it nullable
    <UserDataContext.Provider value={{ ...state,  name: 'Test',
      email: '121',
      image_url: 'string',
      breakup_test_taken: true,
      challenge_day: 1,
      next_challenge_can_be_opened_on: 12}}>
      <UserDataActionsContext.Provider value={actions}>{children}</UserDataActionsContext.Provider>
    </UserDataContext.Provider>
  );
};

export function useUserData() {
  const context = useContext(UserDataContext);
  if (context === undefined) {
    throw new Error('useUserData must be used within a UserDataContext.Provider');
  }
  return context;
}

export function useUserDataActions() {
  const context = useContext(UserDataActionsContext);
  if (context === undefined) {
    throw new Error('useUserDataActions must be used within a UserDataActionsContext.Provider');
  }
  return context;
}
