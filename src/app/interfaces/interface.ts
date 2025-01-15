import { Dispatch, SetStateAction } from "react";
import { CategoryEnum, ColorEnum } from "../schema/schema";
import { GroupedCategory } from "../hooks/use-categoryGrope";
import { PotsDataType } from "../components/__organism/pots/PotsSection";

// export type ModalPropsType = {
//   setIsModal: Dispatch<SetStateAction<boolean>>;
//   data: DataType[];
//   getBudgets?: () => void;
//   setIsAddBudget: Dispatch<SetStateAction<boolean>>;
//   isAddBudget: boolean;
//   groupedData: GroupedCategory[];
//   createdAt?: string;
//   isEdit: boolean;
//   categoryToEdit: GroupedCategory | null;
//   setIsEdit: Dispatch<SetStateAction<boolean>>;
//   setActiveModalItem:  Dispatch<SetStateAction<number | null>>
  
// };



export type ModalPropsType = {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  data?: DataType[];
  getBudgets?: () => void;
  setIsAddBudget?: Dispatch<SetStateAction<boolean>>;
  isAddBudget?: boolean;
  groupedData?: GroupedCategory[];
  createdAt?: string;
  isEdit: boolean;
  categoryToEdit?: GroupedCategory | null;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  setActiveModalItem:  Dispatch<SetStateAction<number | null>>



  potsData?: PotsDataType[];
  isPotPage?: boolean;
  getAllPots?: () => void;
};





export type DataType = {
  category: CategoryEnum;
  amount: number;
  color: ColorEnum;
  categoryLogo: string;
  createdAt?: string;
  updatedAt?: string;
  id: string;
};
