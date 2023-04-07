import {SORTING_OPTIONS} from '../../../constants';
import {useState} from 'react';
import cn from 'classnames';
import {Option} from '../../../types/option';
import {useAppDispatch} from '../../../hooks/use-global-state';
import {outputData} from '../../../store/output-data/output-data.slice';

function SortingOffers() : JSX.Element{
  const [opener, setOpener] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('Popular');

  const dispatch = useAppDispatch();

  const onClickHandler = (currentSortBy: string, currentSortType: string) => {
    dispatch(outputData.actions.setSortTypeAction(currentSortType));
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
