import {Link} from 'react-router-dom';
import {City} from '../../../types/offer';
import {useAppDispatch} from '../../../hooks/use-global-state/use-global-state';
import {outputData} from '../../../store/output-data/output-data.slice';

type RedirectButtonTypes = {
  city: City['name'];
}

function RedirectButton({city}: RedirectButtonTypes): JSX.Element {
  const dispatch = useAppDispatch();

  const onClickHandler = (chosenCity: string): void => {
    dispatch(outputData.actions.setCityAction(chosenCity));
  };

  return(
    <Link className="locations__item-link" to={`/#${city.toLowerCase()}`} onClick={ () => onClickHandler(city) }>
      <span>{city}</span>
    </Link>
  );
}


export default RedirectButton;
