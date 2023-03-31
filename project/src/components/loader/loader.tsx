import classes from './loader.module.css';
import spinner from "../../img/spinner.svg";

function Loader(): JSX.Element {
  return (
    <div className={classes.loader}>
      <img src={spinner} className={classes.spinner} alt="logo" />
      <p> Loading data...</p>
    </div>
  );
}

export default Loader;
