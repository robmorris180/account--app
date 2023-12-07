import { useEffect, useState } from "react";
import { Categories } from "../../components/Categories/Categories";
import QuoteItem from "../../components/QuoteItem/QuoteItem";
import { useQuotesContext } from "../../context/QuotesContext";
import { useFetchQuotes } from "../../hooks/useFetchQuotes/useFetchQuotes";
import { mapQuoteData } from "../../domain/quoteMapper";

export type Quote = {
  id: number;
  title: string;
  category: string;
  price: number;
};

const filterQuotes = (quotes: Quote[], category: string) =>
  quotes.filter((quote) => quote.category === category);

const QuoteHistory = () => {
  const { quotes, setQuotes } = useQuotesContext();
  const { data, isLoading, isError } = useFetchQuotes();
  const [filteredQuotes, setFilteredQuotes] = useState<Quote[]>([]);

  const categories = [...new Set(quotes.map((i) => i.category))];

  useEffect(() => {
    const mappedQuoteData = mapQuoteData(data);
    setQuotes(mappedQuoteData);
  }, [data, setQuotes]);

  useEffect(() => {
    if (quotes.length > 0) {
      setFilteredQuotes(filterQuotes(quotes, "car"));
    }
  }, [quotes]);

  const handleFilterQuotes = (category: string) => {
    setFilteredQuotes(filterQuotes(quotes, category));
  };

  if (isError) {
    return <div>Error fetching your quotes.</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      QuoteHistory
      <Categories categories={categories} filterQuotes={handleFilterQuotes} />
      {filteredQuotes.map((item: Quote) => (
        <QuoteItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default QuoteHistory;
