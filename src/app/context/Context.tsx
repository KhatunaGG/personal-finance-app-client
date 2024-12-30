"use client";
import { createContext, Dispatch, SetStateAction, useState } from "react";

export type GlobalContextType = {
  accessToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  isModal: boolean;
};

export const GlobalContext = createContext<GlobalContextType | null>(null);

const Context = ({ children }: { children: React.ReactNode }) => {
  const [accessToken, setAccessToken] = useState("");
  const [isModal, setIsModal] = useState(false);

  //use-token logic:
  // const { accessToken, isLoading } = useAccessToken();
  // If you want to set the access token in the context as well (useful for other components)
  // const setAccessToken = (newToken: string | null) => {
  //   // Optionally, you can also save the token to cookies here if needed
  //   // setCookie("accessToken", newToken); // (Requires cookies-next or similar package)
  // };

  //*****************************TOKEN  logic
  // useEffect(() => {
  //   const fetchToken = async () => {
  //     if (!accessToken) {
  //       const token = await getCookie("accessToken");
  //         if (token) {
  //         setAccessToken(token as string);
  //       } else {
  //         router.push("/sign-up");
  //       }
  //     }
  //   };
  //   fetchToken();
  // }, [accessToken, setAccessToken, router]);

  return (
    <GlobalContext.Provider
      value={{
        setAccessToken,
        accessToken,
        setIsModal,
        isModal,
      }}
    >
      <div>{children}</div>
    </GlobalContext.Provider>
  );
};

export default Context;
