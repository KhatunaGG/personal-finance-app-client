import { GroupedCategory } from "@/app/hooks/use-categoryGrope";

export type SpendingPropsType = {
  groupedData: GroupedCategory[];
};

const Spending = ({ groupedData }: SpendingPropsType) => {
  const slicedGroupedData =
    groupedData.length < 4
      ? groupedData
      : groupedData.slice(groupedData.length - 4);

  return (
    <div className="w-full flex flex-col gap-y-2">
      <p className="text-[#201F24] text-[20px] font-bold">Spending Summary</p>
      <div>
        {slicedGroupedData.map((item, i) => {
          if (item.spending < 0) {
            return (
              <div key={i} className="flex flex-row gap-4 py-4">
                <div
                  style={{ backgroundColor: item.color }}
                  className="w-[5px] h-full min-h-[21px] rounded-sm"
                ></div>
                <div className="w-full flex flex-row items-center justify-between ">
                  <p className="text-[12px] font-normal text-[#696868]">
                    {item.category}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-[#201F24] font-bold text-[14px]">
                      ${Math.abs(item.spending).toFixed(2)}
                    </p>
                    <p className="text-[#696868] font-normal text-[12px]">
                      of ${item.totalAmount.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Spending;
