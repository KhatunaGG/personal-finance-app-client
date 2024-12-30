import { Dispatch, SetStateAction } from "react";
import { DataType } from "../components/__organism/budgets/BudgetSections";

export type ModalPropsType = {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  data: DataType[];
};
