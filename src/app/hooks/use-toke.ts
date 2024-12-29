// hooks/useAccessToken.ts
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const useAccessToken = () => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if running in the browser (client-side)
    if (typeof window !== "undefined") {
      const token = getCookie("accessToken");
      console.log("Token from cookies: ", token);  // Debugging log

      if (!token) {
        console.log("No token found, redirecting to sign-up.");
        router.push("/sign-up");  // Redirect if no token
      } else {
        setAccessToken(token as string);  // Set token state
      }
      setIsLoading(false);  // Loading state complete
    }
  }, [router]);

  return { accessToken, isLoading };
};

export default useAccessToken;
