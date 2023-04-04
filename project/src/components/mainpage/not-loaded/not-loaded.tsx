
import classes from './notloaded.module.css';

function NotLoaded(): JSX.Element {
  return (
    <main className="page__main">
      <div className="container">
        <section className={ classes.NotLoaded }>
          <div>
            <h1 className="login__title">Data is not loaded, nothing is around...</h1>
            <p>Maybe you should restart page?</p>
          </div>
          <img className={classes.img} src="img/404.svg" alt=""/>
        </section>
      </div>
    </main>
  );
}
export default NotLoaded;
