import {useAppSelector} from '../../hooks/use-global-state';
import MainFilled from '../../components/mainpage/main-filled/main-filled';
import MainEmpty from '../../components/mainpage/main-empty/main-empty';
import {State} from '../../types/state';
import Header from '../../components/common/header/header';
import React from 'react';

function Main(): JSX.Element {
  const { offers }: State = useAppSelector((state) => state);

  return(
    <div className="page page--gray page--main">
      <Header/>
      {
        offers.length === 0
          ?
          <MainEmpty/>
          :
          <MainFilled offers={offers}/>
      }
    </div>
  );
}

export default Main;
