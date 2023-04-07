import {useAppSelector} from '../../../hooks/use-global-state';
import MainNav from '../main-nav/main-nav';
import SortingOffers from '../sorting-offers/sorting-offers';
import OffersList from '../../common/offer-stuff/offers-list/offers-list';
import {Map} from '../../common/map/map';
import {Offer} from '../../../types/offer';
import {getFilteredOffers, getSortedOffers} from '../../../utils';
import {getCity, getSortType} from '../../../store/output-data/output-data.selectors';

type MainFilledProps = {
  offers: Offer[];
}

function MainFilled({ offers }: MainFilledProps): JSX.Element {
  const city: string = useAppSelector(getCity);
  const sortType: string = useAppSelector(getSortType);
  // const { city, sortType }: State = useAppSelector((state) => state);
  //toDo как такую запись, как выше, вытянуть из слайсов?
  const currentOffers = getFilteredOffers(offers, city);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <MainNav/>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{currentOffers.length} places to stay in {city}</b>
            <SortingOffers/>
            <div className="cities__places-list places__list tabs__content">
              <OffersList offers={getSortedOffers(offers, city, sortType)}/>
            </div>
          </section>
          <div className="cities__right-section">
            <Map offers={currentOffers} mapClassName={'cities__map'}/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainFilled;
