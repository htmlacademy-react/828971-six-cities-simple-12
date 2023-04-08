import { useNavigate } from 'react-router-dom';
import HeaderNav from './header-nav';

function Header() {
  const navigate = useNavigate();
  const goToMain = ():void => navigate('/');

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <span className="header__logo-link header__logo-link--active" onClick={ goToMain } style={{ cursor: 'pointer' }}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </span>
          </div>
          <HeaderNav/>
        </div>
      </div>
    </header>
  );
}

export default Header;
