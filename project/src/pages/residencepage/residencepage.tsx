import GlobalWrapper from '../../components/global-wrapper/global-wrapper';
import {Offer} from '../../types/offer';
import React from 'react';
import FeedbackForm from '../../components/room-page/feedback-stuff/feedback-form/feedback-form';
import FeedbacksList from '../../components/room-page/feedback-stuff/feedback-list/feedback-list';
import {Feedback} from '../../types/feedback';
import RoomGallery from '../../components/room-page/room-gallery/room-gallery';
import RoomInfo from '../../components/room-page/room-info/room-info';
import HostBlock from '../../components/room-page/host-block/host-block';
import OffersList from '../../components/common/offer-stuff/offers-list/offers-list';
import { Map } from '../../components/map/map';
// import {useAppSelector} from '../../hooks/use-global-state';
import {offers} from '../../mocks/offers';


type ResidenceProps = {
  property: Offer;
  feedbacks: Feedback[];
}

function Residence({ property, feedbacks } : ResidenceProps): JSX.Element {
  return (
    <GlobalWrapper>
      <main className="page__main page__main--property">
        <section className="property">
          <RoomGallery pics={ property.images } />
          <div className="property__container container">
            <div className="property__wrapper">
              <RoomInfo property={ property }/>
              <HostBlock host={ property.host } description={ property.description}/>
              <section className="property__reviews reviews">
                <FeedbacksList feedbacks={ feedbacks }/>
                <FeedbackForm />
              </section>
            </div>
          </div>
          <Map offers={ offers } mapClassName={'property__map'}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList offers={offers}/>
            </div>
          </section>
        </div>
      </main>
    </GlobalWrapper>
  );
}
export default Residence;
