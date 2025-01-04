import { useMemo } from "react";

const useFormatDate = (dateString: string): string => {
  const formattedDate = useMemo(() => {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      
      console.error("Invalid Date:", dateString); 
      return "Invalid Date";
    }

   
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "short",  
      year: "numeric", 
    }).format(date);
  }, [dateString]);

  return formattedDate;
};

export default useFormatDate;
