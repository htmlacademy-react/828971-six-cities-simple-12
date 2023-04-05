import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Main from '../../pages/mainpage/mainpage';
import Login from '../../pages/loginpage/loginpage';
import Residence from '../../pages/residencepage/residencepage';
import {AppRoutes} from '../../routes';
import NotFound from '../../pages/notfoundpage/notfoundpage';
import {Offer} from '../../types/offer';
import {Feedback} from '../../types/feedback';
import {State} from '../../types/state';
import Loader from '../loader/loader';
import {useAppSelector} from '../../hooks/use-global-state';
import {AuthorizationStatus} from '../../services/auth-data';
import PrivateRoute from '../private-route/private-route';

type AppSettings = {
  offers: Offer[];
  feedbacks: Feedback[];
}

function App({ offers, feedbacks }: AppSettings): JSX.Element {
  const { authorizationStatus, isOffersDataLoading }: State = useAppSelector((state) => state);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
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
            <PrivateRoute authorizationStatus={ authorizationStatus }>
              <Main/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoutes.Residence}
          element={
            <PrivateRoute authorizationStatus={ authorizationStatus }>
              <Residence
                property={ offers[0] }
                feedbacks={ feedbacks }
              />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoutes.Login}
          element={<Login />}
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
