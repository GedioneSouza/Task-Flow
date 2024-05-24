
import { createContext, useCallback, useState } from 'react';
import { AuthService } from '../services/AuthService';
import { storageKeys } from '../config/storageKeys';

interface IAuthContextValue {
  signedIn: boolean;
  signIn(email: string, senha: string): Promise<void>;
}

export const AuthContext = createContext({} as IAuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState(true);

  const signIn = useCallback(async (email: string, senha: string) => {
    const { accessToken } = await AuthService.signIn({
      email,
      senha,
    });

    setSignedIn(true);
    localStorage.setItem(storageKeys.accessToken, accessToken);
  }, []);

  const value: IAuthContextValue = {
    signedIn,
    signIn,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
