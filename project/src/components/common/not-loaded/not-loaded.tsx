import classes from './notloaded.module.css';
import {useAppSelector} from '../../../hooks/use-global-state';
import {getError} from '../../../store/loading-data/loading-data.selectors';
import {store} from '../../../store';
import {loadingData} from '../../../store/loading-data/loading-data.slice';

function NotLoaded(): JSX.Element {
  const error = useAppSelector(getError);
  const onClickHandler = (): void => {
    store.dispatch(loadingData.actions.setError(null));
  };

  return (
    <div className={classes.container} onClick={ onClickHandler }>
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
  );
}
export default NotLoaded;
