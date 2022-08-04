import classes from "./Content.module.css";
import Logo from "../Logo";
import Aside from "../sidebar/Aside";
import Main from "../main/Main";

const Content = () => {
  return (
    <div className={classes.page}>
      <Logo />
      <div className={classes.content}>
        <Aside />
        <Main />
      </div>
    </div>
  );
};

export default Content;
