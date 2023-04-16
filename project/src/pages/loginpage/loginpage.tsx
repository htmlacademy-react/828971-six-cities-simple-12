import {useAppDispatch} from '../../hooks/use-global-state';
import {FormEvent, useRef} from 'react';
import {fetchEmail, loginAction} from '../../store/api-actions';
import {AuthData} from '../../types/auth-data';
import {AppRoutes} from '../../routes';
import {useNavigate} from 'react-router';
import GlobalWrapper from '../../components/globalWrapper/globalWrapper';
import {useDisabling} from '../../hooks/use-disabling/use-disabling';

function Login(): JSX.Element {
  const dispatch = useAppDispatch();
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const isDisabled = useDisabling();

  const onSubmit = async (authData: AuthData) => {
    await dispatch(loginAction(authData));
    await dispatch(fetchEmail());
    navigate(AppRoutes.Root);
  };


  const onSubmitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        email: loginRef.current.value,
        password: passwordRef.current.value,
      });
      loginRef.current.value = '';
      passwordRef.current.value = '';
    }
  };

  return (
    <GlobalWrapper classes={'page page--gray page--login'}>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={ (evt) => onSubmitHandler(evt) }>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input ref={loginRef} className="login__input form__input" type="email" name="name" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input ref={passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" required />
              </div>
              <button className="login__submit form__submit button" type="submit" disabled={ isDisabled }>Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Paris</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </GlobalWrapper>
  );
}
export default Login;
