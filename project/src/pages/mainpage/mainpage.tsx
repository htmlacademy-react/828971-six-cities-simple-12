import GlobalWrapper from '../../components/global-wrapper/global-wrapper';
import OffersList from '../../components/common/offer-stuff/offers-list/offers-list';
import MainNav from '../../components/mainpage/main-nav/main-nav';
import { Map } from '../../components/map/map';
import {useAppDispatch, useAppSelector} from '../../hooks/use-global-state';
import {useEffect, useState} from 'react';
import {fillOffersAction} from '../../store/action';
import {State} from '../../types/state';
import FilterOffers from '../../components/mainpage/filter-offers/filter-offers';
import {Option} from '../../types/option';
import {DEFAULT_OPTION} from '../../constants';
import {Offer} from '../../types/offer';

function Main(): JSX.Element {
  const { city, offers }: State = useAppSelector((state) => state);
  const [activeOption, setActiveOption] = useState<Option>(DEFAULT_OPTION);
  const [filteredOffers, setFilteredOffers] = useState<Offer[]>(offers);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fillOffersAction());
  }, [city]);

  useEffect(() => {
    if(activeOption.cb) {
      setFilteredOffers(offers.slice().sort(activeOption.cb));
    } else {
      setFilteredOffers(offers);
    }
  }, [activeOption, offers]);

  const onOptsMouseHandler = (option: Option) => {
    setActiveOption(option);
  };

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
              <FilterOffers activeOption={ activeOption } setOptionCB={ onOptsMouseHandler }/>
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={ filteredOffers }/>
              </div>
            </section>
            <div className="cities__right-section">
              <Map mapClassName={'cities__map'}/>
            </div>
          </div>
        </div>
      </main>
    </GlobalWrapper>
  );
}
export default Main;
