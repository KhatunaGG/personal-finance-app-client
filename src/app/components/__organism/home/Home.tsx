// import React, { useContext } from "react";
// import SideBar from "../sideBar/SideBar";
// import TotalsFragment from "../totalFragment/TotalsFragment";
// import PotsFragment from "../potsFragment/PotsFragment";
// import BudgetFragment from "../budgetFragment/BudgetFragment";
// import BillsFragment from "../billsFragment/BillsFragment";
// import TransactionsFragment from "../transactionsFragment/TransactionsFragment";
// import { Modal } from "../../__molecules";
// import { GlobalContext } from "@/app/context/Context";

// const Home = () => {
//   const context = useContext(GlobalContext);
//   const { isModal } = context || {};

//   return (
//     <section className="w-full relative">
//       {isModal && <Modal />}
//       <section className="w-full h-full min-h-screen  grid grid-cols-1 lg:grid-cols-[20.83%_1fr]">

//         <div className="max-h-[52px] md:max-h-[74px]  lg:w-full lg:min-h-full h-screen  bg-[#201F24] lg:rounded-t-xl lg:rounded-tl-none lg:rounded-r-3xl order-last lg:order-none"></div>

//         <section className="w-full h-full min-h-screen">
//           <div className="w-full h-full bg-[#F8F4F0] py-8 px-4 md:px-10 lg:px-6 flex flex-col items-start justify-start gap-8">
//             <h1 className="w-full text-left text-[32px] text-[#201F24] font-bold">
//               Overview
//             </h1>

//             <TotalsFragment />

//             <div className="w-full flex flex-col gap-y-6 lg:flex-row lg:gap-x-[2.26%]">
//               <div className="flex flex-col gap-y-4 md:gap-y-6 lg:w-[57.35%]">
//                 <PotsFragment />
//                 <TransactionsFragment />
//               </div>

//               <div className="flex flex-col gap-y-4 md:gap-y-6 lg:w-[40.37%]">
//                 <BudgetFragment />
//                 <BillsFragment />
//               </div>
//             </div>
//           </div>
//         </section>
//       </section>
//     </section>
//   );
// };

// export default Home;


import TotalsFragment from "../totalFragment/TotalsFragment";
import PotsFragment from "../potsFragment/PotsFragment";
import BudgetFragment from "../budgetFragment/BudgetFragment";
import BillsFragment from "../billsFragment/BillsFragment";
import TransactionsFragment from "../transactionsFragment/TransactionsFragment";

const Home = () => {
  return (
    <section className="w-full h-full min-h-screen bg-green-300">
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

export default Home;
