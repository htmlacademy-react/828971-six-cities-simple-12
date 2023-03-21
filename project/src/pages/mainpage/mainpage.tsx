import GlobalWrapper from '../../components/globalWrapper/globalWrapper';
import {Offer} from '../../types/offer';
import OffersList from '../../components/common/offersList/offersList';
import MainNav from '../../components/mainpage/mainNav/mainNav';
import Map from '../../components/map/map';

type mainProps = {
  offerQuantity: number;
  offers: Offer[];
}

function Main({offerQuantity, offers} : mainProps): JSX.Element {
  return (
    <GlobalWrapper>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <MainNav/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offerQuantity} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={offers} />
              </div>
            </section>
            <div className="cities__right-section">
              <Map offers={offers} />
            </div>
          </div>
        </div>
      </main>
    </GlobalWrapper>
  );
}
export default Main;
