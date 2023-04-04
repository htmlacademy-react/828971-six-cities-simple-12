import {SORTING_OPTIONS} from '../../../constants';
import {useState} from 'react';
import cn from 'classnames';
import {Option} from '../../../types/option';
import {setSortTypeAction} from '../../../store/actions';
import {useAppDispatch} from '../../../hooks/use-global-state';

function SortingOffers() : JSX.Element{
  const [opener, setOpener] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('Popular');

  const dispatch = useAppDispatch();

  const onClickHandler = (currentSortBy: string, currentSortType: string) => {
    dispatch(setSortTypeAction(currentSortType));
    setSortBy(currentSortBy);
    setOpener(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setOpener(!opener)}>
        &nbsp;{ sortBy }
        <svg className="places__sorting-arrow" width="7" height="4"><use xlinkHref="#icon-arrow-select"></use></svg>
      </span>
      <ul className={cn('places__options', 'places__options--custom', {'places__options--opened' : opener})}>
        {SORTING_OPTIONS.map( (option: Option): JSX.Element => (
          <li
            className="places__option"
            key={option.name}
            tabIndex={0}
            onClick={ () => onClickHandler(option.name, option.sortType) }
          >
            {option.name}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortingOffers;

{/*places__options--opened*/}

{/*<li className="places__option places__option--active" tabIndex={0}>Popular</li>*/}
{/*<li className="places__option" tabIndex={0}>Price: low to high</li>*/}
{/*<li className="places__option" tabIndex={0}>Price: high to low</li>*/}
{/*<li className="places__option" tabIndex={0}>Top rated first</li>*/}
