"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";

export type GlobalContextType = {
  accessToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
};

export const GlobalContext = createContext<GlobalContextType | null>(null);

const Context = ({ children }: { children: React.ReactNode }) => {


  const [accessToken, setAccessToken] = useState('')




  return (
    <GlobalContext.Provider value={{
      setAccessToken,
      accessToken
    }}>
      <div>{children}</div>
    </GlobalContext.Provider>
  );
};

export default Context;




  // let accessesToken = null;
  // useEffect(() => {
  //   accessesToken = getCookie("accessesToken");
  //   console.log(accessesToken, "accessesToken");
  //   if (!accessesToken) router.push("/sign-up");
  // }, []);
  // if (!accessesToken) return;
