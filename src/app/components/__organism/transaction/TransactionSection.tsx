"use client";
import { useContext, useEffect, useState } from "react";
import { axiosInstance } from "@/app/libs/axiosInstance";
import SortBySection from "./SortBySection";
import SortByCategorySection from "./SortByCategorySection";
import TransactionItem from "./TransactionItem";
import useAccessToken from "@/app/hooks/use-toke";
import { DataType, PotsDataType, TransactionType } from "@/app/interfaces/interface";
import Pagination from "./Pagination";
import Search from "./Search";
import { Loading, SortFilterHeader, Title } from "../../__molecules";
import { useSortAndFilter } from "@/app/hooks/use-sortAndFilter";
import { ToastContainer } from "react-toastify";
import { usePathname } from "next/navigation";
import { GlobalContext } from "@/app/context/Context";


const TransactionSection = () => {
  const { accessToken, isLoading } = useAccessToken();
  const [allTransactions, setAllTransactions] = useState<TransactionType[]>([]);
  const [sortByDropdown, setSortByDropdown] = useState(false);
  const [filteredCategoryDropdown, setFilteredCategoryDropdown] =
    useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit] = useState<number>(5);
  const [inputChecked, setInputChecked] = useState("");
  const [isDatePickers, setIsDatePickers] = useState(false);
  const [activeDatePicker, setActiveDatePicker] = useState<string | null>(null);
  const path = usePathname();
  const isTransactionsPage = path.includes("transactions");
  const context = useContext(GlobalContext);

  const {
    filteredAllTransactions,
    setSearchTerm,
    sortByValue,
    setSortByValue,
    filteredCategoryValue,
    setFilteredCategoryValue,
    sortTransactions,
  } = useSortAndFilter(allTransactions || []);

  useEffect(() => {
    const getAllTransactions = async () => {
      try {
        const res = await axiosInstance.get(
          `/budgets/resources?page=${currentPage}&take=${limit}`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        if (res?.status >= 200 && res?.status <= 204) {
          const modifiedData = modifyData(res.data, "budget");
          setAllTransactions(modifiedData);
        }
      } catch (error) {
        console.error("Error fetching transactions: ", error);
      }
    };
    if (accessToken) {
      getAllTransactions();
    }
  }, [accessToken, currentPage, limit]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const modifyData = (
    data: (DataType | PotsDataType)[] | null | undefined,
    type: "budget" | "pot"
  ): TransactionType[] => {
    if (!Array.isArray(data)) {
      return [];
    }

    return data.map((item) => {
      const category = "category" in item ? item.category : item.potName;
      const _id = "_id" in item ? item._id : "";
      const transaction: TransactionType = {
        category: category || "Unknown Category",
        amount: item.amount,
        color: item.color,
        resource: item.resource,
        checkId: item.checkId,
        categoryLogo: "",
        _id: _id,
      };

      if (type === "budget" && "categoryLogo" in item) {
        transaction.categoryLogo = item.categoryLogo;
      }

      if (type === "pot" && !("categoryLogo" in item)) {
        transaction.categoryLogo = "";
      }

      if ("createdAt" in item) {
        transaction.createdAt = item.createdAt;
      }
      if ("createdAt" in item) {
        transaction.createdAt = new Date(item.createdAt ?? "").toISOString();
      }
      if ("resource" in item) {
        transaction.resource = item.resource;
      }
      return transaction;
    });
  };

  const totalPages = Math.ceil(filteredAllTransactions.length / (limit * 2));
  const paginatedTransactions = sortTransactions(filteredAllTransactions).slice(
    (currentPage - 1) * (limit * 2),
    currentPage * (limit * 2)
  );

  if (!context) return null;
  const { minimize } = context;

  return (
    <section
      className={`w-full h-full min-h-screen ${
        minimize ? "lg:pl-[88px]" : "lg:pl-[300px]"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="w-full h-full  px-4 pt-6 pb-[90px] md:pb-[113px] lg:py-8 md:px-10 lg:px-6 flex flex-col items-start justify-start gap-8">
        <Title isTransactionsPage={isTransactionsPage} />

        <div className="w-full  p-0  md:p-8  bg-white flex flex-col gap-6 rounded-lg">
          <div className="FILTER flex items-center justify-between p-4 md:p-0">
            <Search handleSearchChange={handleSearchChange} />

            <div className="flex items-center gap-6">
              <SortBySection
                setSortByDropdown={setSortByDropdown}
                sortByDropdown={sortByDropdown}
                setSortByValue={setSortByValue}
                sortByValue={sortByValue}
              />
              <SortByCategorySection
                setFilteredCategoryValue={setFilteredCategoryValue}
                filteredCategoryValue={filteredCategoryValue}
                filteredCategoryDropdown={filteredCategoryDropdown}
                setFilteredCategoryDropdown={setFilteredCategoryDropdown}
              />
            </div>
          </div>

          <SortFilterHeader />
          {isLoading ? (
            <div className="w-full h-screen flex items-center justify-center">
              <Loading />
            </div>
          ) : (
            <div className="BODY w-full min-h-[calc(100vh-300px)] flex items-center flex-col px-4 rounded-lg">
              {Array.isArray(allTransactions) && allTransactions.length > 0 ? (
                sortTransactions(paginatedTransactions).map(
                  (transaction, i) => {
                    const isFirstItem = i === 0;
                    const category =
                      "category" in transaction
                        ? transaction.category
                        : "Unknown Category";
                    const categoryLogo =
                      "categoryLogo" in transaction ? (
                        transaction.categoryLogo
                      ) : (
                        <div
                          className="w-10 h-10 rounded-full"
                          style={{
                            backgroundColor: transaction.color || "gray",
                          }}
                        ></div>
                      );

                    const color =
                      "color" in transaction
                        ? transaction.color
                        : "defaultColor";
                    return (
                      <TransactionItem
                        key={i}
                        category={category}
                        createdAt={(transaction as TransactionType).createdAt}
                        categoryLogo={categoryLogo}
                        amount={transaction.amount}
                        isFirstItem={isFirstItem}
                        setInputChecked={setInputChecked}
                        inputChecked={inputChecked}
                        color={color}
                        _id={transaction._id}
                        setIsDatePickers={setIsDatePickers}
                        isDatePickers={isDatePickers}
                        activeDatePicker={activeDatePicker}
                        setActiveDatePicker={setActiveDatePicker}
                        allTransactions={allTransactions}
                        resource={transaction.resource}
                      />
                    );
                  }
                )
              ) : (
                <div className="bg-white  w-full p-8 flex items-center justify-center gap-[20px] ">
                  <p className="text-xs text-[#696868]">
                    No transactions available. Start by creating one!
                  </p>{" "}
                </div>
              )}
            </div>
          )}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default TransactionSection;
