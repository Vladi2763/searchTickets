import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTickets, getCurrency } from "./store/actionsCreater";

import { TicketsDispatch, CurrenciesDispatch } from "./store/actionsCreater";

import Content from "./components/pages/Content";

function App() {
  const ticketDispatch: TicketsDispatch = useDispatch();
  const currencyDispatch: CurrenciesDispatch = useDispatch();

  useEffect(() => {
    ticketDispatch(getTickets());
    currencyDispatch(getCurrency());
  }, [ticketDispatch, currencyDispatch]);
  return <Content />;
}

export default App;
