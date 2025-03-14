import { useMemo } from 'react';
import { DataType } from "@/app/interfaces/interface"; 
import { useGroupedData } from './use-categoryGrope';

const useLatestSpendingData = (data: DataType[], category: string) => {
  const groupedData = useGroupedData(data);
  const latestSpendingData = useMemo(() => {
    const latestSpending = data
      .filter((item) => item.category === category)
      .filter((item) => item.amount < 0);
    return latestSpending.length < 3
      ? latestSpending
      : latestSpending.slice(latestSpending.length - 3);
  }, [data, category, groupedData]);

  const isLastEl = latestSpendingData.length - 1;

  return { latestSpendingData, isLastEl };
};

export default useLatestSpendingData;
