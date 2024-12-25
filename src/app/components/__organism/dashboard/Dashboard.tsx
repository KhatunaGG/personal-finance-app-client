// "use client";
// import { GlobalContext } from "@/app/context/Context";
// import { getCookie, setCookie } from "cookies-next";
// import { useRouter } from "next/navigation";
// import { useContext, useEffect } from "react";
// import SideBar from "../sideBar/SideBar";
// import { ArrowRight, PotIcon, PotLargeIcon } from "../../__atoms";
// import PotsFragment from "../potsFragment/PotsFragment";
// import TotalsFragment from "../totalFragment/TotalsFragment";
// import TransactionsFragment from "../transactionsFragment/TransactionsFragment";
// import BudgetFragment from "../budgetFragment/BudgetFragment";
// import BillsFragment from "../billsFragment/BillsFragment";

// const Dashboard = () => {
//   const context = useContext(GlobalContext);
//   if (!context) return null;
//   const { setAccessToken, accessToken } = context;
//   const router = useRouter();

//   //   let accessesToken = null;
//   //   useEffect(() => {
//   //     accessesToken = getCookie("accessesToken");
//   //     console.log(accessesToken, "accessesToken");
//   //     if (!accessesToken) router.push('/sign-up');
//   //   }, []);
//   //   if (!accessesToken) return;

//   // useEffect(() => {
//   //   const token = getCookie("accessesToken");
//   //   if (!token) {
//   //     router.push("/sign-up");
//   //     return;
//   //   }
//   //   setCookie("accessesToken", token);
//   //   setTokenFromCookie(token);
//   // }, []);

//   // if(!tokenFromCookie) return

//   // useEffect(() => {
//   //   const token = getCookie("accessToken");
//   //   if (!token) {
//   //     router.push("/sign-up");
//   //   } else {
//   //     setAccessToken(token);
//   //   }
//   // }, [setAccessToken, router]);
//   // if (!accessToken) return null;

//   useEffect(() => {
//     const fetchToken = async () => {
//       const token = await getCookie("accessToken"); // await to resolve the Promise
//       if (!token) {
//         router.push("/sign-up");
//       } else {
//         setAccessToken(token as string); // cast to string if necessary
//       }
//     };

//     fetchToken();
//   }, [setAccessToken, router]);

//   if (!accessToken) return null;

//   return (
//     <section className="w-full h-full min-h-screen  grid grid-cols-1 lg:grid-cols-[20.83%_1fr]">
//       {/* <div className="max-h-[52px] md:max-h-[74px]  lg:w-full lg:min-h-full h-screen  bg-[#201F24] lg:rounded-t-xl lg:rounded-tl-none lg:rounded-r-3xl order-last lg:order-none">
//         <SideBar />
//       </div> */}

//       <div className="Overview           w-full h-full bg-[#F8F4F0] py-8 px-4 md:px-10 lg:px-6 flex flex-col items-start justify-start gap-8">
//         <h1 className="w-full text-left text-[32px] text-[#201F24] font-bold">
//           Overview
//         </h1>

//         <TotalsFragment />

//         <div className="w-full grid grid-cols-1 gap-y-6 lg:grid-cols-[57.35%_40.37%] lg:gap-x-[2.26%]">
//           <div className=" grid grid-rows-[auto_auto] gap-y-4 md:gap-y-6">
//             <PotsFragment />
//             <TransactionsFragment/>
//           </div>

//           <div className="bg-pink-200 h-full w-full grid grid-cols-1 gap-y-4 md:gap-y-6">
//            <BudgetFragment />
//            <BillsFragment />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Dashboard;



//****************************************************************************************************** */

// "use client";
// import { GlobalContext } from "@/app/context/Context";
// import { getCookie, setCookie } from "cookies-next";
// import { useRouter } from "next/navigation";
// import { useContext, useEffect } from "react";
// import SideBar from "../sideBar/SideBar";
// import { ArrowRight, PotIcon, PotLargeIcon } from "../../__atoms";
// import PotsFragment from "../potsFragment/PotsFragment";
// import TotalsFragment from "../totalFragment/TotalsFragment";
// import TransactionsFragment from "../transactionsFragment/TransactionsFragment";
// import BudgetFragment from "../budgetFragment/BudgetFragment";
// import BillsFragment from "../billsFragment/BillsFragment";

// const Dashboard = () => {
//   const context = useContext(GlobalContext);
//   if (!context) return null;
//   const { setAccessToken, accessToken } = context;
//   const router = useRouter();

//   useEffect(() => {
//     const fetchToken = async () => {
//       const token = await getCookie("accessToken"); // await to resolve the Promise
//       if (!token) {
//         router.push("/sign-up");
//       } else {
//         setAccessToken(token as string); // cast to string if necessary
//       }
//     };

//     fetchToken();
//   }, [setAccessToken, router]);

//   if (!accessToken) return null;

//   return (
//     <section className="w-full h-full min-h-screen  ">
//       {/* <div className="max-h-[52px] md:max-h-[74px]  lg:w-full lg:min-h-full h-screen  bg-[#201F24] lg:rounded-t-xl lg:rounded-tl-none lg:rounded-r-3xl order-last lg:order-none">
//         <SideBar />
//       </div> */}

//       <div className="Overview           w-full h-full bg-[#F8F4F0] py-8 px-4 md:px-10 lg:px-6 flex flex-col items-start justify-start gap-8">
//         <h1 className="w-full text-left text-[32px] text-[#201F24] font-bold">
//           Overview
//         </h1>

//         <TotalsFragment />

//         <div className="w-full grid grid-cols-1 gap-y-6 lg:grid-cols-[57.35%_40.37%] lg:gap-x-[2.26%]">
//           <div className=" grid grid-rows-[auto_auto] gap-y-4 md:gap-y-6">
//             <PotsFragment />
//             <TransactionsFragment />
//           </div>

//           <div className="bg-pink-200 h-full w-full grid grid-cols-1 gap-y-4 md:gap-y-6">
//             <BudgetFragment />
//             <BillsFragment />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Dashboard;











//****************************************************************************************************** */




// "use client";
// import { GlobalContext } from "@/app/context/Context";
// import { getCookie } from "cookies-next";
// import { useRouter } from "next/navigation";
// import { useContext, useEffect } from "react";
// import PotsFragment from "../potsFragment/PotsFragment";
// import TotalsFragment from "../totalFragment/TotalsFragment";
// import TransactionsFragment from "../transactionsFragment/TransactionsFragment";
// import BudgetFragment from "../budgetFragment/BudgetFragment";
// import BillsFragment from "../billsFragment/BillsFragment";

// const Dashboard = () => {
//   const router = useRouter();
//   const context = useContext(GlobalContext);
//   if (!context) return null;
//   const { setAccessToken, accessToken } = context;

//   useEffect(() => {
//     const fetchToken = async () => {
//       const token = await getCookie("accessToken");
//       if (!token) {
//         router.push("/sign-up");
//       } else {
//         setAccessToken(token as string); 
//       }
//     };

//     fetchToken();
//   }, [setAccessToken, router]);

//   if (!accessToken) return null;

//   return (
//     <section className="w-full h-full min-h-screen  ">
//       {/* <div className="max-h-[52px] md:max-h-[74px]  lg:w-full lg:min-h-full h-screen  bg-[#201F24] lg:rounded-t-xl lg:rounded-tl-none lg:rounded-r-3xl order-last lg:order-none">
//         <SideBar />
//       </div> */}

//       <div className="w-full h-full bg-[#F8F4F0] py-8 px-4 md:px-10 lg:px-6 flex flex-col items-start justify-start gap-8">
//         <h1 className="w-full text-left text-[32px] text-[#201F24] font-bold">
//           Overview
//         </h1>

//         <TotalsFragment />

//         <div className="w-full flex flex-col gap-y-6 lg:flex-row lg:gap-x-[2.26%]" >
//           <div className="flex flex-col gap-y-4 md:gap-y-6 lg:w-[57.35%]">
//             <PotsFragment />
//             <TransactionsFragment />
//           </div>

//           <div className="flex flex-col gap-y-4 md:gap-y-6 lg:w-[40.37%]">
//             <BudgetFragment />
//             <BillsFragment />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Dashboard;





//****************************************************************************************************** */











// "use client";
// import { GlobalContext } from "@/app/context/Context";
// import { getCookie } from "cookies-next";
// import { useRouter } from "next/navigation";
// import { useContext, useEffect, useState } from "react";
// import PotsFragment from "../potsFragment/PotsFragment";
// import TotalsFragment from "../totalFragment/TotalsFragment";
// import TransactionsFragment from "../transactionsFragment/TransactionsFragment";
// import BudgetFragment from "../budgetFragment/BudgetFragment";
// import BillsFragment from "../billsFragment/BillsFragment";

// const Dashboard = () => {
//   const context = useContext(GlobalContext);
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(true);
//   if (!context) {
//     return <div>Loading...</div>; 
//   }
//   const { setAccessToken, accessToken } = context;

//   useEffect(() => {
//     const fetchToken = async () => {
//       const token = await getCookie("accessToken");
//       if (!token) {
//         router.push("/sign-up");
//       } else {
//         setAccessToken(token as string); 
//       }
//       setIsLoading(false);
//     };

//     fetchToken();
//   }, [setAccessToken, router]);

// //  if (isLoading) return <div>Loading...</div>;
// //   if (!accessToken) return null;


// if (isLoading) {
//   return <div>Loading...</div>; 
// }

// if (!accessToken) {
//   return <div>Access Denied</div>;
// }

//   return (
//     <section className="w-full h-full min-h-screen  ">
//       {/* <div className="max-h-[52px] md:max-h-[74px]  lg:w-full lg:min-h-full h-screen  bg-[#201F24] lg:rounded-t-xl lg:rounded-tl-none lg:rounded-r-3xl order-last lg:order-none">
//         <SideBar />
//       </div> */}

//       <div className="w-full h-full bg-[#F8F4F0] py-8 px-4 md:px-10 lg:px-6 flex flex-col items-start justify-start gap-8">
//         <h1 className="w-full text-left text-[32px] text-[#201F24] font-bold">
//           Overview
//         </h1>

//         <TotalsFragment />

//         <div className="w-full flex flex-col gap-y-6 lg:flex-row lg:gap-x-[2.26%]" >
//           <div className="flex flex-col gap-y-4 md:gap-y-6 lg:w-[57.35%]">
//             <PotsFragment />
//             <TransactionsFragment />
//           </div>

//           <div className="flex flex-col gap-y-4 md:gap-y-6 lg:w-[40.37%]">
//             <BudgetFragment />
//             <BillsFragment />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Dashboard;
















"use client";
import { GlobalContext } from "@/app/context/Context";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import PotsFragment from "../potsFragment/PotsFragment";
import TotalsFragment from "../totalFragment/TotalsFragment";
import TransactionsFragment from "../transactionsFragment/TransactionsFragment";
import BudgetFragment from "../budgetFragment/BudgetFragment";
import BillsFragment from "../billsFragment/BillsFragment";

const Dashboard = () => {
  const context = useContext(GlobalContext); // Context is accessed unconditionally
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [accessToken, setAccessToken] = useState<string | null>(null); // Local state for accessToken

  // Ensure useEffect is always called unconditionally
  useEffect(() => {
    if (context) {
      const fetchToken = async () => {
        const token = await getCookie("accessToken");
        if (!token) {
          router.push("/sign-up");
        } else {
          setAccessToken(token as string);
        }
        setIsLoading(false);
      };

      fetchToken();
    } else {
      setIsLoading(false); // If context is not available, don't show loading
    }
  }, [context, router]);

  // If loading, show loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // If no accessToken, show access denied state
  if (!accessToken) {
    return <div>Access Denied</div>;
  }

  return (
    <section className="w-full h-full min-h-screen">
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
