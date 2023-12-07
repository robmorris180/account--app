import { useEffect, useState } from "react";
import { getQuotes } from "../../domain/api";
import { QuoteResponse } from "../../data/data";

export const useFetchQuotes = () => {
  const [data, setData] = useState<QuoteResponse[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await getQuotes();
        setData(result);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, isError };
};
