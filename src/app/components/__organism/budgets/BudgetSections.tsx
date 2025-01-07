"use client";
import { useContext, useEffect, useState } from "react";
import { BudgetPieChart } from "../../__molecules";
import BudgetItem from "./BudgetItem";
import Spending from "./Spending";
import Modal from "../modal/Modal";
import { axiosInstance } from "@/app/libs/axiosInstance";
import { useRouter } from "next/navigation";
import useAccessToken from "@/app/hooks/use-toke";
import { DataType } from "@/app/interfaces/interface";
import { GroupedCategory, useGroupedData } from "@/app/hooks/use-categoryGrope";
import useBudgetUtils from "@/app/hooks/use-budgetUtils";
import { GlobalContext } from "@/app/context/Context";


const BudgetSections = () => {
  const [data, setData] = useState<DataType[]>([]);
  const router = useRouter();
  const { accessToken, isLoading } = useAccessToken();
  const { getColorHex } = useBudgetUtils();
  const [isAddBudget, setIsAddBudget] = useState(false);
  const groupedData = useGroupedData(data);
  const context = useContext(GlobalContext);


  const [isEdit, setIsEdit] = useState(false)
  const [activeModalItem, setActiveModalItem] = useState<number | null>(null);
  // const [categoryToEdit, setCategoryToEdit] = useState<string | undefined>()

  const [categoryToEdit, setCategoryToEdit] = useState<GroupedCategory | null>(null);


// console.log(isEdit, "isEdit")
// console.log(activeModalItem, "activeModalItem from BudgetSection")

useEffect(() => {
  if (activeModalItem !== null) {
    setCategoryToEdit(groupedData[activeModalItem]);
  } else {
    setCategoryToEdit(null);
  }
}, [activeModalItem, groupedData]);









  const getBudgets = async () => {
    try {
      const res = await axiosInstance.get("/budgets", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBudgets();
  }, [router]);

  if (!context) return null;
  const { isModal, setIsModal } = context;

  // useEffect(() => {
  //   if (data.length > 0) {
  //     console.log(groupedData, "Grouped Data");
  //   }
  // }, [data, groupedData]);

  // console.log(data, "data");

  if (isLoading) {
    return <div>Loading...</div>;
  }



  return (
    <section className="w-full h-full min-h-screen ">
      {isModal && (
        <Modal
          setIsModal={setIsModal}
          data={data}
          getBudgets={getBudgets}
          setIsAddBudget={setIsAddBudget}
          isAddBudget={isAddBudget}
          groupedData={groupedData}



          isEdit={isEdit}
          categoryToEdit={categoryToEdit}
      
        />
      )}
      {/* {isDelete && (
        <DeleteModal
          setIsDelete={setIsDelete}
          setIsModal={setIsModal}
          groupedData={groupedData}
          deleteBudgetCategory={deleteBudgetCategory}
        />
      )} */}

      <div className="w-full h-full bg-[#F8F4F0] py-8 px-4 md:px-10 lg:px-6 flex flex-col items-start justify-start gap-8">
        <div className="w-full flex flex-row items-center justify-between">
          <h1 className="w-full text-left text-[32px] text-[#201F24] font-bold">
            Budgets
          </h1>
          <button
            onClick={() => {
              setIsModal(true);
              setIsAddBudget(true);
            }}
            className="bg-[#201F24] rounded-lg text-white text-[14px] font-bold text-right p-4 whitespace-nowrap"
          >
            + Add New Budget
          </button>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-start gap-y-6 lg:gap-x-[2.26%]">
          <div className="bg-white w-full max-w-[375px] md:max-w-[758px] lg:w-[40.38%] p-8 rounded-lg flex flex-col md:flex-row lg:flex-col items-center justify-center gap-y-8 md:gap-x-8 lg:gap-y-8">
            <div className="w-[240px] h-[240px]  flex flex-col md:flex-row lg:flex-col items-center justify-center">
              <BudgetPieChart groupedData={groupedData} data={data} />
            </div>

            <Spending groupedData={groupedData} />
          </div>

          <div className="w-full lg:w-[57.36%] flex flex-col gap-y-6">
            {groupedData.map((group, i) => {
              if (group.spending < 0) {
                return (
                  <BudgetItem
                    key={i}
                    // logo={group.categoryLogo}
                    category={group.category}
                    color={getColorHex(group.color)}
                    groupSpending={group.spending}
                    groupTotalAmount={group.totalAmount}
                    data={data}
                    getBudgets={getBudgets}


                    setIsEdit={setIsEdit}
                    activeModalItem={activeModalItem}
                    setActiveModalItem={setActiveModalItem}
                    index={i}


                    setIsModal={setIsModal}


                  />
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetSections;
