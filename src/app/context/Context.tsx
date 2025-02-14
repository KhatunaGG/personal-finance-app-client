"use client";
import { createContext, useState } from "react";
import { GlobalContextType } from "../interfaces/interface";

export const GlobalContext = createContext<GlobalContextType | null>(null);

const Context = ({ children }: { children: React.ReactNode }) => {
  const [accessToken, setAccessToken] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [minimize, setMinimize] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        setAccessToken,
        accessToken,
        setIsModal,
        isModal,
        setMinimize,
        minimize,
      }}
    >
      <div>{children}</div>
    </GlobalContext.Provider>
  );
};

export default Context;
