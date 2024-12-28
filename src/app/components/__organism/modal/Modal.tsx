"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { ArrowDown, CloseIcon } from "../../__atoms";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export enum CategoryEnum {
  Entertainment = "Entertainment",
  Bills = "Bills",
  Groceries = "Groceries",
  "Dining Out" = "Dining Out",
  "Personal Care" = "Personal Care",
  Education = "Education",
  Lifestyle = "Lifestyle",
  Shopping = "Shopping",
  General = "General",
}

export enum ColorEnum {
  GREEN = "Green",
  YELLOW = "Yellow",
  CYAN = "Cyan",
  NAVY = "Navy",
  RED = "Red",
  PURPLE = "Purple",
  TURQUOISE = "Turquoise",
  BROWN = "Brown",
  MAGENTA = "Magenta",
  BLUE = "Blue",
  GREY = "Grey",
  ARMY = "Army",
  PINK = "Pink",
  YELLOWGREEN = "Yellowgreen",
  ORANGE = "Orange",
}

export type BudgetType = {
  category: CategoryEnum;
  amount: number;
  color: ColorEnum;
};

// export type BudgetINfoType = {
//   category: CategoryEnum;
//   amount: number;
//   color: ColorEnum;
//   recipientOrSender: string;
//   image: string;
// };

export const schema = Yup.object().shape({
  category: Yup.mixed<CategoryEnum>()
    .oneOf(Object.values(CategoryEnum))
    .required("Category is required"),
  amount: Yup.number().required("Amount is required"),
  color: Yup.mixed<ColorEnum>()
    .oneOf(Object.values(ColorEnum))
    .required("Color is required"),
});

type ModalPropsType = {
  setIsModal: Dispatch<SetStateAction<boolean>>;
};

const Modal = ({ setIsModal }: ModalPropsType) => {
  const [isCategoryDropDownOpen, setIsCategoryDropDownOpen] = useState(false);
  const [isColorDropDownOpen, setIsColorDropDownOpen] = useState(false);

  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");

  const toggleCategoryDropdown = () => {
    setIsCategoryDropDownOpen(!isCategoryDropDownOpen);
    setIsColorDropDownOpen(false);
  };

  const toggleColorDropdown = () => {
    setIsColorDropDownOpen(!isColorDropDownOpen);
    setIsCategoryDropDownOpen(false);
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BudgetType>({
    resolver: yupResolver(schema),
  });

  const handleCategorySelection = (category: CategoryEnum) => {
    setCategory(category);
    setValue("category", category);
    setIsCategoryDropDownOpen(false);
  };

  const handleColorSelection = (color: ColorEnum) => {
    setColor(color);
    setValue("color", color);
    setIsColorDropDownOpen(false);
  };

  const onSubmit = async (data: BudgetType) => {
    console.log(data);

    setIsModal(false);
  };

  return (
    <section className="absolute inset-0 bg-black/50 w-full h-full z-20 ">
      <section className="w-full h-screen flex items-center justify-center">
        <div className=" w-[89.33%] md:max-w-[560px] md:w-[72.91%] lg:w-[38.88%] bg-white rounded-lg p-8 flex flex-col gap-[20px]">
          <div className="TITLE w-full flex items-center justify-between">
            <h1 className="text-[#201F24] text-[32px] font-bold">
              Add New Budget
            </h1>
            <CloseIcon />
          </div>

          <div className="TEXT  ">
            <p className="text-[#696868] text-2xl md:text-[14px] leading-[21px] font-normal">
              Choose a category to set a spending budget. These categories can
              help you monitor spending.
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
                    value={category || ""}
                  />
                  <button
                    type="button"
                    onClick={toggleCategoryDropdown}
                    className="w-[16px] h-[16px] flex items-center justify-center"
                  >
                    <ArrowDown />
                  </button>

                  {isCategoryDropDownOpen && (
                    <div className="CATEGORYOPTIONS  w-full absolute left-0 right-0 -bottom-[109px] rounded-lg z-20 shadow-[0_-4px_10px_rgba(0,0,0,0.3)] px-[20px] bg-white flex flex-col">
                      {Object.values(CategoryEnum).map((categoryItem, i) => (
                        <div
                          key={i}
                          onClick={() => {
                            handleCategorySelection(categoryItem);
                            setIsCategoryDropDownOpen(false);
                          }}
                          className="OPTION  w-full  border-b-[1px] border-b- py-3 flex items-center justify-between bg-green-300 cursor-pointer"
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
                <div className="CATEGORY border border-[#98908B] px-[20px] py-3 flex items-center justify-between gap-4 rounded-lg">
                  <input
                    type="text"
                    className="w-full text-#201F24 text-2xl md:text-[14px] leading-[21px] font-normal outline-none border-none "
                    placeholder="Amount"
                    {...register("amount")}
                  />
                </div>
              </div>
            </div>

            <div className="COLOR w-fill relative">
              <div className="w-full flex flex-col gap-1">
                <label
                  htmlFor="color"
                  className="w-full text-xs text-[#696868] font-bold"
                >
                  {" "}
                  Color Tag
                </label>
                <div className="CATEGORY border border-[#98908B] px-[20px] py-3 flex items-center justify-between gap-4 rounded-lg">
                  <input
                    type="text"
                    className="w-full text-#201F24 text-2xl md:text-[14px] leading-[21px] font-normal outline-none border-none"
                    placeholder="Color"
                    {...register("color")}
                    value={color || ""}
                  />
                  <button
                    onClick={toggleColorDropdown}
                    type="button"
                    className="w-[16px] h-[16px] flex items-center justify-center"
                  >
                    <ArrowDown />
                  </button>
                  {isColorDropDownOpen && (
                    <div className="CATEGORYOPTIONS  w-full absolute left-0 right-0 -bottom-[109px] rounded-lg z-20 shadow-[0_-4px_10px_rgba(0,0,0,0.3)] px-[20px] bg-white flex flex-col">
                      {Object.values(ColorEnum).map((colorItem, i) => (
                        <div
                          key={i}
                          onClick={() => {
                            handleColorSelection(colorItem);
                            setIsColorDropDownOpen(false);
                          }}
                          className="OPTION  w-full  border-b-[1px] border-b- py-3 flex items-center justify-between"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full bg-[#277C78]  hidden"></div>
                            <p className="text-[#201F24] text-sm font-normal">
                              {colorItem}
                            </p>
                          </div>
                          <p className="text-[#696868] text-xs font-normal  hidden">
                            Already used
                          </p>
                        </div>
                      ))}
                    </div>
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
      </section>
    </section>
  );
};

export default Modal;
