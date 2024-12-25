// import Image from "next/image";
// import React from "react";
// import Header from "../header/Header";

// const SignUp = () => {
//   return (
//     <div className="w-full h-[calc(100vh-69.76px)] lg:h-screen flex lg:flex-row">
//       <Header />
//       <div className="flex-shrink-0 w-1/3 relative rounded-[12px] overflow-hidden hidden lg:flex">
//         <Image
//           src="/assets/hero.png"
//           alt="Hero Image"
//           layout="fill"
//           objectFit="cover"
//           className="hidden lg:flex"
//         />

//         <div className="">
//           <h1 className="text-white">hello</h1>
//         </div>
//       </div>

//       <div className="w-full lg:w-2/3 flex justify-center items-center lg:px-[9.2%]">
//         <div className="w-full rounded-[12px] bg-white p-8 flex flex-col gap-8">
//           <h1 className="text-[#201F24] font-bold text-[32px] leading-[1.2]">
//             Login
//           </h1>

//           <form className="lg:w-full ">

//             <div className="relative flex flex-col mb-4">
//               <label
//                 htmlFor="email"
//                 className="text-gray-500 font-bold mb-1 text-[12px]"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 className="border border-beige-500 py-3 px-5 rounded-[8px] outline-none"
//               />
//               <span className="absolute"></span>
//             </div>

//             <div className="relative flex flex-col mb-8 ">
//               <label
//                 htmlFor="email"
//                 className="text-gray-500 font-bold mb-1 text-[12px]"
//               >
//                 Create Password
//               </label>
//               <div className=" w-full relative">
//                 <input
//                   type="password"
//                   className="border border-beige-500 py-3 px-5 rounded-[8px] w-full outline-none"
//                 />
//                 <button className="absolute top-1/2 right-5 transform -translate-y-1/2 translate-x-1/2 w-6 h-6 cursor-pointer">
//                   <Image
//                     src="/assets/eye.png"
//                     alt="eye"
//                     layout="fill"
//                     objectFit="contain"
//                   />
//                 </button>
//               </div>

//               <span className="absolute"></span>
//             </div>

//             <button
//               type="submit"
//               className="font-bold block text-[14px] text-white py-4 bg-gray-900 rounded-[8px] w-full"
//             >
//               CLogin
//             </button>
//           </form>

//           <div className="flex items-center justify-center gap-2">
//             <p className="text-gray-500 font-regular text-[14px]">
//             Need to create an account?
//             </p>
//             <button className="text-gray-900">
//               <a href="" className="font-bold text-[14px] underline">
//               Sign Up
//               </a>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;





//*********************************************************************************************************** */

// "use client";
// import React, { useContext } from "react";
// import Image from "next/image";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import { axiosInstance } from "@/app/libs/axiosInstance";
// import { useRouter } from "next/navigation";
// import { setCookie } from "cookies-next";
// import { GlobalContext } from "@/app/context/Context";
// import Link from "next/link";
// import { Logo } from "../../__atoms";

// export type LogInType = {
//   email: string;
//   password: string;
// };

// const LogInSection = () => {
//   // const [errorMessage, setErrorMessage] = useState("");
//   const router = useRouter();

//   const context = useContext(GlobalContext);
//   if (!context) {
//     return <div>Loading...</div>; 
//   }
//   const { setAccessToken, accessToken } = context || {};

//   const schema = yup.object().shape({
//     email: yup
//       .string()
//       .required("Email cannot be empty")
//       .email("Looks like this is not an email"),
//     password: yup
//       .string()
//       .required("Password cannot be empty")
//       .matches(
//         /^(?=[A-Za-z0-9]*$)[A-Za-z0-9]{4,20}$/,
//         "Letters and Numbers only"
//       ),
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<LogInType>({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = async (data: LogInType) => {
//     console.log(data, "data");
//     try {
//       const res = await axiosInstance.post("/auth/sign-in", data);
//       if (res.status === 200 || res.status === 201) {
//         const token = res.data.accessToken;
//         // setTokenFromCookie(token);
//         setAccessToken(token);
//         setCookie("accessToken", token, { maxAge: 60 * 60 });
//         reset();
//         if (token) {
//           router.push("/overview");
//         }
//       }
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         const message = error.response?.data?.message || "An error occurred";
//         toast.error(message, {
//           position: "top-left",
//           autoClose: 2000,
//         });
//       } else {
//         toast.error("An error occurred", {
//           position: "top-left",
//           autoClose: 2000,
//         });
//       }
//     }
//   };

//   console.log(accessToken, "accessToken");

//   return (
//     <div className="w-vw min-h-screen bg-[#F2F3F7]  flex flex-row p-8">
//       <div className="hidden bg-bannerImage  bg-no-repeat    bg-cover bg-button  w-[41.66%] h-screen  bg-red-300  rounded-[12px] lg:flex">
//         <div className="w-vw h-full px-10 py-10 flex flex-col justify-between">
//           {/* <div className="w-[121.45px] h-[21.76px]">
//             <Image
//               src={"/assets/Logo.png"}
//               alt={"logo"}
//               width={121.45}
//               height={21.76}
//               // style={{ objectFit: "contain" }}
//               className=""
//             />
//           </div> */}

//           <Logo />

//           <div className="flex flex-col gap-6">
//             <h3 className="font-bold text-white text-[32px] w-[20ch]">
//               Keep track of your money and save for your future
//             </h3>
//             <p className="font-regular text-[14px] text-white w-[53ch]">
//               Personal finance app puts you in control of your spending. Track
//               transactions, set budgets, and add to savings pots easily.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="w-full flex justify-center items-center lg:px-[9.2%] lg:w-[58.33%]">
//         <div className="w-full rounded-[12px] bg-white p-8 flex flex-col gap-8">
//           <h1 className="text-[#201F24] font-bold text-[32px] leading-[1.2]">
//             Login
//           </h1>

//           <form onSubmit={handleSubmit(onSubmit)} className="lg:w-full ">
//             <div className="relative flex flex-col mb-4">
//               <label
//                 htmlFor="email"
//                 className="text-gray-500 font-bold mb-1 text-[12px]"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 className="border border-beige-500 py-3 px-5 rounded-[8px] outline-none"
//                 placeholder="Email"
//                 {...register("email")}
//               />
//               {errors.email && (
//                 <span className="absolute bottom-[-18px] right-[5px] italic text-[#CD2C2C] font-medium text-[12px] tracking-[-0.21px] rounded-md">
//                   {errors.email.message}
//                 </span>
//               )}
//             </div>

//             <div className="relative flex flex-col mb-8 ">
//               <label
//                 htmlFor="email"
//                 className="text-gray-500 font-bold mb-1 text-[12px]"
//               >
//                 Create Password
//               </label>
//               <div className=" w-full relative">
//                 <input
//                   type="password"
//                   className="border border-beige-500 py-3 px-5 rounded-[8px] w-full outline-none"
//                   placeholder="Password"
//                   {...register("password")}
//                 />
//                 <button className="absolute top-1/2 right-5 transform -translate-y-1/2 translate-x-1/2 w-6 h-6 cursor-pointer">
//                   <Image
//                     src="/assets/eye.png"
//                     alt="eye"
//                     // layout="intrinsic"
//                     width={24}
//                     height={24}
//                     // style={{ objectFit: "contain" }}
//                   />
//                 </button>
//               </div>

//               {errors.password && (
//                 <span className="absolute bottom-[-18px] right-[5px] italic text-[#CD2C2C] font-medium text-[12px] tracking-[-0.21px] rounded-md">
//                   {errors.password.message}
//                 </span>
//               )}
//             </div>

//             <button
//               type="submit"
//               className="font-bold block text-[14px] text-white py-4 bg-gray-900 rounded-[8px] w-full"
//             >
//               Login
//             </button>
//           </form>

//           <div className="flex items-center justify-center gap-2">
//             <p className="text-gray-500 font-regular text-[14px]">
//               Need to create an account?
//             </p>
//             <button className="text-gray-900">
//               <Link href="/sign-up" className="font-bold text-[14px] underline">
//                 Sign Up
//               </Link>
//             </button>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default LogInSection;












//*********************************************************************************************************** */


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
  const router = useRouter();
  const context = useContext(GlobalContext);
  
  // Always call hooks outside of any conditional logic
  const [loading, setLoading] = useState(true);
  const [accessToken, setAccessToken] = useState<string | null>(null); // or use context directly if applicable

  // Early return if context is not available
  if (!context) {
    return null;
  }

  const { setAccessToken: setContextAccessToken } = context;

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getCookie("accessToken");
      if (!token) {
        router.push("/sign-up");
      } else {
        setContextAccessToken(token as string);
        setAccessToken(token as string); // update local state as well if needed
      }
      setLoading(false);
    };

    fetchToken();
  }, [setContextAccessToken, router]);

  // Early return if loading or accessToken is not available yet
  if (loading || !accessToken) {
    return null;
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
