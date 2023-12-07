import { QuoteResponse } from "../data/data";
import { Quote } from "../pages/QuoteHistory/QuoteHistory";

export const mapQuoteData = (responseData: QuoteResponse[]) => {
  const mapQuoteData: Quote[] = [];

  responseData.forEach((data) => {
    const newData = {
      id: data.id,
      title: data.title,
      category: data.category,
      createdDate: data.createdDate,
      price: data.price,
      coverType: data.coverType,
      policyStartDate: data.policyStartDate,
      expired: data.expired,
    };

    mapQuoteData.push(newData);
  });

  return mapQuoteData;
};
