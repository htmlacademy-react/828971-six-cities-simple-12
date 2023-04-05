import {State} from '../../../types/state';
import {useAppSelector} from '../../../hooks/use-global-state';
import {AuthorizationStatus} from '../../../services/auth-data';

function HeaderNav() {
  const { authorizationStatus, email }: State = useAppSelector((state) => state);
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
            <a className="header__nav-link" href="#">
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
