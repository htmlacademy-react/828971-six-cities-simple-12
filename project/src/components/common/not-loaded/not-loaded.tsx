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
          <div className={ classes.ImgContainer }>
            <img className={classes.img} src="img/40not4.svg" alt=""/>
            <p className={ classes.numOf }>403</p>
          </div>
        </section>
      </div>
    </main>
  );
}
export default NotLoaded;
