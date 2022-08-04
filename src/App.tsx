import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTickets, getCurrency } from "./store/actionsCreater";

import classes from "./App.module.css";

import Content from "./components/pages/Content";

function App() {
  const dispatch = useDispatch();

  const tickets = useSelector((state: any) => state.tickets);
  console.log(tickets);

  useEffect(() => {
    dispatch(getTickets());
    dispatch(getCurrency());
  }, [dispatch]);
  return <Content />;
}

export default App;
