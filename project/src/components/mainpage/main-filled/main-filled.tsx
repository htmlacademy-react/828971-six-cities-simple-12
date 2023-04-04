import {State} from '../../../types/state';
import {useAppSelector} from '../../../hooks/use-global-state';
import GlobalWrapper from '../../global-wrapper/global-wrapper';
import MainNav from '../main-nav/main-nav';
import SortingOffers from '../sorting-offers/sorting-offers';
import OffersList from '../../common/offer-stuff/offers-list/offers-list';
import {Map} from '../../map/map';
import {Offer} from '../../../types/offer';
import {getFilteredOffers, getSortedOffers} from '../../../utils';

type MainFilledProps = {
  offers: Offer[];
}

function MainFilled({ offers }: MainFilledProps): JSX.Element {
  const { city, sortType }: State = useAppSelector((state) => state);
  const currentOffers = getFilteredOffers(offers, city);

  return (
      <GlobalWrapper>
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
      </GlobalWrapper>
  );
}

export default MainFilled;
