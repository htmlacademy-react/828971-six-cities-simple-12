import classes from './not-loaded.module.css';
import {store} from '../../../store';
import {loadingData} from '../../../store/loading-data/loading-data.slice';

type NotLoadedProps = {
  error: string;
}

function NotLoaded({error}: NotLoadedProps): JSX.Element {
  const onClickHandler = (): void => {
    store.dispatch(loadingData.actions.setError(null));
  };

  return (
    <div className={classes.container} onClick={ onClickHandler }>
      <section className={ classes.NotLoaded }>
        <div>
          <h1 className="login__title">There&apos;s some error here...</h1>
          <p>{error}</p>
        </div>
        <img className={classes.img} src="img/40not4.svg" alt=""/>
      </section>
    </div>
  );
}
export default NotLoaded;
