// hooks/useAccessToken.ts
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const useAccessToken = () => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = getCookie("accessToken");
      console.log("Token from cookies: ", token);

      if (!token) {
        console.log("No token found, redirecting to sign-up.");
        router.push("/sign-up");
      } else {
        setAccessToken(token as string);
      }
      setIsLoading(false);
    }
  }, [router]);

  return { accessToken, isLoading };
};

export default useAccessToken;
