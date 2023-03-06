import React from 'react';
import Main from '../../pages/mainpage/mainpage';

type AppSettings = {
  amountOffers: number;
}

function App({amountOffers}: AppSettings): JSX.Element {
  return <Main offers={amountOffers} />;
}

export default App;
