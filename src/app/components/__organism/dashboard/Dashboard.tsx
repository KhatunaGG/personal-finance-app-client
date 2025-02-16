// "use client";
// import { getCookie } from "cookies-next";
// import { usePathname, useRouter } from "next/navigation";
// import { useContext, useEffect, useState } from "react";
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
// import { Title } from "../../__molecules";
// import { GlobalContext } from "@/app/context/Context";

// const Dashboard = () => {
//   const router = useRouter();
//   const [accessToken, setAccessToken] = useState<string | null | undefined>(
//     null
//   );
//   const [pots, setPots] = useState<PotsDataType[]>([]);
//   const [budgets, setBudgets] = useState<DataType[]>([]);
//   const [recurringBills, setRecurringBills] = useState<
//     RecurringBillsDataType[]
//   >([]);
//   const [transactions, setTransactions] = useState<TransactionType[]>([]);
//   const path = usePathname();
//   const isDashboardPage = path.includes("/");
//   const context = useContext(GlobalContext);
//   const [potTotal, setPotTotal] = useState(0);

//   console.log(accessToken, "accessToken from deshboard")
//   useEffect(() => {
//     const fetchToken = async () => {
//       const token = await getCookie("accessToken");
//       if (!token) {
//         router.push("/sign-up");
//       } else {
//         setAccessToken(token);
//       }
//     };

//     fetchToken();
//   }, [router]);

//   const getAllTransactionData = async () => {

//     try {
//       const potsRes = await axiosInstance.get("/pot/sliced", {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       });
//       if (potsRes?.status >= 200 && potsRes?.status <= 204) {
//         setPots(potsRes.data.transactions || []);
//         setPotTotal(potsRes.data.totalSaved);
//       }

//       const budgetRes = await axiosInstance.get("/budgets/sliced", {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       });
//       if (budgetRes?.status >= 200 && budgetRes?.status <= 204) {
//         setBudgets(budgetRes.data);
//       }
//       console.log(budgetRes.data, "budgetRes.data")
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
//       const transactionRes = await axiosInstance.get(
//         "/budgets/allResources/sliced",
//         {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         }
//       );
//       console.log(transactionRes, "transactionRes")
//       if (transactionRes?.status >= 200 && transactionRes?.status <= 204) {
//         setTransactions(transactionRes.data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getAllTransactionData();
//   }, [router]);
//   if (!accessToken) return null;

//   if (!context) return null;
//   const { minimize } = context;

//   return (
//     <section
//       className={`w-full h-full min-h-screen ${
//         minimize ? "lg:pl-[88px]" : "lg:pl-[300px]"
//       } transition-all duration-300 ease-in-out`}
//     >
//       <div className="w-full h-full bg-[#F8F4F0] pt-8 pb-[105px] md:pb-[113px] lg:py-8 px-4 md:px-10 lg:px-6 flex flex-col items-start justify-start gap-8 ">
//         <Title isDashboardPage={isDashboardPage} />
//         <TotalsFragment />
//         <div className="w-full flex flex-col gap-y-6 lg:flex-row lg:gap-x-[2.26%]">
//           <div className="flex flex-col gap-y-4 md:gap-y-6 lg:w-[57.35%]">
//             <PotsFragment
//               pots={pots.length > 0 ? pots : []}
//               potTotal={potTotal}
//             />
//             <TransactionsFragment transactions={transactions} />
//           </div>
//           <div className="flex flex-col gap-y-4 md:gap-y-6 lg:w-[40.37%]">
//             <BudgetFragment budgets={budgets} />
//             <BillsFragment recurringBills={recurringBills} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Dashboard;

//****************************************************************** */
"use client";
import { useEffect, useState, useContext } from "react";
import { usePathname } from "next/navigation";
import useAccessToken from "@/app/hooks/use-toke";
import { axiosInstance } from "@/app/libs/axiosInstance";
import { GlobalContext } from "@/app/context/Context";
import { Loading, Title } from "../../__molecules";
import PotsFragment from "./PotsFragment";
import TotalsFragment from "./TotalsFragment";
import TransactionsFragment from "./TransactionsFragment";
import BudgetFragment from "./BudgetFragment";
import BillsFragment from "./BillsFragment";

const Dashboard = () => {
  const path = usePathname();
  const { accessToken, isLoading } = useAccessToken();
  const isDashboardPage = path.includes("/");
  const context = useContext(GlobalContext);
  const [pots, setPots] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const [recurringBills, setRecurringBills] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [potTotal, setPotTotal] = useState(0);

  const getAllTransactionData = async () => {
    if (!accessToken) return;

    try {
      const potsRes = await axiosInstance.get("/pot/sliced", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setPots(potsRes.data.transactions || []);
      setPotTotal(potsRes.data.totalSaved);

      const budgetRes = await axiosInstance.get("/budgets/sliced", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setBudgets(budgetRes.data || []);

      const recurringBillsRes = await axiosInstance.get(
        "/recurring-bills/sliced",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      setRecurringBills(recurringBillsRes.data || []);

      const transactionRes = await axiosInstance.get(
        "/budgets/allResources/sliced",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      setTransactions(transactionRes.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (accessToken) {
      getAllTransactionData();
    }
  }, [accessToken]);

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (!accessToken) return null;
  if (!context) return null;

  const { minimize } = context;

  return (
    <section
      className={`w-full h-full min-h-screen ${
        minimize ? "lg:pl-[88px]" : "lg:pl-[300px]"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="w-full h-full bg-[#F8F4F0] pt-8 pb-[105px] md:pb-[113px] lg:py-8 px-4 md:px-10 lg:px-6 flex flex-col items-start justify-start gap-8">
        <Title isDashboardPage={isDashboardPage} />
        <TotalsFragment />
        <div className="w-full flex flex-col gap-y-6 lg:flex-row lg:gap-x-[2.26%]">
          <div className="flex flex-col gap-y-4 md:gap-y-6 lg:w-[57.35%]">
            <PotsFragment pots={pots} potTotal={potTotal} />
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
