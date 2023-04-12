import {useAppSelector} from '../../hooks/use-global-state';
import MainFilled from '../../components/mainpage/main-filled/main-filled';
import MainEmpty from '../../components/mainpage/main-empty/main-empty';
import React from 'react';
import {getOffers} from '../../store/loading-data/loading-data.selectors';
import GlobalWrapper from '../../components/globalWrapper/globalWrapper';

function Main(): JSX.Element {
  const offers = useAppSelector(getOffers);
  return(
    <GlobalWrapper classes={'page page--gray page--main'}>
      {
        offers && offers.length !== 0
          ?
          <MainFilled offers={offers}/>
          :
          <MainEmpty/>
      }
    </GlobalWrapper>
  );
}

export default Main;
