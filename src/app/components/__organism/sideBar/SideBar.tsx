// "use client";
// import React from "react";
// import {
//   BillIcon,
//   BudgetIcon,
//   Logo,
//   MinimizeMenu,
//   OverviewIcon,
//   PotIcon,
//   TransactionsIcon,
// } from "../../__atoms";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const SideBar = () => {

//   const path = usePathname()
//   console.log(path, 'path')
//   return (
//     <div className="text-[#B3B3B3] w-full h-full px-10  lg:px-0 flex flex-row items-end justify-around lg:flex-col">
//       <div className="w-full pl-[11.59%] py-10 hidden lg:flex">
//         <Logo />
//       </div>
//       <div className="w-full flex flex-row justify-between lg:flex-col md:gap-1">
//         <Link href={'/'}>

//         <button className="w-full md:w-[13.54%] flex flex-col rounded-t-lg lg:px-0 lg:rounded-tl-none overflow-hidden  mt-[8px] bg-white lg:w-[92%] lg:rounded-r-lg lg:flex-row  lg:gap-[10px] lg:mt-0 ">
//           <div className="hidden lg:flex w-[1.81%] h-full min-h-[56px] bg-[#277C78]"></div>
//           <div className="-300 w-full flex flex-col items-center justify-center pt-2   lg:justify-start lg:flex-row lg:items-center lg:gap-4  lg:py-4 lg:pl-[9.78%]  ">
//             <OverviewIcon isLinkActive={false} />
//             <p className="hidden md:flex md:text-[12px] lg:text-base">
//               Overview
//             </p>
//           </div>
//           <div className="w-full  min-h-[5px] bg-[#277C78] lg:hidden "></div>
//         </button>
//         </Link>

//         <button className="w-full md:w-[13.54%] flex flex-col rounded-t-lg lg:px-0 lg:rounded-tl-none overflow-hidden  mt-[8px]  lg:w-[92%] lg:rounded-r-lg lg:flex-row  lg:gap-[10px] lg:mt-0 hover:bg-black/10 transition-colors duration-300">
//           <div className="hidden lg:flex w-[1.81%] h-full min-h-[56px] bg-[#277C78]"></div>
//           <div className="w-full flex flex-col items-center justify-center pt-2   lg:justify-start lg:flex-row lg:items-center lg:gap-4  lg:py-4 lg:pl-[9.78%]  ">
//             <TransactionsIcon isLinkActive={false} />
//             <p className="hidden md:flex md:text-[12px] lg:text-base">
//               Transactions
//             </p>
//           </div>
//           <div className="w-full  min-h-[5px] bg-[#277C78] lg:hidden "></div>
//         </button>

//         <Link href={'/budgets'}>

//         <button className="w-full md:w-[13.54%] flex flex-col rounded-t-lg lg:px-0 lg:rounded-tl-none overflow-hidden  mt-[8px] lg:w-[92%] lg:rounded-r-lg lg:flex-row  lg:gap-[10px] lg:mt-0  hover:bg-black/10 transition-colors duration-300 ">
//           <div className="hidden lg:flex w-[1.81%] h-full min-h-[56px] bg-[#277C78]"></div>
//           <div className="w-full flex flex-col items-center justify-center pt-2   lg:justify-start lg:flex-row lg:items-center lg:gap-4  lg:py-4 lg:pl-[9.78%]  ">
//             <BudgetIcon isLinkActive={false} />
//             <p className="hidden md:flex md:text-[12px] lg:text-base">
//               Budgets
//             </p>
//           </div>
//           <div className="w-full  min-h-[5px] bg-[#277C78] lg:hidden "></div>
//         </button>

//         </Link>
//         {/* <button className="w-full md:w-[13.54%] flex flex-col rounded-t-lg lg:px-0 lg:rounded-tl-none overflow-hidden  mt-[8px] lg:w-[92%] lg:rounded-r-lg lg:flex-row  lg:gap-[10px] lg:mt-0  hover:bg-black/10 transition-colors duration-300 ">
//           <div className="hidden lg:flex w-[1.81%] h-full min-h-[56px] bg-[#277C78]"></div>
//           <div className="w-full flex flex-col items-center justify-center pt-2   lg:justify-start lg:flex-row lg:items-center lg:gap-4  lg:py-4 lg:pl-[9.78%]  ">
//             <BudgetIcon />
//             <p className="hidden md:flex md:text-[12px] lg:text-base">
//               Budgets
//             </p>
//           </div>
//           <div className="w-full  min-h-[5px] bg-[#277C78] lg:hidden "></div>
//         </button> */}

//         <button className="w-full md:w-[13.54%] flex flex-col rounded-t-lg lg:px-0 lg:rounded-tl-none overflow-hidden  mt-[8px]  lg:w-[92%] lg:rounded-r-lg lg:flex-row  lg:gap-[10px] lg:mt-0  hover:bg-black/10 transition-colors duration-300">
//           <div className="hidden lg:flex w-[1.81%] h-full min-h-[56px] bg-[#277C78]"></div>
//           <div className="w-full flex flex-col items-center justify-center pt-2   lg:justify-start lg:flex-row lg:items-center lg:gap-4  lg:py-4 lg:pl-[9.78%]  ">
//             {/* <PotIcon width="18px" height="18px" /> */}

//             <PotIcon isLinkActive={false} />
//             <p className="hidden md:flex md:text-[12px] lg:text-base">Pots</p>
//           </div>
//           <div className="w-full  min-h-[5px] bg-[#277C78] lg:hidden "></div>
//         </button>

//         <button className="w-full md:w-[13.54%] flex flex-col rounded-t-lg lg:px-0 lg:rounded-tl-none overflow-hidden  mt-[8px] lg:w-[92%] lg:rounded-r-lg lg:flex-row  lg:gap-[10px] lg:mt-0  hover:bg-black/10 transition-colors duration-300">
//           <div className="hidden lg:flex w-[1.81%] h-full min-h-[56px] bg-[#277C78]"></div>
//           <div className="w-full flex flex-col items-center justify-center pt-2   lg:justify-start lg:flex-row lg:items-center lg:gap-4  lg:py-4 lg:pl-[9.78%]  ">
//             <BillIcon isLinkActive={false} />
//             <p className="hidden md:flex md:text-[12px] lg:text-base">
//               Recurring Bills
//             </p>
//           </div>
//           <div className="w-full  min-h-[5px] bg-[#277C78] lg:hidden "></div>
//         </button>

//       </div>

//       <button className="hidden lg:w-[92%] lg:rounded-r-lg lg:flex flex-row  gap-[10px] ">
//         <div className="flex flex-row items-center gap-4  py-4 pl-[11.81%] pt-[calc(100vh-432px)]">
//           <MinimizeMenu />
//           <p>Minimize Menu</p>
//         </div>
//       </button>
//     </div>
//   );
// };

// export default SideBar;




"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/app/commons/data";
import { IconType } from "../../__atoms/billIcon/BillIcon";
import { Logo, MinimizeMenu } from "../../__atoms";

export type NavLinkType = {
  name: string;
  icon: React.ComponentType<IconType>;
};

const SideBar = () => {
  const path = usePathname();


  const normalizePath = (str: string): string => {
    return decodeURIComponent(str)
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/^\/+|\/+$/g, "");
  };

  const isActive = (link: NavLinkType): boolean => {
    const normalizedPath = normalizePath(path);
    const normalizedLinkName = normalizePath(link.name);

    if (normalizedPath === "" && link.name === "Overview") return true;

    return (
      normalizedPath === normalizedLinkName ||
      normalizedPath.startsWith(normalizedLinkName + "/")
    );
  };

  return (
    <div className="text-[#B3B3B3] w-full px-10 lg:px-0 flex flex-row items-end justify-around lg:flex-col">
      <div className="w-full pl-[11.59%] py-10 hidden lg:flex">
        <Logo />
      </div>
      <div className="w-full flex flex-row justify-between lg:flex-col md:gap-1">
        {navLinks.map((link, i) => {
          const isLinkActive = isActive(link);

          return (
            <Link
              key={i}
              href={
                link.name === "Overview"
                  ? "/"
                  : link.name === "Recurring Bills"
                  ? "/recurringbills"
                  : "/" + link.name.toLowerCase().trim()
              }
            >
              <button
                className={`w-full md:w-[13.54%] flex flex-col rounded-t-lg lg:px-0 lg:rounded-tl-none overflow-hidden mt-[8px] lg:w-[92%] lg:rounded-r-lg lg:flex-row lg:gap-[10px] lg:mt-0 ${
                  isLinkActive
                    ? "bg-[#F8F4F0] text-[#201F24]"
                    : "bg-[#201F24] text-[#B3B3B3]"
                }`}
              >
                <div
                  className={`hidden lg:flex w-[1.81%] h-full min-h-[56px] ${
                    isLinkActive ? "bg-[#277C78]" : ""
                  }`}
                ></div>
                <div className="w-full flex flex-col items-center justify-center pt-2 lg:justify-start lg:flex-row lg:items-center lg:gap-4 lg:py-4 lg:pl-[9.78%]">
                  <link.icon isLinkActive={isLinkActive} />
                  <p className="hidden md:flex md:text-[12px] lg:text-base">
                    {link.name ? link.name : ""}
                  </p>
                </div>
                <div className="w-full min-h-[5px] bg-[#277C78] lg:hidden"></div>
              </button>
            </Link>
          );
        })}
      </div>

      <button className="hidden lg:w-[92%] lg:rounded-r-lg lg:flex flex-row gap-[10px]">
        <div className="flex flex-row items-center gap-4 py-4 pl-[11.81%] pt-[calc(100vh-432px)]">
          <MinimizeMenu />
          <p>Minimize Menu</p>
        </div>
      </button>
    </div>
  );
};

export default SideBar;
