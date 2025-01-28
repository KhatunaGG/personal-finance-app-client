"use client";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PotsFragment from "../potsFragment/PotsFragment";
import TotalsFragment from "../totalFragment/TotalsFragment";
import TransactionsFragment from "../transactionsFragment/TransactionsFragment";
import BudgetFragment from "../budgetFragment/BudgetFragment";
import BillsFragment from "../billsFragment/BillsFragment";
import { axiosInstance } from "@/app/libs/axiosInstance";

const Dashboard = () => {
  const router = useRouter();

  // const [accessToken, setAccessToken] = useState("");
  // useEffect(() => {
  //   const fetchToken = async () => {
  //     const token = await getCookie("accessToken");
  //     if (!token) {
  //       router.push("/sign-up");
  //     } else {
  //       setAccessToken(token as string);
  //     }
  //   };

  //   fetchToken();
  // }, [setAccessToken, router]);

  // if (!accessToken) return null;





  // const [accessToken, setAccessToken] = useState<null | string>();
  // useEffect(() => {
  //   const token = getCookie("accessToken");
  //   if (!token) router.push("/sign-up");
  //   setAccessToken(token);
  // });
  // if (!accessToken) return;


  




  const [accessToken, setAccessToken] = useState<string | null | undefined>(null);
  const [user, setUser] = useState('')
  console.log(user, "user")


  async function getCurrenUser(accessToken: string | undefined) {
    try {
      const res = await axiosInstance.get('/auth/current-user', {
        headers: { Authorization: `Bearer ${accessToken}` }
      })
      setUser(res.data)

    } catch(error) {
      console.log(error)
    }
  }



  useEffect(() => {
    const fetchToken = async () => {
      const token = await getCookie("accessToken");
      if (!token) {
        router.push("/sign-up");
      } else {
        setAccessToken(token);
        
      }
      getCurrenUser(token)

    };

    fetchToken();
  }, [router]);

  if (!accessToken) return null; 









  return (
    <section className="w-full h-full min-h-screen ">
      <div className="w-full h-full bg-[#F8F4F0] pt-8 pb-[105px] md:pb-[113px] lg:py-8 px-4 md:px-10 lg:px-6 flex flex-col items-start justify-start gap-8">
        <h1 className="w-full text-left text-[32px] text-[#201F24] font-bold">
          Overview
        </h1>

        <TotalsFragment />

        <div className="w-full flex flex-col gap-y-6 lg:flex-row lg:gap-x-[2.26%]">
          <div className="flex flex-col gap-y-4 md:gap-y-6 lg:w-[57.35%]">
            <PotsFragment />
            <TransactionsFragment />
          </div>

          <div className="flex flex-col gap-y-4 md:gap-y-6 lg:w-[40.37%]">
            <BudgetFragment />
            <BillsFragment />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
