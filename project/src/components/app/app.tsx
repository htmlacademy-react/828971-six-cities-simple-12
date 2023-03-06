import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Main from '../../pages/mainpage/mainpage';
import Login from '../../pages/loginpage/loginpage';
import Residence from '../../pages/residencepage/residencepage';
import {AppRoutes} from '../../routes';

type AppSettings = {
  amountOffers: number;
}

function App({amountOffers}: AppSettings): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Root}
          element={<Main offers={amountOffers} />}
        />
        <Route
          path={AppRoutes.Login}
          element={<Login />}
        />
        <Route
          path={AppRoutes.Residence}
          element={<Residence />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
