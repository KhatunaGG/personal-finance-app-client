import Image from "next/image";

export type LatestSpendingPropsType = {
  logo: string;
  category: string;
  amount: number;
  isLastEl: number;
  createdAt?: string;
  updatedAt?: string;
};

const LatestSpending = ({
  logo,
  amount,
  isLastEl,
  createdAt,
}: LatestSpendingPropsType) => {
  return (
    <div
      className={`w-full grid grid-cols-[70%_30%] md:grid-cols-2 py-[20px] ${
        isLastEl !== -1 ? "border-b-[1px] border-b-[#dedada] items-center" : ""
      }`}
    >
      <div className="flex flex-row items-center gap-4">
        <div className="relative w-8 h-8 md:w-[40px] md:h-[40px] rounded-full overflow-hidden object-cover">
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src={logo}
            fill
            alt={"logo"}
          />
        </div>
        <p className="text-[12px] text-[#696868] font-normal">{createdAt}</p>
      </div>

      <p className="text-[14px] font-bold text-right">
        -${Math.abs(amount).toFixed(2)}
      </p>
    </div>
  );
};

export default LatestSpending;
