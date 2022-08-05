import classes from "./Filters.module.css";
import { useState } from "react";

const Filters: React.FC<{
  text: string;
  id: number;
  active: boolean;
  onchange: (text: string, checked: boolean) => void;
  onclick: (id: number) => void;
}> = (props) => {
  return (
    <div className={classes.container}>
      <label className={classes.label}>
        <input
          className={classes.label__checkbox}
          type="checkbox"
          data-value={props.text}
          checked={props.active}
          onChange={(event) => props.onchange(props.text, event.target.checked)}
        ></input>
        <span className={classes.label__text}>{props.text}</span>
      </label>
      <span
        className={classes.container__filter}
        onClick={() => props.onclick(props.id)}
      >
        только
      </span>
    </div>
  );
};

export default Filters;
