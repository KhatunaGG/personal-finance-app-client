"use client";
import { getCookie } from "cookies-next";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";


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
  const router = useRouter()



  useEffect(() => {
    const fetchToken = async () => {
      if (!accessToken) {
        const token = await getCookie("accessToken");
          if (token) {
          setAccessToken(token as string); 
        } else {
          router.push("/sign-up");
        }
      }
    };
    fetchToken();
  }, [accessToken, setAccessToken, router]);
  

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


