import { useSelector } from "react-redux";
import { InitialState } from "../../store/mainReducer";
import classes from "./Main.module.css";

import Card from "./Card";

const Main = () => {
  const tickets = useSelector((state: InitialState) => state.tickets);

  return (
    <main className={classes.main}>
      {tickets.map((ticket, index) => (
        <Card ticket={ticket} key={index} />
      ))}
    </main>
  );
};

export default Main;
