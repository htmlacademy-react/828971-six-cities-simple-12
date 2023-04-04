import {Navigate} from 'react-router-dom';
import {AppRoutes} from '../../routes';

type PrivateRouteProps = {
  authorizationStatus: boolean;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    // authorizationStatus === AuthorizationStatus.Auth
    authorizationStatus
      ? children
      : <Navigate to={AppRoutes.Login} />
  );
}

export default PrivateRoute;
