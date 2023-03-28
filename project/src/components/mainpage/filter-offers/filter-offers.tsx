import {FILTER_OPTIONS} from '../../../constants';
import {useState} from 'react';
import cn from 'classnames';
// import {sortOffers} from '../../controllers/filter-offer-controller';
// import {State} from '../../../types/state';
// import {useAppSelector} from '../../../hooks/use-global-state';
// import {Offer} from '../../../types/offer';
import {Option} from '../../../types/option';

type FilterOffersProps = {
  setOptionCB: (option: Option) => void;
  activeOption: Option;
};

function FilterOffers({setOptionCB, activeOption}: FilterOffersProps) : JSX.Element{
  const [opener, setOpener] = useState<boolean>(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setOpener(!opener)}>
        &nbsp;{activeOption.name}
        <svg className="places__sorting-arrow" width="7" height="4"><use xlinkHref="#icon-arrow-select"></use></svg>
      </span>
      <ul className={cn('places__options', 'places__options--custom', {'places__options--opened' : opener})}>
        {FILTER_OPTIONS.map( (option: Option): JSX.Element => (
          <li
            className="places__option"
            key={option.name}
            tabIndex={0}
            onClick={() => {
              setOptionCB(option);
              setOpener(false);}}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default FilterOffers;

{/*places__options--opened*/}

{/*<li className="places__option places__option--active" tabIndex={0}>Popular</li>*/}
{/*<li className="places__option" tabIndex={0}>Price: low to high</li>*/}
{/*<li className="places__option" tabIndex={0}>Price: high to low</li>*/}
{/*<li className="places__option" tabIndex={0}>Top rated first</li>*/}
