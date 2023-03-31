import GlobalWrapper from '../../components/global-wrapper/global-wrapper';
import OffersList from '../../components/common/offer-stuff/offers-list/offers-list';
import MainNav from '../../components/mainpage/main-nav/main-nav';
import { Map } from '../../components/map/map';
import {useAppSelector} from '../../hooks/use-global-state';
import {State} from '../../types/state';
import SortingOffers from '../../components/mainpage/sorting-offers/sorting-offers';
import {getSortedOffers} from '../../utils';
import {useEffect, useState} from 'react';
import {Offer} from '../../types/offer';
import Loader from '../../components/loader/loader';
// import {loadOffersAction} from '../../store/action';
// import {offers} from '../../mocks/offers';

function Main(): JSX.Element {
  const { city, offers, sortType }: State = useAppSelector((state) => state);
  const [currentOffers, setCurrentOffers] = useState<Offer[]>([]);

  useEffect(() => {
    if(offers) {
      setCurrentOffers(offers.filter((offer) => offer.city.name === city));
      console.log('Offers are ' + offers);
      console.log('Current offers are ' + currentOffers);
    }
  }, [city]);

  return (
    <GlobalWrapper>
      {currentOffers.length &&
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
                <OffersList offers={getSortedOffers(currentOffers, sortType)}/>
              </div>
            </section>
            <div className="cities__right-section">
              <Map offers={currentOffers as Offer[]} mapClassName={'cities__map'}/>
            </div>
          </div>
        </div>
      </main>
      }
      {!currentOffers.length &&
        <Loader/>
      }
    </GlobalWrapper>
  );
}

export default Main;
