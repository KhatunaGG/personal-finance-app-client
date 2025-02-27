import { Dispatch, SetStateAction } from "react";
import { CategoryEnum, ColorEnum } from "../schema/schema";
// import { GroupedCategory } from "../hooks/use-categoryGrope";

export type ModalPropsType = {
  setIsModal: Dispatch<SetStateAction<boolean>>;
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

export type GroupedCategory = {
  category: CategoryEnum;
  spending: number;
  totalAmount: number;
  color: ColorEnum;
  categoryLogo: string;
  remaining: number;
};

export type UserType = {
  balance: number;
  email: string;
  remaining: number;
  updatedAt: string;
  userName: string;
  _id: string;
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

export type PotItemPropsType = {
  isPotPage: boolean;
  potName: string;
  amount: number;
  color: ColorEnum;
  _id: string;
  handleClickPots: (id: string) => void;
  potsData: PotsDataType[];
  totalSaved: number;
  percentageSpent: number;
  potTargetTotalAmount: number;
  setPotMoney: Dispatch<SetStateAction<boolean>>;
  setWithdrawMoney: Dispatch<SetStateAction<boolean>>;
  portSpendingTotalAmount: number;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  activePot: GropedPotsType | undefined;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  activeModalItem: number | null;
  setActiveModalItem: Dispatch<SetStateAction<number | null>>;
  index: number;
  getAllPots: () => void;
};

export type TransactionType = {
  category: string;
  amount: number;
  color: string;
  categoryLogo?: string;
  createdAt?: string;
  updatedAt?: string;
  _id: string;
  resource: string | undefined;
  potId?: string;
  budgetId?: string;
  checkId: string;
};

export type TransactionItemPropsType = {
  category: string;
  createdAt?: string | undefined;
  categoryLogo?: string | JSX.Element | undefined;
  amount: number;
  isFirstItem: boolean;
  isRecurringBills?: boolean;
  _id: string;
  setInputChecked?: Dispatch<SetStateAction<string>>;
  inputChecked?: string;
  color?: ColorEnum | string | undefined;
  setIsDatePickers?: Dispatch<SetStateAction<boolean>>;
  isDatePickers?: boolean;
  activeDatePicker?: string | null;
  setActiveDatePicker?: Dispatch<SetStateAction<string | null>>;
  dueDate?: string;
  status?: string;
  recurringBillsData?: RecurringBillsDataType[] | undefined;
  getAllRecurringBills?: () => Promise<void>;
  allTransactions?: TransactionOrRecurringBill[];
  resource?: string;
};

export type SortBySectionPropsType = {
  setSortByDropdown: Dispatch<SetStateAction<boolean>>;
  sortByDropdown: boolean;
  setSortByValue: Dispatch<SetStateAction<string | undefined>>;
  sortByValue?: string;
};

export type TransactionOrRecurringBill =
  | TransactionType
  | RecurringBillsDataType;

export type TransactionsFragmentPropsType = {
  transactions: (TransactionType | PotsDataType)[];
};

export type ArrowDownPropsType = {
  rotated: boolean;
};

export type IconType = {
  isLinkActive: boolean;
};

export type BudgetPieChartPropsType = {
  groupedData: {
    category: string;
    color: ColorEnum;
    spending: number;
    totalAmount: number;
    categoryLogo: string;
    remaining: number;
  }[];
  data: {
    category: CategoryEnum;
    amount: number;
    color: ColorEnum;
    categoryLogo: string;
    createdAt?: string;
    updatedAt?: string;
    id: string;
  }[];
};

export type FragmentTitlePopsType = {
  isFragment: boolean;
  title: string;
};

export type ModalItemPropsType = {
  setIsDelete: Dispatch<SetStateAction<boolean>>;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  isPotPage?: boolean;
};

export type TiTlePropsType = {
  setIsModal?: Dispatch<SetStateAction<boolean>>;
  setIsAddBudget?: Dispatch<SetStateAction<boolean>>;
  isBudgetPage?: boolean;
  isPotPage?: boolean;
  isTransactionsPage?: boolean;
  isDashboardPage?: boolean;
  isRecurringBills?: boolean;
};

export type BudgetItemPropsType = {
  category: string;
  groupSpending: number;
  color: string;
  groupTotalAmount: number;
  data: DataType[];
  getBudgets: () => void;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  activeModalItem: number | null;
  setActiveModalItem: Dispatch<SetStateAction<number | null>>;
  index: number;
  setIsModal: Dispatch<SetStateAction<boolean>>;
};

export type LatestSpendingPropsType = {
  logo: string;
  category: string;
  amount: number;
  isLastEl: number;
  createdAt?: string;
  updatedAt?: string;
};

export type PotModalPropsType = {
  setPotMoney: Dispatch<SetStateAction<boolean>>;
  potMoney: boolean;
  setWithdrawMoney: Dispatch<SetStateAction<boolean>>;
  withdrawMoney: boolean;
  activePotModal: PotDataStateType | null;
  setActivePotModal: Dispatch<SetStateAction<PotDataStateType | null>>;
  potsData: PotsDataType[];
};

export type FilteredGropedDataType =
  | {
      potName: string;
      amount: number;
      color: ColorEnum;
      _id: string;
      potTargetTotalAmount: number;
      portSpendingTotalAmount: number;
      totalSaved: number;
      percentageSpent: number;
    }
  | undefined;

export type BudgetType = {
  category: CategoryEnum;
  amount: number;
  color: ColorEnum;
  categoryLogo?: string;
};

export type NewDataStateType = {
  category: CategoryEnum;
  amount: number;
  color: ColorEnum;
  categoryLogo: string;
};

export type PotType = {
  category: string;
  amount: number;
  color: ColorEnum;
  categoryLogo?: string;
};

export type PotDataStateType = {
  potName: string;
  target: number;
  amount: number;
  color: ColorEnum;
  _id: string;
};

export type SpendingPropsType = {
  groupedData: GroupedCategory[];
};

export type BillsFragmentPropsType = {
  recurringBills: RecurringBillsDataType[];
};

export type BudgetFragmentPropsType = {
  budgets: BudgetType[];
};

export type PotsFragmentPropsType = {
  pots: PotsDataType[];
  potTotal: number;
};

export type ProgressBarPropsType = {
  category?: string;
  groupSpending?: number;
  color?: string;
  groupTotalAmount?: number;
  isPotPage?: boolean;
  filteredGropedData?: FilteredGropedDataType;
  withdrawMoney?: boolean;
  potMoney?: boolean;
  input?: string;
  height?: string;
};

export type DeleteModalPropsType = {
  setIsDelete: Dispatch<SetStateAction<boolean>>;
  category: string;
  getBudgets?: () => void;
  isPotPage?: boolean;
  getAllPots?: () => void;
};

export type SortFilterHeaderPropsType = {
  isRecurringBills?: boolean;
};

export type LogInType = {
  email: string;
  password: string;
};

export type MoneyEditType = {
  amount: number;
};

export type PotsDataType = {
  potName: string;
  amount: number;
  color: ColorEnum;
  _id: string;
  createdAt: string;
  updatedAd: string;
  resource?: string;
  checkId: string;
};

export type GropedPotsType = {
  potName: string;
  amount: number;
  color: string;
  _id: string;
  potTargetTotalAmount: number;
  portSpendingTotalAmount: number;
  totalSaved: number;
  percentageSpent: number;
};

export type DataPikersPropsType = {
  category: string;
  amount: number;
  transactionId: string;
  color?: ColorEnum | string | undefined;
  setIsDatePickers: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  setActiveDatePicker:
    | React.Dispatch<React.SetStateAction<string | null>>
    | undefined;
  setIsExistingItem: React.Dispatch<React.SetStateAction<boolean>>;
  getAllRecurringBills?: () => Promise<void>;
  resource: string | undefined;
  categoryLogo: string | JSX.Element | undefined;
};

export type SortByCategorySectionPropsType = {
  setFilteredCategoryValue: Dispatch<SetStateAction<string | undefined>>;
  filteredCategoryValue: string | undefined;
  filteredCategoryDropdown: boolean;
  setFilteredCategoryDropdown: Dispatch<SetStateAction<boolean>>;
};

export type SummeryPropsType = {
  recurringBillsData: RecurringBillsDataType[] | undefined;
};

export type NavLinkType = {
  name: string;
  icon: React.ComponentType<IconType>;
};

export type PaginationPropsType = {
  currentPage: number;
  totalPages: number;
  handlePrevPage: () => void;
  handleNextPage: () => void;
  setCurrentPage: (page: number) => void;
};

export type SearchPropsType = {
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isRecurringBills?: boolean;
};

export type RecurringBillsDataType = {
  _id: string;
  budgetId?: {
    _id: string;
    category: string;
    amount: number;
    categoryLogo: string;
    color: ColorEnum | string | undefined;
    resource: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  potId?: {
    _id: string;
    potName: string;
    amount: number;
    color: ColorEnum | string | undefined;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  dueDate: string;
  resource: string;
  createdAt: string;
  updatedAt: string;
  __v: number;

  status?: string;
  amount: number;
  category: string;
  color: string;
  checkId: string;
};
