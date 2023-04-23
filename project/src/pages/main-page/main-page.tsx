import {useAppSelector} from '../../hooks/use-global-state/use-global-state';
import MainFilled from '../../components/mainpage/main-filled/main-filled';
import MainEmpty from '../../components/mainpage/main-empty/main-empty';
import {getOffers} from '../../store/loading-data/loading-data.selectors';
import GlobalWrapper from '../../components/global-wrapper/global-wrapper';
import {store} from '../../store';
import {fetchOffers} from '../../store/api-actions';
import {useEffect, useRef} from 'react';

function Main(): JSX.Element {
  const offers = useAppSelector(getOffers);
  const isLoadedOffers = useRef(false);

  useEffect(() => {
    if (offers.length === 0 && !isLoadedOffers.current) {
      store.dispatch(fetchOffers());
      isLoadedOffers.current = true;
    }
  });

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
