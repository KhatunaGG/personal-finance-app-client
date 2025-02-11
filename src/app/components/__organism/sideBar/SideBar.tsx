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







//OK BEFORE MOBILE VERSION
// "use client";
// import React, { useContext } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { navLinks } from "@/app/commons/data";
// import { IconType } from "../../__atoms/billIcon/BillIcon";
// import { Logo, LogOut, MinimizeMenu } from "../../__atoms";
// import useAccessToken from "@/app/hooks/use-toke";
// import { GlobalContext } from "@/app/context/Context";
// import Image from "next/image";



// export type NavLinkType = {
//   name: string;
//   icon: React.ComponentType<IconType>;
// };

// const SideBar = () => {
//   const path = usePathname();
//   const { user } = useAccessToken();
//   // const [minimize, setMinimize] = useState(false);
//   const context = useContext(GlobalContext);

//   const normalizePath = (str: string): string => {
//     return decodeURIComponent(str)
//       .toLowerCase()
//       .replace(/\s+/g, "")
//       .replace(/^\/+|\/+$/g, "");
//   };

//   const isActive = (link: NavLinkType): boolean => {
//     const normalizedPath = normalizePath(path);
//     const normalizedLinkName = normalizePath(link.name);

//     if (normalizedPath === "" && link.name === "Overview") return true;

//     return (
//       normalizedPath === normalizedLinkName ||
//       normalizedPath.startsWith(normalizedLinkName + "/")
//     );
//   };

//   if (!context) return null;
//   const { minimize, setMinimize } = context;

//   return (
//     <section
//       className={`absolute z-10 bottom-0 left-0 max-h-[52px] w-full md:max-h-[74px] lg:left-0 lg:top-0  lg:min-h-full h-screen bg-[#201F24] lg:rounded-t-xl lg:rounded-tl-none lg:rounded-r-3xl order-last lg:order-none ${
//         minimize ? "lg:w-[88px]" : "lg:w-[300px]"
//       } transition-all duration-300 ease-in-out`}
//     >
//       <div className="text-[#B3B3B3] w-full px-10 lg:px-0 flex flex-row items-end justify-around lg:flex-col ">
//         <div className={`w-full pl-[11.59%] py-10 hidden lg:flex ${minimize && "flex items-center justify-center pl-0 "}`}>
//           {minimize ? (

//           <div className="w-[12.48px] h-[21.44px]">
//                 <Image src={"/assets/f.svg"} alt={"f-logo"} width={12.48} height={21.44} />
//           </div>
//           ): (
//             <Logo />
//           )}
      
//         </div>
        
//         <div className="w-full flex flex-row justify-between lg:flex-col md:gap-1 bg-green-200 ">
//           {navLinks.map((link, i) => {
//             const isLinkActive = isActive(link);
//             return (
//               <Link
//                 key={i}
//                 href={
//                   link.name === "Overview"
//                     ? "/"
//                     : link.name === "Recurring Bills"
//                     ? "/recurringbills"
//                     : "/" + link.name.toLowerCase().trim()
//                 }
//               >
//                 <button
//                   className={`w-full md:w-[13.54%] flex flex-col rounded-t-lg lg:px-0 lg:rounded-tl-none overflow-hidden mt-[8px] lg:w-[92%] lg:rounded-r-lg lg:flex-row lg:gap-[10px] lg:mt-0 ${
//                     isLinkActive
//                       ? "bg-[#F8F4F0] text-[#201F24]"
//                       : "bg-[#201F24] text-[#B3B3B3]"
//                   } ${!isLinkActive && "hover:bg-black/20"}`}
//                 >
//                   <div
//                     className={`hidden lg:flex w-[1.81%] h-full min-h-[56px] ${
//                       isLinkActive ? "bg-[#277C78]" : ""
//                     }`}
//                   ></div>
//                   <div className="w-full flex flex-col items-center justify-center pt-2 lg:justify-start lg:flex-row lg:items-center lg:gap-4 lg:py-4 lg:pl-[9.78%]">
//                     <link.icon isLinkActive={isLinkActive} />
//                     <p
//                       className={`hidden md:flex md:text-[12px] lg:text-base ${
//                         minimize && "lg:hidden"
//                       }`}
//                     >
//                       {link.name ? link.name : ""}
//                     </p>
//                   </div>
//                   <div className="w-full min-h-[5px] bg-[#277C78] lg:hidden"></div>
//                 </button>
//               </Link>
//             );
//           })}
//         </div>

//         <div
//           className={`w-full hidden py-4 px-6 lg:flex flex-col gap-4 min-h-[125px] ${
//             minimize && "lg:items-start"
//           }`}
//         >
//           <div className="w-full h-[1px] bg-[#B3B3B3]"></div>
//           <div
//             className={`flex flex-col items-start gap-2 text-xs lg:pl-[9%] ${
//               minimize && "hidden "
//             } `}
//           >
//             <p className="">
//               User:{" "}
//               <span className="text-[#277C78] text-sm">{user?.userName}</span>{" "}
//             </p>
//             <p>
//               Email:{" "}
//               <span className="text-[#277C78] text-sm"> {user?.email} </span>{" "}
//             </p>
//           </div>

//           <div
//             className={`w-[20px] h-[20px] relative group flex items-center gap-2 ${
//               minimize && "pt-[84px]"
//             }`}
//           >
//             <LogOut />
//             {/* <span className="absolute left-[60px] top-1/2 transform -translate-y-1/2  -translate-x-1/2 bottom-full shadow-lg mb-1 text-xs text-[#B3B3B3] bg-[#201F24] p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"> */}
//             <span
//               className={`${
//                 minimize
//                   ? "lg:left-[20px] lg:top-[25px]"
//                   : "lg:left-[60px] lg:top-1/2"
//               } absolute top-1/2 transform -translate-y-1/2  -translate-x-1/2 bottom-full shadow-lg mb-1 text-xs text-[#B3B3B3] bg-[#201F24] p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}
//             >
//               Log out
//             </span>
//           </div>
//         </div>

//         <button
//           onClick={() => setMinimize((prev) => !prev)}
//           className="hidden lg:w-[92%] lg:rounded-r-lg lg:flex flex-row gap-[10px]"
//         >
//           {/* <div className="flex flex-row items-center gap-4 py-4 pl-[11.81%] pt-[calc(100vh-432px)]"> */}
//           <div className={`flex flex-row items-center gap-4 py-4 pl-[11.81%] pt-[calc(100vh-600px)] ${minimize && "w-full pl-[16%]"}`}>
//             <MinimizeMenu minimize={minimize} />
//             <p className={`${minimize && "lg:hidden"}`}>Minimize Menu</p>
//           </div>
//         </button>
//       </div>
//     </section>
//   );
// };

// export default SideBar;














"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/app/commons/data";
import { IconType } from "../../__atoms/billIcon/BillIcon";
import { Logo, LogOut, MinimizeMenu } from "../../__atoms";
import useAccessToken from "@/app/hooks/use-toke";
import { GlobalContext } from "@/app/context/Context";
import Image from "next/image";



export type NavLinkType = {
  name: string;
  icon: React.ComponentType<IconType>;
};

const SideBar = () => {
  const path = usePathname();
  const { user } = useAccessToken();
  // const [minimize, setMinimize] = useState(false);
  const context = useContext(GlobalContext);

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

  if (!context) return null;
  const { minimize, setMinimize } = context;

  return (
    <section
      className={`absolute z-10 bottom-0 left-0 max-h-[52px] w-full md:max-h-[74px] lg:left-0 lg:top-0  lg:min-h-full lg:h-screen bg-[#201F24] rounded-t-md md:rounded-t-lg lg:rounded-t-xl lg:rounded-tl-none lg:rounded-r-3xl order-last lg:order-none ${
        minimize ? "lg:w-[88px]" : "lg:w-[300px]"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="text-[#B3B3B3] w-full px-4 md:px-10 lg:px-0 flex flex-row items-end justify-around lg:flex-col ">
        <div className={`w-full pl-[11.59%] py-10 hidden lg:flex ${minimize && "flex items-start justify-center"} ${minimize && "lg:pl-0"}`}>
          {minimize ? (

          <div className="w-[12.48px] h-[21.44px]">
                <Image src={"/assets/f.svg"} alt={"f-logo"} width={12.48} height={21.44} />
          </div>
          ): (
            <Logo />
          )}
      
        </div>
        
        <div className="w-full flex flex-row justify-between lg:flex-col md:gap-1  ">
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
                  className={`w-[68.59px] md:w-[104px] flex flex-col rounded-t-lg lg:px-0 lg:rounded-tl-none overflow-hidden mt-[8px] lg:w-[92%] lg:rounded-r-lg lg:flex-row lg:gap-[10px] lg:mt-0 ${
                    isLinkActive
                      ? "bg-[#F8F4F0] text-[#201F24]"
                      : "bg-[#201F24] text-[#B3B3B3]"
                  } ${!isLinkActive && "hover:bg-black/20"}`}
                >
                  <div
                    className={`hidden lg:flex w-[1.81%] h-full min-h-[56px] ${
                      isLinkActive ? "bg-[#277C78]" : ""
                    }`}
                  ></div>
                  <div className="w-full flex flex-col items-center justify-center pt-2 lg:justify-start lg:flex-row lg:items-center lg:gap-4 lg:py-4 lg:pl-[9.78%]">
                    <link.icon isLinkActive={isLinkActive} />
                    <p
                      className={`hidden md:flex md:text-[12px] lg:text-base ${
                        minimize && "lg:hidden"
                      }`}
                    >
                      {link.name ? link.name : ""}
                    </p>
                  </div>
                  <div className={`w-full min-h-[5px] lg:hidden ${
                      isLinkActive ? "bg-[#277C78]" : ""
                    }`}></div>
                </button>
              </Link>
            );
          })}
        </div>

        <div
          className={`w-full hidden py-4 px-6 lg:flex flex-col gap-4 min-h-[125px] ${
            minimize && "lg:items-start"
          }`}
        >
          <div className="w-full h-[1px] bg-[#B3B3B3]"></div>
          <div
            className={`flex flex-col items-start gap-2 text-xs lg:pl-[9%] ${
              minimize && "hidden "
            } `}
          >
            <p className="">
              User:{" "}
              <span className="text-[#277C78] text-sm">{user?.userName}</span>{" "}
            </p>
            <p>
              Email:{" "}
              <span className="text-[#277C78] text-sm"> {user?.email} </span>{" "}
            </p>
          </div>

          <div
            className={`relative group flex items-center gap-2 w-full pl-[9%] ${
              minimize && "pt-[84px] w-full "
            } `}
          >
            <LogOut />
            {/* <span className="absolute left-[60px] top-1/2 transform -translate-y-1/2  -translate-x-1/2 bottom-full shadow-lg mb-1 text-xs text-[#B3B3B3] bg-[#201F24] p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"> */}
            <span
              className={`${
                minimize
                  ? "lg:left-[20px] lg:top-[45px]"
                  : "lg:left-[73px] lg:top-1/2"
              } w-max absolute top-1/2 transform -translate-y-1/2  -translate-x-1/2 bottom-full shadow-lg mb-1 text-xs text-[#B3B3B3] bg-[#201F24] p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}
            >
              Log out
            </span>
          </div>
        </div>

        <button
          onClick={() => setMinimize((prev) => !prev)}
          className="hidden lg:w-[92%] lg:rounded-r-lg lg:flex flex-row gap-[10px]"
        >
          {/* <div className="flex flex-row items-center gap-4 py-4 pl-[11.81%] pt-[calc(100vh-432px)]"> */}
          <div className={`flex flex-row items-center gap-4 py-4 pl-[11.81%] ${minimize && "w-full pl-[16%]"} ${minimize ? "pt-[calc(100vh-625px)]" : "pt-[calc(100vh-610px)]"}`}>
            <MinimizeMenu minimize={minimize} />
            <p className={`${minimize && "lg:hidden"}`}>Minimize Menu</p>
          </div>
        </button>
      </div>
    </section>
  );
};

export default SideBar;
