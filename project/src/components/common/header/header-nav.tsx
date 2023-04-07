import { useNavigate } from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../hooks/use-global-state';
import {AuthorizationStatus} from '../../../services/auth-data';
import {getAuthStatus} from '../../../store/user-process/user-process.selectors';
import {logoutAction} from '../../../store/api-actions';
import {AppRoutes} from '../../../routes';
import React from 'react';
import {getMail} from '../../../store/output-data/output-data.selectors';

function HeaderNav() {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const email = useAppSelector(getMail);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const goToLogin = ():void => navigate(AppRoutes.Login);

  const onClickHandler = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
    goToLogin();
  };

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ?
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <div className="header__nav-profile">
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__user-name user__name">{ email }</span>
            </div>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="#" onClick={ (evt) => onClickHandler(evt) }>
              <span className="header__signout">Sign out</span>
            </a>
          </li>
        </ul>
      </nav>
      :
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <a className="header__nav-link header__nav-link--profile" href="#">
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">Sign in</span>
            </a>
          </li>
        </ul>
      </nav>
  );
}
export default HeaderNav;
