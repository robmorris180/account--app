import { useRoutes } from "react-router-dom";
import QuoteHistory from "./pages/QuoteHistory/QuoteHistory";
import AccountDetails from "./pages/AccountDetails/AccountDetails";
import Nav from "./components/Nav/Nav";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { QuotesContextProvider } from "./context/QuotesContext";

function Routes() {
  const element = useRoutes([
    { path: "/", element: <QuoteHistory /> },
    { path: "/account-details", element: <AccountDetails /> },
    { path: "*", element: <PageNotFound /> },
  ]);
  return element;
}

function App() {
  return (
    <QuotesContextProvider>
      <header>
        <h1>Account App</h1>
        <Nav />
      </header>
      <Routes />
    </QuotesContextProvider>
  );
}

export default App;
