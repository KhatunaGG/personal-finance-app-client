import { TiTlePropsType } from "@/app/interfaces/interface";


const Title = ({
  setIsModal,
  setIsAddBudget,
  isBudgetPage,
  isPotPage,
  isTransactionsPage,
  isDashboardPage,
  isRecurringBills,
}: TiTlePropsType) => {
  const handleClick = () => {
    if (isBudgetPage) {
      setIsAddBudget?.(true);
      setIsModal?.(true);
    } else if (isPotPage) {
      setIsModal?.(true);
    }
  };

  const pageTitle = isBudgetPage
    ? "Budgets"
    : isPotPage
    ? "Pots"
    : isTransactionsPage
    ? "Transactions"
    : isDashboardPage
    ? "Overview"
    : isRecurringBills
    ? "Recurring Bills"
    : "";
  const buttonText = isBudgetPage ? "budget" : isPotPage ? "pot" : "";
  const showButton = isBudgetPage || isPotPage;

  return (
    <div className="w-full flex flex-row items-center justify-between">
      <h1 className="w-full text-left text-[32px] text-[#201F24] font-bold">
        {pageTitle}
      </h1>
      {showButton && (
        <button
          onClick={handleClick}
          className="bg-[#201F24] rounded-lg text-white text-[14px] font-bold text-right p-4 whitespace-nowrap"
        >
          + Add New {buttonText}
        </button>
      )}
    </div>
  );
};

export default Title;
