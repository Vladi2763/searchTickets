import classes from "./Aside.module.css";

import Currency from "./Currency";
import Transfers from "./Transfers";

const Aside = () => {
  return (
    <aside className={classes.sidebar}>
      <Currency />
      <Transfers />
    </aside>
  );
};

export default Aside;
