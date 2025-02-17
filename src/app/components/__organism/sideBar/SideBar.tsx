"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/app/commons/data";
import { Logo, LogOut, MinimizeMenu } from "../../__atoms";
import useAccessToken from "@/app/hooks/use-toke";
import { GlobalContext } from "@/app/context/Context";
import Image from "next/image";
import { NavLinkType } from "@/app/interfaces/interface";


const SideBar = () => {
  const path = usePathname();
  const { user, logout } = useAccessToken();
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
        <div
          className={`w-full pl-[11.59%] py-10 hidden lg:flex ${
            minimize && "flex items-start justify-center"
          } ${minimize && "lg:pl-0"}`}
        >
          {minimize ? (
            <div className="w-[12.48px] h-[21.44px]">
              <Image
                src={"/assets/f.svg"}
                alt={"f-logo"}
                width={12.48}
                height={21.44}
              />
            </div>
          ) : (
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
                  <div
                    className={`w-full min-h-[5px] lg:hidden ${
                      isLinkActive ? "bg-[#277C78]" : ""
                    }`}
                  ></div>
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
            onClick={logout}
            className={`relative group flex items-center gap-2 w-full pl-[9%] ${
              minimize && "pt-[84px] w-full "
            } `}
          >
            <LogOut />
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
          className="hidden lg:w-[92%] lg:rounded-r-lg lg:flex flex-row gap-[10px] group transition-all duration-400 hover:text-white"
        >
          <div
            className={`flex flex-row items-center gap-4 py-4 pl-[11.81%] ${
              minimize && "w-full pl-[16%]"
            } ${
              minimize ? "pt-[calc(100vh-625px)]" : "pt-[calc(100vh-610px)]"
            }`}
          >
            <MinimizeMenu minimize={minimize} />
            <p className={`${minimize && "lg:hidden"}`}>Minimize Menu</p>
          </div>
        </button>
      </div>
    </section>
  );
};

export default SideBar;
