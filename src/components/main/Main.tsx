import { useSelector } from "react-redux";
import { MainReducer } from "../../store/mainReducer";
import { Ticket } from "../../store/ticketsReducer";
import classes from "./Main.module.css";

import Card from "./Card";

const Main = () => {
  const tickets = useSelector((state: MainReducer) => {
    const activeFilters = state.tickets.activeFilters.filter(
      (filter) => filter.active
    );

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
      return state.tickets.tickets;
    }

    const filteredItems = state.tickets.tickets.filter((ticket: Ticket) =>
      filtersValue.includes(ticket.stops.toString())
    );

    return filteredItems;
  });

  return (
    <main className={classes.main}>
      {tickets.map((ticket, index) => (
        <Card ticket={ticket} key={index} />
      ))}
    </main>
  );
};

export default Main;
