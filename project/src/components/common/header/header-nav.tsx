import { useNavigate, Link } from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../hooks/use-global-state';
import {AuthorizationStatus} from '../../../constants';
import {getAuthStatus} from '../../../store/user-process/user-process.selectors';
import {logoutAction} from '../../../store/api-actions';
import {AppRoutes} from '../../../routes';
import React from 'react';
import {getMail} from '../../../store/loading-data/loading-data.selectors';


function HeaderNav() {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const email = useAppSelector(getMail);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const goToLogin = ():void => navigate(AppRoutes.Login);

  const onClickHandler = (evt: React.MouseEvent<HTMLSpanElement>) => {
    evt.preventDefault();
    (async () => {
      await dispatch(logoutAction());
      goToLogin();
    })();
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
            <Link className="header__nav-link" to={AppRoutes.Login} onClick={ (evt) => onClickHandler(evt) }>
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        </ul>
      </nav>
      :
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <a className="header__nav-link header__nav-link--profile" href="#">
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <Link className="header__login" to={AppRoutes.Login} onClick={ (evt) => onClickHandler(evt) }>Sign in</Link>
            </a>
          </li>
        </ul>
      </nav>
  );
}
export default HeaderNav;
