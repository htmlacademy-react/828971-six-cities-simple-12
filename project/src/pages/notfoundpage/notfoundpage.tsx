import { Link } from 'react-router-dom';
import {AppRoutes} from '../../routes';
import classes from './notfoundpage.module.css';
{/*<Link to={ auth.userName && auth.userName !== 'товарищ' ? '/authorized' : '/' } className="App-link">main page?</Link>*/}

function NotFound(): JSX.Element {
  return (
    <main className="page__main">
      <div className="container">
        <section className={ classes.NotFound }>
          <div>
            <h1 className="login__title">Nothing is around...</h1>
            <p>Maybe you should return to <Link to={AppRoutes.Root} className={ classes.NotFoundLink }>main page?</Link></p>
          </div>
          <img className={classes.img} src="img/404.svg" alt=""/>
        </section>
      </div>
    </main>
  );
}
export default NotFound;
