import { useMemo } from "react";
import { PotsDataType } from "../components/__organism/pots/PotsSection";

const useGroupedPots = (potsData: PotsDataType[]) => {
  const groupedPots = useMemo(() => {
    const grouped: Record<string, PotsDataType[]> = {};

    potsData.forEach((pot) => {
      if (!grouped[pot.potName]) {
        grouped[pot.potName] = [];
      }
      grouped[pot.potName].push(pot);
    });

    const mergedPots = Object.keys(grouped).map((potName) => {
      const pots = grouped[potName];

      const potTargetTotalAmount = pots
        .filter((pot) => pot.amount > 0)
        .reduce((acc, pot) => acc + pot.amount, 0);

      const portSpendingTotalAmount = pots
        .filter((pot) => pot.amount < 0)
        .reduce((acc, pot) => acc + pot.amount, 0);

      const totalSaved = potTargetTotalAmount + portSpendingTotalAmount;

      const percentageSpent =
        potTargetTotalAmount > 0
          ? (Math.abs(portSpendingTotalAmount) / potTargetTotalAmount) * 100
          : 0;

      return {
        potName,
        amount: totalSaved,
        color: pots[0].color,
        _id: pots[0]._id,
        potTargetTotalAmount,
        portSpendingTotalAmount,
        totalSaved,
        percentageSpent,
      };
    });

    return mergedPots;
  }, [potsData]);

  return groupedPots;
};

export default useGroupedPots;
