import { getTickets as getData } from "../otherFunc/getTickets";
import { getCurrency as getCurrencyData } from "../otherFunc/getCurrency";

import { Ticket, CurrencyArr } from "./mainReducer";

const setTickets = (tickets: Array<Ticket>) => {
  return {
    type: "SET_TICKETS",
    tickets: tickets,
  };
};

export const getTickets: () => any = () => {
  return (dispatch: ({}: any) => void) => {
    getData().then((data) => {
      dispatch(setTickets(data.tickets));
    });
  };
};

const setCurrency = (currencies: Array<CurrencyArr>) => {
  return {
    type: "SET_CURRENCIES",
    currencies,
  };
};

export const getCurrency: () => any = () => {
  return (dispatch: ({}: any) => void) => {
    getCurrencyData().then((data) => {
      dispatch(setCurrency(Object.entries(data.Valute)));
    });
  };
};
export const setActiveCurrency = (text: string) => {
  return {
    type: "SET_ACTIVE_CURRENCY",
    selectedCurrency: text,
  };
};

export const setActiveFilters = (
  activeFilters: Array<{ active: boolean; text: string; id: number }>
) => {
  return {
    type: "SET_ACTIVE_FILTERS",
    activeFilters,
  };
};
