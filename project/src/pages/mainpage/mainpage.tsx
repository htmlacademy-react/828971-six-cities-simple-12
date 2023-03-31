import GlobalWrapper from '../../components/global-wrapper/global-wrapper';
import OffersList from '../../components/common/offer-stuff/offers-list/offers-list';
import MainNav from '../../components/mainpage/main-nav/main-nav';
import { Map } from '../../components/map/map';
import {useAppDispatch, useAppSelector} from '../../hooks/use-global-state';
import {useEffect} from 'react';
import {fillOffersAction} from '../../store/action';
import {State} from '../../types/state';
import SortingOffers from '../../components/mainpage/sorting-offers/sorting-offers';
import {getSortedOffers} from '../../utils';

function Main(): JSX.Element {
  const { city, offers, sortType }: State = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fillOffersAction());
  }, [city]);

  return (
    <GlobalWrapper>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <MainNav/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{ offers.length } places to stay in {city}</b>
              <SortingOffers />
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={ getSortedOffers(offers, sortType) }/>
              </div>
            </section>
            <div className="cities__right-section">
              <Map offers={ offers } mapClassName={'cities__map'}/>
            </div>
          </div>
        </div>
      </main>
    </GlobalWrapper>
  );
}
export default Main;
