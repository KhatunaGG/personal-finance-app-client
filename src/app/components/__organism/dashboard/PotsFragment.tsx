"use client";
import {  PotLargeIcon } from "../../__atoms";

import { PotsDataType } from "../pots/PotsSection";
import { FragmentTitle } from "../../__molecules";

export type PotsFragmentPropsType = {
  pots: PotsDataType[];
};

const PotsFragment = ({ pots }: PotsFragmentPropsType) => {
  return (
    <section className="bg-white rounded-xl   w-full p-8 flex flex-col gap-[20px] lg:max-h-[218px]">
      {/* <div className="w-full flex items-center justify-between">
        <h2 className="font-bold text-[20px] text-[#201F24]">Pots</h2>
        <Link href={"/pots"} className="flex flex-row items-center gap-3">
          <p className="text-[14px] text-[#696868] font-normal">See Details</p>
          <ArrowRight />
        </Link>
      </div> */}
      <FragmentTitle isFragment={true} title={"Pots"} />

      {pots.length > 0 ? (
        <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-y-[20px] md:gap-x-[20px]">
          <div className="px-4 py-[20px] flex flex-row items-center gap-6 bg-[#F8F4F0] rounded-lg">
            <PotLargeIcon />
            <div className="flex-flex-col gap-[11px]">
              <p className="text-[14px] text-[#696868] font-normal">
                Total Saved
              </p>
              <h2 className="text-[32px] font-bold text-[#201F24]">$850</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 max-w-full gap-y-4">
            {pots.map((pot, i) => (
              <div key={i} className="flex flex-row gap-4 ">
                <div
                  style={{ backgroundColor: pot.color }}
                  className={`w-[5px] h-full min-h-[43px] rounded-sm`}
                ></div>
                <div className="flex flex-col items-start justify-center gap-1">
                  <p className="text-[12px] font-normal text-[#696868]">
                    {pot.potName}
                  </p>
                  <p className="text-[#201F24] font-bold text-[14px]">
                    {" "}
                    {pot.amount < 0
                      ? `-$${Math.abs(pot.amount).toFixed(2)}`
                      : `$${pot.amount.toFixed(2)}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white  w-full p-8 flex items-center justify-center gap-[20px] ">
          <p className="text-[10px] text-[#696868]">
            No pots available. Start by creating one!
          </p>{" "}
        </div>
      )}
    </section>
  );
};

export default PotsFragment;
