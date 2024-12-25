import Image from "next/image";
import React from "react";
import { Logo } from "../../__atoms";

const Header = () => {
  return (
    <section className="flex items-center justify-center w-full h-[69.76px] bg-gray-900 rounded-b-[12px] lg:hidden ">
      <div className="w-[121.45px] h-[21.76px]">
        <Image
          src={"/assets/Logo.png"}
          alt={"logo"}
          width={121.45}
          height={21.76}
          layout="responsive"
          objectFit="contain"
        />

      </div>
    </section>
  );
};

export default Header;
