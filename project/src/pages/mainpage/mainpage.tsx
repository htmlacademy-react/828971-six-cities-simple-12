import {useAppSelector} from '../../hooks/use-global-state';
import MainFilled from '../../components/mainpage/main-filled/main-filled';
import MainEmpty from '../../components/mainpage/main-empty/main-empty';
import Header from '../../components/common/header/header';
import React from 'react';
import {getOffers} from '../../store/loading-data/loading-data.selectors';

function Main(): JSX.Element {
  const offers = useAppSelector(getOffers);

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
