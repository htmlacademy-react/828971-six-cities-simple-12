import Header from '../../components/common/header/header';
import {useAppDispatch} from '../../hooks/use-global-state';
import {setAuthStatusAction, setMail} from '../../store/actions';
import {AuthorizationStatus} from '../../services/auth-data';
import {FormEvent} from 'react';
import {AppRoutes} from '../../routes';
import { useNavigate } from 'react-router-dom';

function Login(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const goToMain = ():void => navigate(AppRoutes.Root);

  const onSubmitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(setAuthStatusAction(AuthorizationStatus.Auth));
    dispatch(setMail('somemail@mail.ml'));
    goToMain();
  };

  return (
    <div className="page page--gray page--login">
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={ (evt) => onSubmitHandler(evt) }>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
export default Login;
