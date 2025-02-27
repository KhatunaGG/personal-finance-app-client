"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Logo } from "../../__atoms";
import { axiosInstance } from "@/app/libs/axiosInstance";
import { useState } from "react";
import { schema } from "@/app/schema/signUpSchema";

export type signUpType = {
  userName: string;
  email: string;
  password: string;
};

const SignUpSection = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<signUpType>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: signUpType) => {
    console.log(data, "data");
    try {
      const res = await axiosInstance.post("/auth/sign-up", data);

      if (res.status === 200 || res.status === 201) {
        reset();
        router.push("/log-in");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message || "An error occurred";
        toast.error(message, {
          position: "top-left",
          autoClose: 2000,
        });
      } else {
        toast.error("An error occurred", {
          position: "top-left",
          autoClose: 2000,
        });
      }
    }
  };

  return (
    <div className="w-vw min-h-screen bg-[#F2F3F7]  flex flex-row p-8">
      <div className="hidden bg-bannerImage  bg-no-repeat bg-cover bg-button  w-[41.66%] max-h-screen rounded-[12px] lg:flex">
        <div className="w-vw h-full px-10 py-10 flex flex-col justify-between">
          <Logo />
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-white text-[32px] w-[20ch]">
              Keep track of your money and save for your future
            </h3>
            <p className="font-regular text-[14px] text-white w-[53ch]">
              Personal finance app puts you in control of your spending. Track
              transactions, set budgets, and add to savings pots easily.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-2/3 flex justify-center items-center lg:px-[9.2%] lg:w-[58.33%]">
        <div className="w-full rounded-[12px] bg-white p-8 flex flex-col gap-8">
          <h1 className="text-[#201F24] font-bold text-[32px] leading-[1.2]">
            Sign up
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="lg:w-full ">
            <div className="relative flex flex-col mb-4">
              <label
                htmlFor="userName"
                className="text-gray-500 font-bold mb-1 text-[12px]"
              >
                Name
              </label>
              <input
                type="text"
                className="border border-beige-500 py-3 px-5 rounded-[8px] outline-none"
                placeholder="userName"
                {...register("userName")}
              />
              {errors.userName && (
                <span className="absolute bottom-[-18px] right-[5px] italic text-[#CD2C2C] font-medium text-[12px] tracking-[-0.21px] rounded-md">
                  {errors.userName.message}
                </span>
              )}
            </div>

            <div className="relative flex flex-col mb-4">
              <label
                htmlFor="email"
                className="text-gray-500 font-bold mb-1 text-[12px]"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                {...register("email")}
                className="border border-beige-500 py-3 px-5 rounded-[8px] outline-none"
              />
              {errors.email && (
                <span className="absolute bottom-[-18px] right-[5px] italic text-[#CD2C2C] font-medium text-[12px] tracking-[-0.21px] rounded-md">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="relative flex flex-col mb-8 ">
              <label
                htmlFor="email"
                className="text-gray-500 font-bold mb-1 text-[12px]"
              >
                Create Password
              </label>
              <div className=" w-full relative">
                <input
                  type={`${!showPassword ? "password" : "text"}`}
                  placeholder="Password"
                  {...register("password")}
                  className="border border-beige-500 py-3 px-5 rounded-[8px] w-full outline-none"
                />
                {errors.password && (
                  <span className="absolute bottom-[-18px] right-[5px] italic text-[#CD2C2C] font-medium text-[12px] tracking-[-0.21px] rounded-md">
                    {errors.password.message}
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute top-1/2 right-5 transform -translate-y-1/2 translate-x-1/2 w-6 h-6 cursor-pointer"
                >
                  <Image
                    src={`${
                      !showPassword
                        ? "/assets/eye.png"
                        : "/assets/eye-notShow.svg"
                    }`}
                    alt="eye"
                    width={24}
                    height={24}
                    style={{ width: "24px", height: "24px" }}
                  />
                </button>
              </div>

              <span className="absolute"></span>
            </div>

            <button
              type="submit"
              className="font-bold block text-[14px] text-white py-4 bg-gray-900 rounded-[8px] w-full"
            >
              Create Account
            </button>
          </form>

          <div className="flex items-center justify-center gap-2">
            <p className="text-gray-500 font-regular text-[14px]">
              Already have an account?
            </p>
            <button type="submit" className="text-gray-900">
              <Link href="/log-in" className="font-bold text-[14px] underline">
                Log in
              </Link>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUpSection;
