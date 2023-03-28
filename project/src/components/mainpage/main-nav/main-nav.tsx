import {Link} from 'react-router-dom';
import {changeCityAction} from '../../../store/action';
import {useAppDispatch, useAppSelector} from '../../../hooks/use-global-state';
import {CITIES} from '../../../constants';
import {State} from '../../../types/state';

function MainNav(): JSX.Element {
  const dispatch = useAppDispatch();
  const actualCity: string = useAppSelector((state: State) => state.city);

  const onClickHandler = (chosenCity: string): void => {
    dispatch(changeCityAction(chosenCity));
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
