import classes from './notloaded.module.css';
import {useAppSelector} from '../../../hooks/use-global-state';
import {getError} from '../../../store/loading-data/loading-data.selectors';

function NotLoaded(): JSX.Element {
  const error = useAppSelector(getError);

  return (
    <main className="page__main">
      <div className="container">
        <section className={ classes.NotLoaded }>
          <div>
            <h1 className="login__title">Data is not loaded, nothing is around...</h1>
            <p>{error}</p>
          </div>
          <img className={classes.img} src="img/404.svg" alt=""/>
        </section>
      </div>
    </main>
  );
}
export default NotLoaded;
