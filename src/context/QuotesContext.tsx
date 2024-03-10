import { ReactNode, createContext, useContext, useState, useMemo } from "react";
import { Quote } from "../pages/QuoteHistory/QuoteHistory";

type QuotesContextProviderProps = {
  children: ReactNode;
};

type QuotesContext = {
  quotes: Quote[];
  setQuotes: (data: Quote[]) => void;
};

const QuotesContext = createContext({} as QuotesContext);

export function QuotesContextProvider({
  children,
}: QuotesContextProviderProps) {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  const contextValue = useMemo(
    () => ({
      quotes,
      setQuotes,
    }),
    [quotes, setQuotes]
  );

  return (
    <QuotesContext.Provider value={contextValue}>
      {children}
    </QuotesContext.Provider>
  );
}

export function useQuotesContext() {
  const context = useContext(QuotesContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }

  return context;
}
