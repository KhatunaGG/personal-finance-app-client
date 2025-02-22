"use client";
import Image from "next/image";
import { FragmentTitle } from "../../__molecules";
import {
  PotsDataType,
  TransactionsFragmentPropsType,
  TransactionType,
} from "@/app/interfaces/interface";

const isTransaction = (
  transaction: TransactionType | PotsDataType
): transaction is TransactionType => {
  return (transaction as TransactionType).category !== undefined;
};

const TransactionsFragment = ({
  transactions,
}: TransactionsFragmentPropsType) => {
  return (
    <section className="bg-white rounded-xl px-[20px] py-6  w-full md:p-6 lg:p-8 flex flex-col ">
      <FragmentTitle isFragment={true} title={"Transactions"} />
      {transactions.length > 0 ? (
        <div className=" grid grid-cols-1 pt-[20px]  ">
          {transactions.map((transaction, i) => {
            const isLastItem = i === transactions.length - 1;
            return (
              <div
                key={transaction._id}
                className={`w-full grid grid-cols-[70%_30%] md:grid-cols-2 pt-[20px]  ${
                  isLastItem
                    ? "border-none pb-0"
                    : "border-b-[1px] border-b-[#F2F2F2] pb-[20px]"
                } }`}
              >
                <div className="flex flex-row items-center gap-4">
                  <div className="relative w-8 h-8 md:w-[40px] md:h-[40px] rounded-full overflow-hidden object-cover">
                    {isTransaction(transaction) && transaction.categoryLogo ? (
                      <Image
                        className="absolute inset-0 w-full h-full object-cover"
                        src={transaction.categoryLogo}
                        fill
                        alt="transaction.categoryLogo"
                      />
                    ) : (
                      <div
                        style={{ backgroundColor: transaction.color }}
                        className={`w-8 h-8 rounded-full md:w-[40px] md:h-[40px] `}
                      ></div>
                    )}
                  </div>
                  {isTransaction(transaction)
                    ? transaction.category
                    : transaction.potName}
                </div>

                <div className="flex flex-col gap-y-2 text-right">
                  <p className="text-[14px] font-bold">
                    {transaction.amount > 0
                      ? `$${transaction.amount.toFixed(2)}`
                      : `-$${Math.abs(transaction.amount).toFixed(2)}`}
                  </p>
                  <p className="text-[12px] text-[#696868] font-normal">
                    {transaction.createdAt}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white  w-full p-8 flex items-center justify-center gap-[20px] lg:max-h-[218px]  mt-[32px]">
          <p className="text-[10px] text-[#696868]">
            No transactions available. Start by creating one!
          </p>{" "}
        </div>
      )}
    </section>
  );
};

export default TransactionsFragment;
