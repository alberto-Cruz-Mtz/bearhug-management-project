import { createContext, useContext } from "react";

interface Props {
  session: unknown;
}

type AuthContextValue = Props | null;

export const AuthContext = createContext<AuthContextValue>(null);

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }

  return context;
}
