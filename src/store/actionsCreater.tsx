import { getTickets as getData } from "../otherFunc/getTickets";
import { getCurrency as getCurrencyData } from "../otherFunc/getCurrency";
import { InitialState } from "./ticketsReducer";

import { ThunkDispatch } from "redux-thunk";
import { ActionCreator, Action } from "redux";

import { Ticket } from "./ticketsReducer";
import { CurrencyArr } from "./currencyReducer";

export type TicketsDispatch = ThunkDispatch<
  InitialState,
  void,
  Action<{ type: string; tickets: Array<Ticket> }>
>;

export type CurrenciesDispatch = ThunkDispatch<
  InitialState,
  void,
  Action<{ type: string; tickets: Array<CurrencyArr> }>
>;

const setTickets: ActionCreator<Action> = (tickets: Array<Ticket>) => {
  return {
    type: "SET_TICKETS",
    tickets: tickets,
  };
};

export const getTickets = () => {
  return (dispatch: TicketsDispatch) => {
    getData().then((data) => {
      dispatch(setTickets(data.tickets));
    });
  };
};

const setCurrency: ActionCreator<Action> = (currencies: Array<CurrencyArr>) => {
  return {
    type: "SET_CURRENCIES",
    currencies,
  };
};

export const getCurrency = () => {
  return (dispatch: CurrenciesDispatch) => {
    getCurrencyData().then((data) => {
      dispatch(setCurrency(Object.entries(data.Valute)));
    });
  };
};
export const setActiveCurrency: ActionCreator<Action> = (text: string) => {
  return {
    type: "SET_ACTIVE_CURRENCY",
    selectedCurrency: text,
  };
};

export const setActiveFilters: ActionCreator<Action> = (
  activeFilters: Array<{ active: boolean; text: string; id: number }>
) => {
  return {
    type: "SET_ACTIVE_FILTERS",
    activeFilters,
  };
};
