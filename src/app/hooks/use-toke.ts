import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const useAccessToken = () => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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

  return { accessToken, isLoading };
};

export default useAccessToken;
