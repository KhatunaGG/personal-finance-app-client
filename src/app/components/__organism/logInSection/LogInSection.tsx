"use client";
import React, { useState } from "react";
import Image from "next/image";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { axiosInstance } from "@/app/libs/axiosInstance";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import Link from "next/link";
import { Logo } from "../../__atoms";
import { schema } from "@/app/schema/loginSchema";

export type LogInType = {
  email: string;
  password: string;
};


const LogInSection = () => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState("");
  console.log(accessToken);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LogInType>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LogInType) => {
    console.log(data, "data");
    try {
      const res = await axiosInstance.post("/auth/sign-in", data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res.status === 200 || res.status === 201) {
        const token = res.data.accessToken;
        setAccessToken(token);
        setCookie("accessToken", token, { maxAge: 60 * 60 });
        if (token) {
          router.push("/");
        }
        reset();
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
      <div className="hidden bg-bannerImage  bg-no-repeat    bg-cover bg-button w-[41.66%] max-h-screen rounded-[12px] lg:flex">
        <div className="w-vw h-full px-10 py-10 flex flex-col justify-between ">
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

      <div className="w-full flex justify-center items-center lg:px-[9.2%] lg:w-[58.33%]">
        <div className="w-full rounded-[12px] bg-white p-8 flex flex-col gap-8">
          <h1 className="text-[#201F24] font-bold text-[32px] leading-[1.2]">
            Login
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="lg:w-full ">
            <div className="relative flex flex-col mb-4">
              <label
                htmlFor="email"
                className="text-gray-500 font-bold mb-1 text-[12px]"
              >
                Email
              </label>
              <input
                type="email"
                className="border border-beige-500 py-3 px-5 rounded-[8px] outline-none"
                placeholder="Email"
                {...register("email")}
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
                  className="border border-beige-500 py-3 px-5 rounded-[8px] w-full outline-none"
                  placeholder="Password"
                  {...register("password")}
                />
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
                    style={{ width: 'auto', height: 'auto' }} 
                  />
                </button>
              </div>

              {errors.password && (
                <span className="absolute bottom-[-18px] right-[5px] italic text-[#CD2C2C] font-medium text-[12px] tracking-[-0.21px] rounded-md">
                  {errors.password.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="font-bold block text-[14px] text-white py-4 bg-gray-900 rounded-[8px] w-full"
            >
              Login
            </button>
          </form>

          <div className="flex items-center justify-center gap-2">
            <p className="text-gray-500 font-regular text-[14px]">
              Need to create an account?
            </p>
            <button className="text-gray-900">
              <Link href="/sign-up" className="font-bold text-[14px] underline">
                Sign Up
              </Link>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LogInSection;
