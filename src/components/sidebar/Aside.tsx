import classes from "./Aside.module.css";

import Currency from "./Currency";
import NumberOfTransfers from "./NumberOfTransfers";

const Aside = () => {
  return (
    <aside className={classes.sidebar}>
      <Currency />
      <NumberOfTransfers />
    </aside>
  );
};

export default Aside;
