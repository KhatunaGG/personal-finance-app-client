export type SortFilterHeaderPropsType = {
  isRecurringBills?: boolean;
};
const SortFilterHeader = ({ isRecurringBills }: SortFilterHeaderPropsType) => {
  return (
    <div
      className={`${
        isRecurringBills ? "gap-0 px-4" : "md:gap-[3.31%]"
      } hidden w-full md:flex items-center justify-between py-3 border-b border-b-[#F2F2F2]  text-xs text-[#696868] font-normal`}
    >
      <div
        className={`${
          isRecurringBills
            ? "w-[50.23%]"
            : "md:w-[60.16%] grid grid-cols-[1fr, 120px] md:gap-x-4"
        }`}
      >
        <div className="flex items-center justify-between">
          <p className={``}>{isRecurringBills ? "Bill Title" : "Category"}</p>
          <p
            className={`${
              isRecurringBills ? "hidden" : "flex"
            } md:w-[80px] lg:w-[120px]`}
          >
            Recurring Bills
          </p>
        </div>
      </div>
      <div
        className={`${
          isRecurringBills ? "w-[45.68%]" : "md:w-[36.51%] "
        } flex items-center justify-between`}
      >
        <p className="">
          {isRecurringBills ? "Due Date" : "Transaction Date "}
        </p>
        <p className="">Amount</p>
      </div>
    </div>
  );
};

export default SortFilterHeader;
