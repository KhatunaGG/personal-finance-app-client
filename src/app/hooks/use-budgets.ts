// import { useState, useEffect } from "react";
// import { axiosInstance } from "../libs/axiosInstance";
// import { DataType } from "../interfaces/interface";


// const useBudgets = (accessToken: string) => {
//   const [data, setData] = useState<DataType[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   const getBudgets = async () => {
//     setLoading(true);
//     try {
//       const res = await axiosInstance.get("/budgets", {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });
//       setData(res.data);
//     } catch (error) {
//       setError("Failed to fetch budgets");
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getBudgets();
//   }, [accessToken]);

//   return { data, loading, error, getBudgets };
// };

// export default useBudgets;




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
      getBudgets(); // Fetch data only when accessToken is available
    }
  }, [accessToken]);

  return { data, error, getBudgets };
};

export default useBudgets;
