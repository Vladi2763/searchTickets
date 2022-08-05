import classes from "./NumberOfTransfers.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { InitialState } from "../../store/mainReducer";
import Filters from "./Filters";
import { useDispatch } from "react-redux";

import { setActiveFilters } from "../../store/actionsCreater";

type FilterChange = (text: string, active: boolean) => void;

const NumberOfTransfers = () => {
  const dispatch = useDispatch();

  const filtersValue = useSelector((state: InitialState) => state.filters);

  useEffect(() => {
    const filters = filtersValue.map((filter, index) => ({
      active: false,
      text: filter,
      id: index + 1,
    }));
    dispatch(setActiveFilters(filters));
  }, []);

  const activeFilters = useSelector(
    (state: InitialState) => state.activeFilters
  );

  const onFilterChangeHandler: FilterChange = (text, active) => {
    const newFilters = activeFilters.map((n) =>
        [n.text, "Все"].includes(text) ? { ...n, active } : n
      ),
      isAll = newFilters.filter((n) => n.text !== "Все").every((n) => n.active);

    newFilters.find((n) => n.text === "Все")!.active = isAll;

    dispatch(setActiveFilters(newFilters));
  };

  const onSingleFilterHandler = (id: number) => {
    const text = activeFilters.find((filter) => filter.id === id);
    const newFilters = activeFilters.map((filter) => {
      if (text?.text === "Все") {
        return {
          ...filter,
          active: true,
        };
      }
      if (filter.id !== id) {
        return {
          ...filter,
          active: false,
        };
      } else {
        return {
          ...filter,
          active: true,
        };
      }
    });

    dispatch(setActiveFilters(newFilters));
  };

  return (
    <div className={classes.container}>
      <span className={classes.container__text}>Количество пересадок</span>
      <div className={classes.transfers}>
        {activeFilters.map((filter, index) => (
          <Filters
            id={filter.id}
            key={index}
            text={filter.text}
            active={filter.active}
            onchange={onFilterChangeHandler}
            onclick={onSingleFilterHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default NumberOfTransfers;
