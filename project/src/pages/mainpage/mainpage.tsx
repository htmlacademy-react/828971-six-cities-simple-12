import {useAppSelector} from '../../hooks/use-global-state';
import MainFilled from '../../components/mainpage/main-filled/main-filled';
import MainEmpty from '../../components/mainpage/main-empty/main-empty';
import {State} from '../../types/state';
import Loader from '../../components/loader/loader';

function Main(): JSX.Element {
  const { offers, error }: State = useAppSelector((state) => state);

  const component = () => {
    if(error) {
      return <MainEmpty/>
    } else if (offers.length === 0) {
      return <Loader/>
    } else {
      return <MainFilled offers={ offers }/>
    }
  };


  return(component());
}

export default Main;
