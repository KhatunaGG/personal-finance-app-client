"use client";
import { useEffect, useState } from "react";
import { ArrowDown, CloseIcon } from "../../__atoms";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { axiosInstance } from "@/app/libs/axiosInstance";
import {
  CategoryEnum,
  ColorEnum,
  potSchema,
  schema,
} from "@/app/schema/schema";
import useBudgetUtils from "@/app/hooks/use-budgetUtils";
import { BudgetType, ModalPropsType, NewDataStateType, PotType } from "@/app/interfaces/interface";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AxiosError } from "axios";
import useAccessToken from "@/app/hooks/use-toke";


const Modal = ({
  setIsModal,
  getBudgets,
  setIsAddBudget,
  groupedData,
  isEdit,
  categoryToEdit,
  setIsEdit,
  setActiveModalItem,
  isPotPage,
  getAllPots,
  activePotModal,
  groupedPots,
  activePot,
  setActivePot,
}: ModalPropsType) => {
  const [isCategoryDropDownOpen, setIsCategoryDropDownOpen] = useState(false);
  const [isColorDropDownOpen, setIsColorDropDownOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [color, setColor] = useState<ColorEnum | null>(null);
  const { getColorHex, getLogo } = useBudgetUtils();
  const schemaToUse = isPotPage ? potSchema : schema;
  const usedColors = isPotPage
    ? groupedPots?.map((item) => item.color)
    : groupedData?.map((item) => item.color);
  const { accessToken } = useAccessToken();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<BudgetType | PotType>({
    resolver: yupResolver(schemaToUse),
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
  };

  const handleColorSelection = (selectedColor: ColorEnum) => {
    const currentColor = isPotPage
      ? groupedPots?.find((group) => group.potName === category)?.color
      : groupedData?.find((group) => group.category === category)?.color;

    if (usedColors?.includes(selectedColor) && currentColor !== selectedColor) {
      toast.error(
        isPotPage
          ? "This color is already used for another pot."
          : "This color is already used for another category."
      );
      return;
    }

    setColor(selectedColor);
    setValue("color", selectedColor);
    setIsColorDropDownOpen(false);
  };

  useEffect(() => {
    if (isEdit && categoryToEdit) {
      setValue("category", categoryToEdit.category);
      setValue("amount", 0);
      setValue("color", categoryToEdit.color);
      setCategory(categoryToEdit.category);
      setColor(categoryToEdit.color);
    } else if (activePotModal) {
      setValue("category", activePotModal.potName);
      setValue("amount", 0);
      setColor(activePotModal.color);
      setCategory(activePotModal.potName);
    } else if (activePot) {
      setValue("category", activePot.potName);
      setValue("amount", 0);

      const color = activePot.color as ColorEnum | null;
      setColor(color ?? null);
    }
  }, [isEdit, categoryToEdit, activePotModal, activePot, setValue]);

  const onSubmit = async (formData: BudgetType | PotType) => {
    let newDataState: BudgetType | PotType = formData;
    try {
      let res;

      if (isPotPage) {
        newDataState = formData as PotType;
        if (!isEdit) {
          if (formData.amount <= 0) {
            toast.error("Target amount should be greater than zero.");
            return;
          }
          // newDataState = formData as PotType;
          res = await axiosInstance.post("/pot", formData, {
            headers: { Authorization: `Bearer ${accessToken}` },
          });
        } else {
          const filteredGroupedPots = groupedPots?.find(
            (item) => item.potName === formData.category
          );
          if (
            formData.amount <= 0 &&
            Math.abs(formData.amount) > (filteredGroupedPots?.totalSaved ?? 0)
          ) {
            toast.error("Not enough amount available for the pot.");
            return;
          }
          const potName = formData.category;
          res = await axiosInstance.patch(`pot/category/${potName}`, formData, {
            headers: { Authorization: `Bearer ${accessToken}` },
          });
        }

        if (res.status === 200 || res.status === 204 || res.status === 201) {
          setIsModal(false);
          reset();
          setActivePot?.(undefined);
          if (getAllPots) getAllPots();
          toast.success("Pot added successfully!");
        }
      } else {
        newDataState = formData as NewDataStateType;
        newDataState = {
          ...formData,
          categoryLogo: getLogo(formData.category as CategoryEnum) || "",
        };

        if (!isEdit) {
          const categoryData = groupedData?.find(
            (group) => group.category === formData.category
          );
          const { amount } = formData;

          if (!categoryData && amount <= 0) {
            toast.error("Not enough amount available for the category.");
            return;
          }
          res = await axiosInstance.post("/budgets", newDataState, {
            headers: { Authorization: `Bearer ${accessToken}` },
          });
        } else {
          const category = formData.category;
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
          setIsAddBudget?.(false);
          if (isEdit) {
            setIsEdit(false);
            setActiveModalItem?.(null);
          }
        }
        if (getBudgets) getBudgets();
        reset();
        toast.success("Budget added/updated successfully!");
        setIsModal(false);
      }
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const errorMessage =
          error.response.data.message ||
          "An unexpected error occurred. Please try again.";
        if (
          errorMessage ===
          "Not enough spending to subtract the specified amount."
        ) {
          toast.error("Not enough spending to subtract the specified amount.");
        } else {
          toast.error(errorMessage);
        }
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <section className="fixed inset-0 bg-black/50 w-full h-full z-20">
      <div className="w-full h-screen flex items-center justify-center">
        <div className=" w-[89.33%] md:max-w-[560px] md:w-[72.91%] lg:w-[38.88%] bg-white rounded-lg p-8 flex flex-col gap-[20px]">
          <div className="TITLE w-full flex items-center justify-between">
            <h1 className="text-[#201F24] text-[20px]  md:text-[32px] font-bold">
              {isEdit
                ? isPotPage
                  ? "Edit Pot"
                  : "Edit Budget"
                : isPotPage
                ? "Add New Pot"
                : "Add New Budget"}
            </h1>

            <CloseIcon
              setIsModal={setIsModal}
              setIsAddBudget={setIsAddBudget}
              setIsEdit={setIsEdit}
              setActiveModalItem={setActiveModalItem}
            />
          </div>

          <div className="TEXT  ">
            <p className="text-[#696868] text-[14px] leading-[21px] font-normal">
              {isEdit
                ? isPotPage
                  ? "If your saving targets change, feel free to update your pots."
                  : "As your budgets change, feel free to update your spending limits."
                : isPotPage
                ? "Create a pot to set savings targets. These can help keep you on track as you save for special purchases."
                : "Choose a category to set a spending budget. These categories can help you monitor spending."}
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
                  {isPotPage ? "Pot Name" : " Budget Category"}
                </label>

                {isPotPage ? (
                  <div className="border border-[#98908B] px-[20px] py-3 flex items-center justify-between gap-4 rounded-lg">
                    <input
                      type="text"
                      className="w-full text-[#201F24] text-xs md:text-[14px] leading-[21px] font-normal outline-none border-none"
                      placeholder="Pot Name"
                      {...register("category")}
                      readOnly={isEdit}
                    />
                  </div>
                ) : (
                  <div className="border border-[#98908B] px-[20px] py-3 flex items-center justify-between gap-4 rounded-lg">
                    <input
                      type="text"
                      className="w-full text-[#201F24] text-xs md:text-[14px] lg:text-base leading-[21px] font-normal outline-none border-none"
                      placeholder="Category"
                      {...register("category")}
                      value={category}
                      readOnly={isPotPage || isEdit}
                    />
                    <button
                      type="button"
                      onClick={toggleCategoryDropdown}
                      disabled={isEdit}
                      className="w-[16px] h-[16px] flex items-center justify-center"
                    >
                      <ArrowDown rotated={isCategoryDropDownOpen} />
                    </button>

                    {isCategoryDropDownOpen && (
                      <div className="w-full absolute left-0 right-0 top-[80px] rounded-lg z-20 shadow-[0_-4px_10px_rgba(0,0,0,0.3)] px-[20px] bg-white flex flex-col max-h-[200px] overflow-y-scroll">
                        {Object.values(CategoryEnum).map((categoryItem, i) => (
                          <div
                            key={i}
                            onClick={() => {
                              handleCategorySelection(categoryItem);
                              setIsCategoryDropDownOpen(false);
                            }}
                            className="w-full border-b-[1px] border-b- py-3 flex items-center justify-between cursor-pointer"
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
                )}
              </div>
            </div>

            <div className="w-fill relative">
              <div className="w-full flex flex-col gap-1">
                <label
                  htmlFor="amount"
                  className="w-full text-xs text-[#696868] font-bold"
                >
                  {" "}
                  {isPotPage ? "Target" : "Maximum Spending"}
                </label>
                <div className="SPENDING border border-[#98908B] px-[20px] py-3 flex items-center justify-between gap-4 rounded-lg">
                  <input
                    type="text"
                    className="w-full text-[#201F24] text-xs md:text-[14px] leading-[21px] font-normal outline-none border-none "
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

            <div className="w-fill relative">
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
                    className={`w-full text-[#201F24] text-xs md:text-[14px] leading-[21px] font-normal outline-none border-none ${
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
                    <ArrowDown rotated={isColorDropDownOpen} />
                  </button>

                  {isColorDropDownOpen && (
                    <div className="w-full absolute left-0 right-0 top-[80px] rounded-lg z-20 shadow-[0_-4px_10px_rgba(0,0,0,0.3)] px-[20px] bg-white flex flex-col max-h-[200px] overflow-y-scroll">
                      {Object.values(ColorEnum).map((colorItem, i) => (
                        <div
                          key={i}
                          onClick={() => {
                            handleColorSelection(colorItem);
                            setIsColorDropDownOpen(false);
                          }}
                          className={`OPTION w-full border-b-[1px] py-3 flex items-center justify-between cursor-pointer ${
                            usedColors?.includes(colorItem) &&
                            groupedData?.find(
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
                          <p
                            className={`text-[#696868] text-xs font-normal ${
                              usedColors?.includes(colorItem)
                                ? "flex"
                                : "hidden"
                            }`}
                          >
                            Already used
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {errors.color && !isEdit && (
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
              {isEdit
                ? isPotPage
                  ? "Edit Pot"
                  : "Edit Budget"
                : isPotPage
                ? "Add New Pot"
                : "Add New Budget"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Modal;
