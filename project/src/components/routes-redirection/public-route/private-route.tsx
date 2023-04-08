import {Navigate} from 'react-router-dom';
import {AppRoutes} from '../../../routes';
import {AuthorizationStatus} from '../../../services/auth-data';

type PublicRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PublicRoute(props: PublicRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.NoAuth
      ? children
      : <Navigate to={AppRoutes.Root} />
  );
}

export default PublicRoute;
