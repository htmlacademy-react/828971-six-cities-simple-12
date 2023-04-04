import React, { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import {AppRoutes} from '../../routes';

function GlobalWrapper({children} : PropsWithChildren) {
  const navigate = useNavigate();
  const goToMain = ():void => navigate('/');

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <span className="header__logo-link header__logo-link--active" onClick={ goToMain } style={{ cursor: 'pointer' }}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </span>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </div>
                </li>
                <li className="header__nav-item">
                  <a href={AppRoutes.Login} className="header__nav-link">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}

export default GlobalWrapper;
