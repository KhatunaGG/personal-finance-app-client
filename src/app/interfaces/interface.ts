import { Dispatch, SetStateAction } from "react";
import { CategoryEnum, ColorEnum } from "../schema/schema";
import { GroupedCategory } from "../hooks/use-categoryGrope";
import {
  GropedPotsType,
  PotsDataType,
} from "../components/__organism/pots/PotsSection";
import { PotDataStateType } from "../components/__organism/modal/Modal";

export type ModalPropsType = {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  // data?: DataType[];
  getBudgets?: () => void;
  setIsAddBudget?: Dispatch<SetStateAction<boolean>>;
  isAddBudget?: boolean;
  groupedData?: GroupedCategory[];
  createdAt?: string;
  isEdit: boolean;
  categoryToEdit?: GroupedCategory | null;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  setActiveModalItem?: Dispatch<SetStateAction<number | null>>;
  potsData?: PotsDataType[];
  isPotPage?: boolean;
  getAllPots?: () => void;
  activePotModal?: PotDataStateType | null;
  setActivePotModal?: Dispatch<SetStateAction<PotDataStateType | null>>;
  groupedPots?: GropedPotsType[];
  activePot?: GropedPotsType;
  setActivePot?: Dispatch<SetStateAction<GropedPotsType | undefined>>;
};

export type DataType = {
  category: CategoryEnum;
  amount: number;
  color: ColorEnum;
  categoryLogo: string;
  createdAt?: string;
  updatedAt?: string;
  id: string;
  status?: string;
  resource?: string;
  checkId: string;
};

export type CloseIconPropsType = {
  setIsModal?: Dispatch<SetStateAction<boolean>>;
  setIsAddBudget?: Dispatch<SetStateAction<boolean>>;
  setIsDelete?: Dispatch<SetStateAction<boolean>>;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  setActiveModalItem?: Dispatch<SetStateAction<number | null>>;
  setPotMoney?: Dispatch<SetStateAction<boolean>>;
  setActivePotModal?: Dispatch<SetStateAction<PotDataStateType | null>>;
  setWithdrawMoney?: Dispatch<SetStateAction<boolean>>;
  setInput?: Dispatch<SetStateAction<string>>;
};

export type MinimizeMenuPropsType = {
  minimize: boolean;
};

export type GlobalContextType = {
  accessToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  isModal: boolean;
  setMinimize: Dispatch<SetStateAction<boolean>>;
  minimize: boolean;
};
