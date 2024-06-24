import React from "react";
import { useStorageState } from "./useStorageState";
import { createContext, useContext } from "react";

// Update the context type
const BottomSheetContext = createContext<{
  bottomSheetRef: React.RefObject<any> | null;
  currentIndex: number;
} | null>(null);

export const useBottomSheet = () => useContext(BottomSheetContext);

// Update the BottomSheetProvider to include currentIndex
export const BottomSheetProvider = ({
  children,
  bottomSheetRef,
  currentIndex,
}: {
  children: React.ReactNode;
  bottomSheetRef: React.RefObject<any>;
  currentIndex: number;
}) => (
  <BottomSheetContext.Provider value={{ bottomSheetRef, currentIndex }}>
    {children}
  </BottomSheetContext.Provider>
);

const AuthContext = React.createContext<{
  signIn: () => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");

  return (
    <AuthContext.Provider
      value={{
        signIn: () => {
          // Perform sign-in logic here
          setSession("xdadaxx");
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
