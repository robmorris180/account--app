export type QuoteResponse = {
  id: number;
  title: string;
  category: "car" | "van" | "home";
  createdDate: string;
  price: number;
  coverType: string;
  policyStartDate: string;
  expired: boolean;
};

export const quotes: QuoteResponse[] = [
  {
    id: 1,
    title: "FORD FOCUS TITANIUM 125 999cc",
    category: "car",
    createdDate: "2024-06-07T12:00:00",
    price: 228.89,
    coverType: "Comprehensive",
    policyStartDate: "2024-01-26T00:00:00",
    expired: false,
  },
  {
    id: 2,
    title: "20 Blackburn Road, Newport, Gwent, NP22 3DD",
    category: "home",
    createdDate: "2024-06-07T12:00:00",
    price: 115.83,
    coverType: "Buildings and contents cover",
    policyStartDate: "2021-02-15T00:00:00",
    expired: false,
  },
  {
    id: 3,
    title: "FORD PUMA TITANIUM 125 999cc",
    category: "car",
    createdDate: "2024-01-14T12:00:00",
    price: 480.0,
    coverType: "Comprehensive",
    policyStartDate: "2024-01-26T00:00:00",
    expired: true,
  },
  {
    id: 4,
    title: "VW GOLF 125 999cc",
    category: "car",
    createdDate: "2024-01-14T12:00:00",
    price: 520.0,
    coverType: "Comprehensive",
    policyStartDate: "2024-01-26T00:00:00",
    expired: true,
  },
  {
    id: 5,
    title: "VAN TITANIUM 125 999cc",
    category: "van",
    createdDate: "2024-01-14T12:00:00",
    price: 320.5,
    coverType: "Comprehensive",
    policyStartDate: "2024-07-26T00:00:00",
    expired: false,
  },
  {
    id: 6,
    title: "204 London Street, Newport NP15 1HN",
    category: "home",
    createdDate: "2024-01-02T12:00:00",
    price: 684.73,
    coverType: "Buildings and contents cover",
    policyStartDate: "2021-02-22T00:00:00",
    expired: true,
  },
];
