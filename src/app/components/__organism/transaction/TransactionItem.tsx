// import Image from "next/image";

const TransactionItem = () => {
  return (
    <div className=" w-full  flex items-center justify-between py-4 border-t border-t-[#F2F2F2] md:gap-[3.31%]">
      <div className="-200 md:w-[60.16%] grid grid-cols-[40px,1fr] md:gap-x-4">
        <div className="relative w-8 h-8 md:w-[40px] md:h-[40px] rounded-full overflow-hidden object-cover bg-green-700">
          {/* <Image
          className="absolute inset-0 w-full h-full object-cover"
          src={logo}
          fill
          alt={"logo"}
        /> */}
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm font-bold text-[#201F24]">General</p>
          <div className="md:w-[80px] lg:w-[120px]">
            <input type="checkbox" name="" id="" />
          </div>
        </div>
      </div>

      <div className="md:w-[36.51%] flex items-center justify-between">
        <p className="text-xs text-[#696868] font-normal">11 Aug 2025</p>
        <p className="text-sm font-bold text-[#201F24]">+$155.00</p>
      </div>
    </div>
  );
};

export default TransactionItem;
