// "use client";
// import { GlobalContext } from "@/app/context/Context";
// import { getCookie } from "cookies-next";
// import { useRouter } from "next/navigation";
// import { useContext, useEffect, useState } from "react";
// import Home from "../home/Home";

// const Dashboard = () => {
//   const context = useContext(GlobalContext);
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(true);
//   const [accessToken, setAccessToken] = useState<string | null>(null);

//   useEffect(() => {
//     if (context) {
//       const fetchToken = async () => {
//         const token = await getCookie("accessToken");
//         if (!token) {
//           router.push("/sign-up");
//         } else {
//           setAccessToken(token as string);
//         }
//         setIsLoading(false);
//       };

//       fetchToken();
//     } else {
//       setIsLoading(false);
//     }
//   }, [context, router]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (!accessToken) {
//     return <div>Access Denied</div>;
//   }

//   return <Home />;
// };

// export default Dashboard;

//****************************************************************************************************** */

"use client";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import PotsFragment from "../potsFragment/PotsFragment";
import TotalsFragment from "../totalFragment/TotalsFragment";
import TransactionsFragment from "../transactionsFragment/TransactionsFragment";
import BudgetFragment from "../budgetFragment/BudgetFragment";
import BillsFragment from "../billsFragment/BillsFragment";
import { GlobalContext } from "@/app/context/Context";

const Dashboard = () => {
  // const context = useContext(GlobalContext);
  // if (!context) return null;
  // const { setAccessToken, accessToken } = context;
  const router = useRouter();
  const [accessToken, setAccessToken] = useState('')

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getCookie("accessToken");
      if (!token) {
        router.push("/sign-up");
      } else {
        setAccessToken(token as string);
      }
    };

    fetchToken();
  }, [setAccessToken, router]);

  if (!accessToken) return null;

  console.log(accessToken, 'accessToken from dashboard')





  return (
    <section className="w-full h-full min-h-screen bg-yellow-400">
      <div className="w-full h-full bg-[#F8F4F0] py-8 px-4 md:px-10 lg:px-6 flex flex-col items-start justify-start gap-8">
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
