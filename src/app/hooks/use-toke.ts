import { deleteCookie, getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { axiosInstance } from "../libs/axiosInstance";

export type UserType = {
  balance: number;
  email: string;
  remaining: number;
  updatedAt: string;
  userName: string;
  _id: string;
};

const useAccessToken = () => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<UserType | null>(null);

  const getCurranUser = async (accessToken: string | undefined) => {
    try {
      const res = await axiosInstance.get("/auth/current-user", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    deleteCookie("accessToken");
    setAccessToken(null);
    setUser(null);
    router.push("/sign-up");
  };

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getCookie("accessToken");
      if (token) {
        setAccessToken(token as string);
      } else {
        router.push("/sign-up");
      }
      setIsLoading(false);
    };

    fetchToken();
  }, [router]);

  useEffect(() => {
    if (accessToken) {
      getCurranUser(accessToken);
    }
  }, [accessToken]);

  return { accessToken, isLoading, user, logout };
};

export default useAccessToken;
