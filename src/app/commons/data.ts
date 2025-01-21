import {
  BillIcon,
  BudgetIcon,
  OverviewIcon,
  PotIcon,
  TransactionsIcon,
} from "../components/__atoms";
import { CategoryEnum } from "../schema/schema";

export const navLinks = [
  {
    name: "Overview",
    icon: OverviewIcon,
  },
  {
    name: "Transactions",
    icon: TransactionsIcon,
  },
  {
    name: "Budgets",
    icon: BudgetIcon,
  },
  {
    name: "Pots",
    icon: PotIcon,
  },
  {
    name: "Recurring Bills",
    icon: BillIcon,
  },
];

export const categoryLogos = [
  { Entertainment: "/assets/logos/logo1.svg"},
  { Bills: "/assets/logos/logo3.svg"},
  { Groceries: "/assets/logos/logo2.svg"},
  { "Dining Out": "/assets/logos/logo4.svg"},
  { Transportation: "/assets/logos/logo5.svg"},
  { "Personal Care": "/assets/logos/logo6.svg"},
  { Education: "/assets/logos/logo7.svg"},
  { Lifestyle: "/assets/logos/logo8.svg"},
  { Shopping: "/assets/logos/logo9.svg"},
  { General: "/assets/logos/logo1.svg"},
];


export const sortBy = ["Latest", "Oldest", "A to Z", "Z to A", "Highest", "Lowest"]
export const sortCategory = ["All Transactions", ...Object.values(CategoryEnum)];
