import {useAppSelector} from '../../hooks/use-global-state';
import MainFilled from '../../components/mainpage/main-filled/main-filled';
import MainEmpty from '../../components/mainpage/main-empty/main-empty';
import {Offer} from '../../types/offer';

function Main(): JSX.Element {
  const offers: null | Offer[] = useAppSelector((state) => state.offers);

  if(offers && offers.length > 0) {
    return (<MainFilled offers={ offers }/>);
  } else {
    return (<MainEmpty/>);
  }


}

export default Main;
