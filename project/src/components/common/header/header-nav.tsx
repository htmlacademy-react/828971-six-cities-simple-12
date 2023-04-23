import { Link } from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../hooks/use-global-state/use-global-state';
import {AuthorizationStatus} from '../../../constants';
import {getAuthStatus} from '../../../store/user-process/user-process.selectors';
import {logoutAction} from '../../../store/api-actions';
import {AppRoutes} from '../../../routes';
import {getMail} from '../../../store/loading-data/loading-data.selectors';

function HeaderNav() {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const email = useAppSelector(getMail);
  const dispatch = useAppDispatch();
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  const onClickLogoutHandler = () => {
    (async () => await dispatch(logoutAction()))();
  };

  return (
    <>
      { isAuth &&

      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <div className="header__nav-profile">
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__user-name user__name">{email}</span>
            </div>
          </li>
          <li className="header__nav-item">
            <span className="header__nav-link" onClick={onClickLogoutHandler} style={{cursor: 'pointer'}}>
              <span className="header__signout">Sign out</span>
            </span>
          </li>
        </ul>
      </nav> }
      { !isAuth &&
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <Link className="header__nav-link header__nav-link--profile" to={AppRoutes.Login}>
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                <span className="header__login">Sign in</span>
              </Link>
            </li>
          </ul>
        </nav> }
    </>
  );
}

export default HeaderNav;
