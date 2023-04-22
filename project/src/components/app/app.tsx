import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Main from '../../pages/main-page/main-page';
import Login from '../../pages/login-page/login-page';
import Residence from '../../pages/residence-page/residence-page';
import {AppRoutes} from '../../routes';
import NotFound from '../../pages/not-found-page/not-found-page';
import Loader from '../common/loader/loader';
import {useAppSelector} from '../../hooks/use-global-state/use-global-state';
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
