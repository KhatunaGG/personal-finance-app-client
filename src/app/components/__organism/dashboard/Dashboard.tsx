// "use client";
// import { getCookie } from "cookies-next";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import PotsFragment from "./PotsFragment";
// import TotalsFragment from "./TotalsFragment";
// import TransactionsFragment from "./TransactionsFragment";
// import BudgetFragment from "./BudgetFragment";
// import BillsFragment from "./BillsFragment";
// import { axiosInstance } from "@/app/libs/axiosInstance";
// import { PotsDataType } from "../pots/PotsSection";
// import { DataType } from "@/app/interfaces/interface";
// import { RecurringBillsDataType } from "../recurringBills/RecurringBillsSection";
// import { TransactionType } from "../transaction/TransactionSection";

// const Dashboard = () => {
//   const router = useRouter();

//   // const [accessToken, setAccessToken] = useState("");
//   // useEffect(() => {
//   //   const fetchToken = async () => {
//   //     const token = await getCookie("accessToken");
//   //     if (!token) {
//   //       router.push("/sign-up");
//   //     } else {
//   //       setAccessToken(token as string);
//   //     }
//   //   };

//   //   fetchToken();
//   // }, [setAccessToken, router]);

//   // if (!accessToken) return null;

//   // const [accessToken, setAccessToken] = useState<null | string>();
//   // useEffect(() => {
//   //   const token = getCookie("accessToken");
//   //   if (!token) router.push("/sign-up");
//   //   setAccessToken(token);
//   // });
//   // if (!accessToken) return;

//   const [accessToken, setAccessToken] = useState<string | null | undefined>(
//     null
//   );
//   const [user, setUser] = useState("");
//   console.log(user);

//   async function getCurrenUser(accessToken: string | undefined) {
//     try {
//       const res = await axiosInstance.get("/auth/current-user", {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       });
//       setUser(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     const fetchToken = async () => {
//       const token = await getCookie("accessToken");
//       if (!token) {
//         router.push("/sign-up");
//       } else {
//         setAccessToken(token);
//       }
//       getCurrenUser(token);
//     };

//     fetchToken();
//   }, [router]);

//   if (!accessToken) return null;

//   const [pots, setPots] = useState<PotsDataType[]>([]);
//   const [budgets, setBudgets] = useState<DataType[]>([]);
//   const [recurringBills, setRecurringBills] = useState<
//     RecurringBillsDataType[]
//   >([]);
//   const [transactions, setTransactions] = useState<TransactionType[]>([])

//   console.log(pots, "pots")
//   console.log(budgets, "budgets")
//   console.log(recurringBills, "recurringBills")
//   console.log(transactions, "transactions")

//   const getAllTransactionData = async () => {
//     try {
//       const potsRes = await axiosInstance.get("/pot/sliced", {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       });
//       if (potsRes?.status >= 200 && potsRes?.status <= 204) {
//         setPots(potsRes.data);
//       }
//       const budgetRes = await axiosInstance.get("/budget/sliced", {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       });
//       if (budgetRes?.status >= 200 && budgetRes?.status <= 204) {
//         setBudgets(budgetRes.data);
//       }

//       const recurringBillsRes = await axiosInstance.get(
//         "/recurring-bills/sliced",
//         {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         }
//       );

//       if (
//         recurringBillsRes?.status >= 200 &&
//         recurringBillsRes?.status <= 204
//       ) {
//         setRecurringBills(recurringBillsRes.data);
//       }

//       const transactionRes = await axiosInstance.get('/budget/transactions',  {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       })
//       if (
//         recurringBillsRes?.status >= 200 &&
//         recurringBillsRes?.status <= 204
//       ) {
//         setTransactions(transactionRes.data)
//       }

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     if (accessToken) {
//       getAllTransactionData();
//     }
//   }, [accessToken]);

//   return (
//     <section className="w-full h-full min-h-screen ">
//       <div className="w-full h-full bg-[#F8F4F0] pt-8 pb-[105px] md:pb-[113px] lg:py-8 px-4 md:px-10 lg:px-6 flex flex-col items-start justify-start gap-8">
//         <h1 className="w-full text-left text-[32px] text-[#201F24] font-bold">
//           Overview
//         </h1>

//         <TotalsFragment />

//         <div className="w-full flex flex-col gap-y-6 lg:flex-row lg:gap-x-[2.26%]">
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
import { getCookie } from "cookies-next";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import PotsFragment from "./PotsFragment";
import TotalsFragment from "./TotalsFragment";
import TransactionsFragment from "./TransactionsFragment";
import BudgetFragment from "./BudgetFragment";
import BillsFragment from "./BillsFragment";
import { axiosInstance } from "@/app/libs/axiosInstance";
import { PotsDataType } from "../pots/PotsSection";
import { DataType } from "@/app/interfaces/interface";
import { RecurringBillsDataType } from "../recurringBills/RecurringBillsSection";
import { TransactionType } from "../transaction/TransactionSection";
import { Title } from "../../__molecules";
import { GlobalContext } from "@/app/context/Context";

const Dashboard = () => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState<string | null | undefined>(
    null
  );
  // const [user, setUser] = useState("");
  const [pots, setPots] = useState<PotsDataType[]>([]);
  const [budgets, setBudgets] = useState<DataType[]>([]);
  const [recurringBills, setRecurringBills] = useState<
    RecurringBillsDataType[]
  >([]);
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  const path = usePathname();
  const isDashboardPage = path.includes("/");
  const context = useContext(GlobalContext)



  // async function getCurrenUser(accessToken: string | undefined) {
  //   try {
  //     const res = await axiosInstance.get("/auth/current-user", {
  //       headers: { Authorization: `Bearer ${accessToken}` },
  //     });
  //     setUser(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getCookie("accessToken");
      if (!token) {
        router.push("/sign-up");
      } else {
        setAccessToken(token);
      }
      // getCurrenUser(token);
    };

    fetchToken();
  }, [router]);

  const getAllTransactionData = async () => {
    try {
      const potsRes = await axiosInstance.get("/pot/sliced", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (potsRes?.status >= 200 && potsRes?.status <= 204) {
        setPots(potsRes.data);
      }

      const budgetRes = await axiosInstance.get("/budgets/sliced", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (budgetRes?.status >= 200 && budgetRes?.status <= 204) {
        setBudgets(budgetRes.data);
      }

      const recurringBillsRes = await axiosInstance.get(
        "/recurring-bills/sliced",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      if (
        recurringBillsRes?.status >= 200 &&
        recurringBillsRes?.status <= 204
      ) {
        setRecurringBills(recurringBillsRes.data);
      }
      const transactionRes = await axiosInstance.get(
        "/budgets/allResources/sliced",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      if (transactionRes?.status >= 200 && transactionRes?.status <= 204) {
        setTransactions(transactionRes.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTransactionData();
  }, [router]);
  if (!accessToken) return null;


  if(!context) return null
  const {minimize } = context;


  // useEffect(() => {
  //   // Fetch the access token when the component mounts
  //   const fetchToken = async () => {
  //     const token = await getCookie("accessToken");
  //     if (!token) {
  //       router.push("/sign-up");
  //     } else {
  //       setAccessToken(token);
  //     }
  //   };

  //   fetchToken();
  // }, [router]);

  // // Consolidated effect to handle all API calls once the access token or route changes
  // useEffect(() => {
  //   if (!accessToken) return; // Do nothing if no token

  //   const fetchData = async () => {
  //     try {
  //       // Fetch all the data in parallel using Promise.all to avoid sequential requests
  //       const [userRes, potsRes, budgetRes, recurringBillsRes, transactionRes] = await Promise.all([
  //         axiosInstance.get("/auth/current-user", {
  //           headers: { Authorization: `Bearer ${accessToken}` },
  //         }),
  //         axiosInstance.get("/pot/sliced", {
  //           headers: { Authorization: `Bearer ${accessToken}` },
  //         }),
  //         axiosInstance.get("/budgets/sliced", {
  //           headers: { Authorization: `Bearer ${accessToken}` },
  //         }),
  //         axiosInstance.get("/recurring-bills/sliced", {
  //           headers: { Authorization: `Bearer ${accessToken}` },
  //         }),
  //         axiosInstance.get("/budgets/allResources/sliced", {
  //           headers: { Authorization: `Bearer ${accessToken}` },
  //         }),
  //       ]);

  //       // Set state with fetched data
  //       setUser(userRes.data);
  //       setPots(potsRes.data);
  //       setBudgets(budgetRes.data);
  //       setRecurringBills(recurringBillsRes.data);
  //       setTransactions(transactionRes.data);

  //     } catch (error) {
  //       console.error("Error fetching data", error);
  //     }
  //   };

  //   fetchData();
  // }, [pathname]); // Trigger effect when either accessToken or route path changes

  // if (!accessToken) return null;

  return (
    <section className={`w-full h-full min-h-screen ${minimize ? "lg:pl-[88px]" : "lg:pl-[300px]"} transition-all duration-300 ease-in-out`}>
      <div className="w-full h-full bg-[#F8F4F0] pt-8 pb-[105px] md:pb-[113px] lg:py-8 px-4 md:px-10 lg:px-6 flex flex-col items-start justify-start gap-8">
        {/* <h1 className="w-full text-left text-[32px] text-[#201F24] font-bold">
          Overview
        </h1> */}
        <Title isDashboardPage={isDashboardPage} />
        <TotalsFragment />
        <div className="w-full flex flex-col gap-y-6 lg:flex-row lg:gap-x-[2.26%]">
          <div className="flex flex-col gap-y-4 md:gap-y-6 lg:w-[57.35%]">
            <PotsFragment pots={pots} />
            <TransactionsFragment transactions={transactions} />
          </div>
          <div className="flex flex-col gap-y-4 md:gap-y-6 lg:w-[40.37%]">
            <BudgetFragment budgets={budgets} />
            <BillsFragment recurringBills={recurringBills} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
