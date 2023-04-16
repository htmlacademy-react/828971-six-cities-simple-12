import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Main from '../../pages/mainpage/mainpage';
import Login from '../../pages/loginpage/loginpage';
import Residence from '../../pages/residencepage/residencepage';
import {AppRoutes} from '../../routes';
import NotFound from '../../pages/notfoundpage/notfoundpage';
import Loader from '../common/loader/loader';
import {useAppSelector} from '../../hooks/use-global-state';
import {AuthorizationStatus, IsDataLoading} from '../../constants';
import {getAuthStatus} from '../../store/user-process/user-process.selectors';
import {getIsDataLoading} from '../../store/loading-data/loading-data.selectors';
import PublicRoute from '../routes-redirection/public-route/public-route';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const isOffersDataLoading = useAppSelector(getIsDataLoading);
  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading === IsDataLoading.Offers) {
    return (
      <Loader/>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Root}
          element={
            <Main/>
          }
        />
        <Route
          path={AppRoutes.Residence}
          element={
            <Residence/>
          }
        />
        <Route
          path={AppRoutes.Login}
          element={
            <PublicRoute authorizationStatus={ authorizationStatus }>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
