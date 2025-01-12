"use client";
import { useContext, useEffect, useState } from "react";
import { ArrowDown, CloseIcon } from "../../__atoms";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { axiosInstance } from "@/app/libs/axiosInstance";
import { GlobalContext } from "@/app/context/Context";
import { CategoryEnum, ColorEnum, schema } from "@/app/schema/schema";
import useBudgetUtils from "@/app/hooks/use-budgetUtils";
import { ModalPropsType } from "@/app/interfaces/interface";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  { AxiosError } from "axios";

export type BudgetType = {
  category: CategoryEnum;
  amount: number;
  color: ColorEnum;
};

export type NewDataStateType = {
  category: CategoryEnum;
  amount: number;
  color: ColorEnum;
  categoryLogo: string;
};

const Modal = ({
  setIsModal,
  getBudgets,
  setIsAddBudget,
  groupedData,
  data,
  isEdit,
  categoryToEdit,
  setIsEdit,
  setActiveModalItem,
}: ModalPropsType) => {
  const context = useContext(GlobalContext);
  const [isCategoryDropDownOpen, setIsCategoryDropDownOpen] = useState(false);
  const [isColorDropDownOpen, setIsColorDropDownOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [color, setColor] = useState<ColorEnum | null>(null);
  const { getColorHex, getLogo } = useBudgetUtils();
  const usedColors = groupedData.map((item) => item.color);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<BudgetType>({
    resolver: yupResolver(schema),
  });

  const toggleCategoryDropdown = () => {
    setIsCategoryDropDownOpen(!isCategoryDropDownOpen);
    setIsColorDropDownOpen(false);
  };

  const toggleColorDropdown = () => {
    setIsColorDropDownOpen(!isColorDropDownOpen);
    setIsCategoryDropDownOpen(false);
  };

  const handleCategorySelection = (category: CategoryEnum) => {
    setCategory(category);
    setValue("category", category);
    setIsCategoryDropDownOpen(false);

    setColor(null);

    // setValue("color", categoryToEdit?.color);
  };

  // const handleColorSelection = (color: ColorEnum) => {
  //   setColor(color);
  //   setValue("color", color);
  //   setIsColorDropDownOpen(false);
  // };

  const handleColorSelection = (selectedColor: ColorEnum) => {
    const currentCategoryColor = groupedData.find(
      (group) => group.category === category
    )?.color;

    if (
      usedColors.includes(selectedColor) &&
      currentCategoryColor !== selectedColor
    ) {
      toast.error("This color is already used for another category.");
      return;
    }

    setColor(selectedColor);
    setValue("color", selectedColor);
    setIsColorDropDownOpen(false);
  };

  useEffect(() => {
    if (isEdit && categoryToEdit) {
      setValue("category", categoryToEdit.category);
      setValue("amount", categoryToEdit.spending);
      setValue("color", categoryToEdit.color);
      setCategory(categoryToEdit.category);
      setColor(categoryToEdit.color);
    }

    const filteredData = data.filter(
      (item) => item.category === categoryToEdit?.category
    );
    console.log(filteredData, "filteredData");
  }, [isEdit, categoryToEdit, setValue]);

  if (!context) return null;
  const { accessToken } = context;

  // const onSubmit = async (formData: BudgetType) => {
  //   const categoryData = groupedData.find(
  //     (group) => group.category === formData.category
  //   );
  //   const { amount } = formData;

  //   if (!categoryData && amount <= 0) {
  //     toast.error("Not enough amount available for the category.");
  //     return;
  //   }

  //   const newDataState: NewDataStateType = {
  //     ...formData,
  //     categoryLogo: getLogo(formData.category) || "",
  //   };

  //   try {
  //     if (!isEdit) {
  //       const res = await axiosInstance.post("/budgets", newDataState, {
  //         headers: { Authorization: `Bearer ${accessToken}` },
  //       });

  //       if (res.status === 200 || res.status === 204) {
  //         getBudgets();
  //         setIsAddBudget(false);
  //         toast.success("Budget added successfully!");
  //         reset();
  //       }
  //     } else {
  //       const category = categoryToEdit?.category;
  //       console.log(newDataState, "newDataState");

  //       const res = await axiosInstance.patch(
  //         `/budgets/category/${category}`,
  //         newDataState,
  //         {
  //           headers: { Authorization: `Bearer ${accessToken}` },
  //         }
  //       );

  //       if (res.status === 200 || res.status === 204) {
  //         setIsModal(false);
  //         setIsEdit(false);
  //         setActiveModalItem(null);
  //       }
  //     }
  //   } catch (errors) {
  //     console.error(errors);
  //     toast.error("Failed to add budget. Please try again.");
  //   }
  // };











  const onSubmit = async (formData: BudgetType) => {
    const categoryData = groupedData.find(
      (group) => group.category === formData.category
    );
    const { amount } = formData;

    if (!categoryData && amount <= 0) {
      toast.error("Not enough amount available for the category.");
      return;
    }

    const newDataState: NewDataStateType = {
      ...formData,
      categoryLogo: getLogo(formData.category) || "",
    };

    try {
      let res;
      if (!isEdit) {
        res = await axiosInstance.post("/budgets", newDataState, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
      } else {
        const category = formData.category;
        console.log(formData.color, "color")

        console.log('Category before PATCH:', category);

        if (!category) {
          throw new Error("Category is missing");
        }
        res = await axiosInstance.patch(
          `/budgets/category/${category}`,
          newDataState,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
      }

      if (res.status === 200 || res.status === 204) {
        setIsAddBudget(false);
        if (isEdit) {
          setIsEdit(false);
          setActiveModalItem(null);
        }
      }
      getBudgets();
      reset();
      toast.success("Budget added/updated successfully!");
      setIsModal(false);
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError && error.response
          ? error.response.data.message
          : "An unexpected error occurred. Please try again.";

      toast.error(errorMessage);
    }
  };

  return (
    <section className="absolute inset-0 bg-black/50 w-full h-full z-20 ">
      <div className="w-full h-screen flex items-center justify-center">
        <div className=" w-[89.33%] md:max-w-[560px] md:w-[72.91%] lg:w-[38.88%] bg-white rounded-lg p-8 flex flex-col gap-[20px]">
          <div className="TITLE w-full flex items-center justify-between">
            <h1 className="text-[#201F24] text-[32px] font-bold">
              {isEdit ? "Edit Budget" : "Add New Budget"}
            </h1>
            <CloseIcon
              setIsModal={setIsModal}
              setIsAddBudget={setIsAddBudget}
              setIsEdit={setIsEdit}
              setActiveModalItem={setActiveModalItem}
            />
          </div>

          <div className="TEXT  ">
            <p className="text-[#696868] text-2xl md:text-[14px] leading-[21px] font-normal">
              {isEdit
                ? "As your budgets change, feel free to update your spending limits."
                : "Choose a category to set a spending budget. These categories can"}
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="FORM w-full flex flex-col gap-y-4"
          >
            <div className="w-full relative">
              <div className="w-full flex flex-col gap-1">
                <label
                  htmlFor="category"
                  className="w-full text-xs text-[#696868] font-bold"
                >
                  {" "}
                  Budget Category
                </label>

                <div className="CATEGORY border border-[#98908B] px-[20px] py-3 flex items-center justify-between gap-4 rounded-lg">
                  <input
                    type="text"
                    className="w-full text-#201F24 text-2xl md:text-[14px] leading-[21px] font-normal outline-none border-none"
                    placeholder="Category"
                    {...register("category")}
                    value={category}
                    // value={isEdit ? categoryToEdit?.category : category}
                    readOnly
                  />
                  <button
                    type="button"
                    onClick={toggleCategoryDropdown}
                    className="w-[16px] h-[16px] flex items-center justify-center"
                  >
                    <ArrowDown />
                  </button>

                  {isCategoryDropDownOpen && (
                    <div
                      // ref={categoryRef}
                      className="CATEGORYOPTIONS  w-full absolute left-0 right-0 top-[80px] rounded-lg z-20 shadow-[0_-4px_10px_rgba(0,0,0,0.3)] px-[20px] bg-white flex flex-col max-h-[200px] overflow-y-scroll"
                    >
                      {Object.values(CategoryEnum).map((categoryItem, i) => (
                        <div
                          key={i}
                          onClick={() => {
                            handleCategorySelection(categoryItem);
                            setIsCategoryDropDownOpen(false);
                          }}
                          className="OPTION  w-full  border-b-[1px] border-b- py-3 flex items-center justify-between cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full bg-[#277C78]  hidden"></div>
                            <p className="text-[#201F24] text-sm font-normal">
                              {categoryItem}
                            </p>
                          </div>
                          <p className="text-[#696868] text-xs font-normal  hidden">
                            Already used
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {errors.category && (
                    <span className="absolute bottom-[-18px] right-[5px] italic text-[#CD2C2C] font-medium text-[12px] tracking-[-0.21px] rounded-md">
                      {errors.category.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="SPENDING w-fill relative">
              <div className="w-full flex flex-col gap-1">
                <label
                  htmlFor="amount"
                  className="w-full text-xs text-[#696868] font-bold"
                >
                  {" "}
                  Maximum Spending
                </label>
                <div className="SPENDING border border-[#98908B] px-[20px] py-3 flex items-center justify-between gap-4 rounded-lg">
                  <input
                    type="text"
                    className="w-full text-#201F24 text-2xl md:text-[14px] leading-[21px] font-normal outline-none border-none "
                    placeholder="Amount"
                    {...register("amount")}
                  />
                  {errors.amount && (
                    <span className="absolute bottom-[-18px] right-[5px] italic text-[#CD2C2C] font-medium text-[12px] tracking-[-0.21px] rounded-md">
                      {errors.amount.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="COLOR w-fill relative">
              <div className="w-full flex flex-col gap-1">
                <label
                  htmlFor="color"
                  className="w-full text-xs text-[#696868] font-bold"
                >
                  Color Tag
                </label>

                <div className="COLOR border border-[#98908B] px-[20px] py-3 flex items-center justify-between gap-4 rounded-lg relative">
                  <div
                    style={{
                      backgroundColor: getColorHex(color),
                    }}
                    className="w-4 h-4 rounded-full absolute left-3 top-1/2 transform -translate-y-1/2"
                  ></div>

                  <input
                    type="text"
                    className={`w-full text-#201F24 text-2xl md:text-[14px] leading-[21px] font-normal outline-none border-none ${
                      color ? "pl-[20px]" : ""
                    }`}
                    placeholder="Color"
                    {...register("color")}
                    value={color || ""}
                    readOnly
                  />

                  <button
                    onClick={toggleColorDropdown}
                    type="button"
                    className="w-[16px] h-[16px] flex items-center justify-center"
                  >
                    <ArrowDown />
                  </button>

                  {isColorDropDownOpen && (
                    <div className="COLOROPTIONS w-full absolute left-0 right-0 top-[80px] rounded-lg z-20 shadow-[0_-4px_10px_rgba(0,0,0,0.3)] px-[20px] bg-white flex flex-col max-h-[200px] overflow-y-scroll">
                      {Object.values(ColorEnum).map((colorItem, i) => (
                        <div
                          key={i}
                          onClick={() => {
                            handleColorSelection(colorItem);
                            setIsColorDropDownOpen(false);
                          }}
                          className={`OPTION w-full border-b-[1px] py-3 flex items-center justify-between cursor-pointer ${
                            usedColors.includes(colorItem) &&
                            groupedData.find(
                              (group) => group.category === category
                            )?.color !== colorItem
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              style={{
                                backgroundColor: getColorHex(colorItem),
                              }}
                              className="w-4 h-4 rounded-full"
                            ></div>
                            <p className="text-[#201F24] text-sm font-normal">
                              {colorItem}
                            </p>
                          </div>
                          {/* <p className="text-[#696868] text-xs font-normal  hidden"> */}
                          <p
                            className={`text-[#696868] text-xs font-normal ${
                              usedColors.includes(colorItem) ? "flex" : "hidden"
                            }`}
                          >
                            Already used
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {errors.color && (
                    <span className="absolute bottom-[-18px] right-[5px] italic text-[#CD2C2C] font-medium text-[12px] tracking-[-0.21px] rounded-md">
                      {errors.color.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#201F24] rounded-lg text-white font-bold text-sm py-4"
            >
              Add Budget
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Modal;
