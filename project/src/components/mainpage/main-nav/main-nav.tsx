import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../hooks/use-global-state/use-global-state';
import {CITIES} from '../../../constants';
import {outputData} from '../../../store/output-data/output-data.slice';
import {getCity} from '../../../store/output-data/output-data.selectors';

function MainNav(): JSX.Element {
  const dispatch = useAppDispatch();
  const actualCity: string = useAppSelector(getCity);

  const onClickHandler = (chosenCity: string): void => {
    dispatch(outputData.actions.setCityAction(chosenCity));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          { CITIES.map((city: string): JSX.Element => (
            <li className="locations__item" key={ city }>
              <Link
                to={`#${city.toLowerCase()}`}
                className={`locations__item-link tabs__item ${ city === actualCity ? ' tabs__item--active' : ''}`}
                onClick={ () => onClickHandler(city) }
              >
                <span>{ city }</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default MainNav;
