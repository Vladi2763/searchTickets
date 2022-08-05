import { useSelector } from "react-redux";
import { InitialState, Ticket } from "../../store/mainReducer";
import classes from "./Main.module.css";

import Card from "./Card";

const Main = () => {
  const tickets = useSelector((state: InitialState) => {
    const activeFilters = state.activeFilters.filter((filter) => filter.active);

    const filtersValue: Array<string> = activeFilters.map((filter) => {
      if (filter.text === "Все") {
        return "Все";
      } else if (filter.text === "Без пересадок") {
        return "0";
      } else if (filter.text === "1 пересадка") {
        return "1";
      } else if (filter.text === "2 пересадки") {
        return "2";
      } else if (filter.text === "3 пересадки") {
        return "3";
      }
      return "";
    });

    if (filtersValue.includes("Все") || filtersValue.length === 0) {
      return state.tickets;
    }

    const filteredItems = state.tickets.filter((ticket: Ticket) =>
      filtersValue.includes(ticket.stops.toString())
    );

    return filteredItems;
  });

  return (
    <main className={classes.main}>
      {tickets?.map((ticket, index) => (
        <Card ticket={ticket} key={index} />
      ))}
    </main>
  );
};

export default Main;
