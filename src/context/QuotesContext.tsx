import { ReactNode, createContext, useContext, useState } from "react";
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

  return (
    <QuotesContext.Provider
      value={{
        quotes,
        setQuotes,
      }}
    >
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
