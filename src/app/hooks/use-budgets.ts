import { useState, useEffect } from "react";
import { axiosInstance } from "../libs/axiosInstance";
import { DataType } from "../interfaces/interface";

const useBudgets = (accessToken: string) => {
  const [data, setData] = useState<DataType[]>([]);
  const [error, setError] = useState<string | null>(null);

  const getBudgets = async () => {
    try {
      const res = await axiosInstance.get("/budgets", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setData(res.data);
    } catch (error) {
      setError("Failed to fetch budgets");
      console.error(error);
    }
  };

  useEffect(() => {
    if (accessToken) {
      getBudgets();
    }
  }, [accessToken]);

  return { data, error, getBudgets };
};

export default useBudgets;
