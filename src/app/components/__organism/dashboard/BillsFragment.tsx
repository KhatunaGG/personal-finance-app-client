import { FragmentTitle } from "../../__molecules";
import { BillsFragmentPropsType } from "@/app/interfaces/interface";



const BillsFragment = ({ recurringBills }: BillsFragmentPropsType) => {
  return (
    <section className='bg-white rounded-xl px-[20px] py-6  w-full grid grid-cols-1  gap-8  md:px-0 md:py-0 md:p-6 lg:p-8 "'>
      <FragmentTitle isFragment={true} title={"Recurring Bills"} />
      {Array.isArray(recurringBills) && recurringBills.length > 0 ? (
        <div className="w-full grid grid-cols-1 gap-y-3">
          {recurringBills.map((bill, i) => (
            <div
              key={i}
              className="w-full  grid grid-cols-[5px_1fr] gap-4 bg-[#F8F4F0] rounded-lg  overflow-hidden"
            >
              <div style={{ background: bill.color }}></div>
              <div className="w-full grid grid-cols-2 justify-between py-[20px] pr-4">
                <h2 className="text-[14px] text-[#696868] font-normal">
                  {bill.category}
                </h2>
                <p className="text-right text-[#201F24] text-[14px] font-bold">
                  {bill.amount != null && !isNaN(bill.amount)
                    ? bill.amount < 0
                      ? `-$${Math.abs(bill.amount).toFixed(2)}`
                      : `$${bill.amount.toFixed(2)}`
                    : "$0.00"}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white  w-full p-8 flex items-center justify-center gap-[20px] lg:max-h-[218px]">
          <p className="text-[10px] text-[#696868]">
            No RecurringBills available. Start by creating one!
          </p>{" "}
        </div>
      )}
    </section>
  );
};

export default BillsFragment;
