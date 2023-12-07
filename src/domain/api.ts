import { QuoteResponse, quotes } from "../data/data";

export const getQuotes = (): Promise<QuoteResponse[]> => {
  return new Promise((resolve, reject) => {
    if (!quotes) {
      return setTimeout(() => {
        reject(new Error("Quotes not found!!!"));
      }, 250);
    }

    setTimeout(() => {
      resolve(quotes);
    }, 250);
  });
};
