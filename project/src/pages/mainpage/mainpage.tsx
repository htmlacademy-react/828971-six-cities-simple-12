import GlobalWrapper from '../../components/global-wrapper/global-wrapper';
import OffersList from '../../components/common/offer-stuff/offers-list/offers-list';
import MainNav from '../../components/mainpage/main-nav/main-nav';
import Map from '../../components/map/mainpage-map/map';
import {useAppDispatch, useAppSelector} from '../../hooks/use-global-state';
import {useEffect} from 'react';
import {changeCityAction, fillOffersAction} from '../../store/action';
import {State} from '../../types/state';

type City = {
  name: string;
  anchor: string;
  isActive: boolean;
};

const cities: City[] = [
  {
    name: 'Paris',
    anchor: '#paris',
    isActive: true,
  },
  {
    name: 'Cologne',
    anchor: '#cologne',
    isActive: false,
  },
  {
    name: 'Brussels',
    anchor: '#brussels',
    isActive: false,
  },
  {
    name: 'Amsterdam',
    anchor: '#amsterdam',
    isActive: false,
  },
  {
    name: 'Hamburg',
    anchor: '#hamburg',
    isActive: false,
  },
  {
    name: 'Dusseldorf',
    anchor: '#dusseldorf',
    isActive: false,
  },
];

function Main(): JSX.Element {
  const { city, offers }: State = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fillOffersAction());
  }, [city]);

  const onClickHandler = (chosenCity: string): void => {
    dispatch(changeCityAction(chosenCity));
    cities.forEach((item) => {
      (item.name === chosenCity) ? item.isActive = true : item.isActive = false;
    });
  };

  return (
    <GlobalWrapper>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <MainNav cities={cities} onClickHandler={onClickHandler} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{ offers.length } places to stay in {city}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  &nbsp;Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                {/*places__options--opened*/}
                <ul className="places__options places__options--custom">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OffersList />
              </div>
            </section>
            <div className="cities__right-section">
              <Map city={ offers[0].city.location }/>
            </div>
          </div>
        </div>
      </main>
    </GlobalWrapper>
  );
}
export default Main;
