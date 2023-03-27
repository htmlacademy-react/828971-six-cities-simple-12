import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Main from '../../pages/mainpage/mainpage';
import Login from '../../pages/loginpage/loginpage';
import Residence from '../../pages/residencepage/residencepage';
import {AppRoutes} from '../../routes';
import NotFound from '../../pages/notfoundpage/notfoundpage';
import {Offer} from '../../types/offer';
import {Feedback} from '../../types/feedback';

type AppSettings = {
  offers: Offer[];
  feedbacks: Feedback[];
}

function App({ offers, feedbacks }: AppSettings): JSX.Element {
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
          path={AppRoutes.Login}
          element={<Login />}
        />
        <Route
          path={AppRoutes.Residence}
          element={
            <Residence
              offers={ offers }
              property={ offers[2] }
              feedbacks={ feedbacks }
            />
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
