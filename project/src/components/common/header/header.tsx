import {useNavigate, useMatch} from 'react-router-dom';
import HeaderNav from './header-nav';
import {AppRoutes} from '../../../routes';

function Header() {
  const navigate = useNavigate();
  const match = useMatch('login');
  const goToMain = ():void => navigate(AppRoutes.Root);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <span className="header__logo-link header__logo-link--active" onClick={ goToMain } style={{ cursor: 'pointer' }}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </span>
          </div>
          { !match && <HeaderNav/> }
        </div>
      </div>
    </header>
  );
}

export default Header;
