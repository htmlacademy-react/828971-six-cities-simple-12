import React, {useEffect} from 'react';
import FeedbackForm from '../../components/room-page/feedback-stuff/feedback-form/feedback-form';
import FeedbacksList from '../../components/room-page/feedback-stuff/feedback-list/feedback-list';
import RoomGallery from '../../components/room-page/room-gallery/room-gallery';
import RoomInfo from '../../components/room-page/room-info/room-info';
import HostBlock from '../../components/room-page/host-block/host-block';
import OffersList from '../../components/common/offer-stuff/offers-list/offers-list';
import { Map } from '../../components/common/map/map';
import GlobalWrapper from '../../components/globalWrapper/globalWrapper';
import {useParams} from 'react-router-dom';
import {getNearby, getProperty, getFeedback, getIsDataLoading} from '../../store/loading-data/loading-data.selectors';
import {useAppDispatch, useAppSelector} from '../../hooks/use-global-state';
import {fetchNearby, fetchProperty, fetchFeedback} from '../../store/api-actions';
import { useNavigate } from 'react-router-dom';
import {AppRoutes} from '../../routes';
import {getAuthStatus} from '../../store/user-process/user-process.selectors';
import {AuthorizationStatus, IsDataLoading} from '../../constants';
import {Offer} from '../../types/offer';
import {outputData} from '../../store/output-data/output-data.slice';
import {store} from '../../store';
import Loader from '../../components/common/loader/loader';

function Residence(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const property = useAppSelector(getProperty);
  const nearby = useAppSelector(getNearby);
  const comments = useAppSelector(getFeedback);
  const authorizationStatus = useAppSelector(getAuthStatus);
  const navigate = useNavigate();
  const isDataLoading = useAppSelector(getIsDataLoading);

  const getData = async(dataID: string) => {
    const selectedProperty = await dispatch(fetchProperty(dataID));
    await dispatch(fetchNearby(dataID));
    await dispatch(fetchFeedback(dataID));
    if (!selectedProperty.payload) {
      navigate(AppRoutes.NotFound);
    }
    store.dispatch(outputData.actions.setActiveOfferAction(selectedProperty.payload as Offer));
  };

  const getPointsForMap = (): Offer[] => nearby.concat([property as Offer]);
  const pointsForMap = getPointsForMap();

  useEffect( () => {
    if(id) {
      getData(id);
    }
  }, [id]);

  if (authorizationStatus === AuthorizationStatus.Unknown || (isDataLoading === IsDataLoading.SingleOffer)) {
    return (
      <Loader/>
    );
  }

  return (
    property
      ?
      <GlobalWrapper classes={'page'}>
        <main className="page__main page__main--property">
          <section className="property">
            <RoomGallery pics={property.images}/>
            <div className="property__container container">
              <div className="property__wrapper">
                <RoomInfo property={property}/>
                <HostBlock host={property.host} description={property.description}/>
                <section className="property__reviews reviews">
                  {comments && <FeedbacksList feedbacks={comments}/> }
                  { authorizationStatus === AuthorizationStatus.Auth && <FeedbackForm id={ id as string }/> }
                </section>
              </div>
            </div>
            { pointsForMap.length > 0 && <Map offers={pointsForMap} mapClassName={'property__map'}/> }
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                { nearby && <OffersList offers={nearby} mouseHandlers={false}/> }
              </div>
            </section>
          </div>
        </main>
      </GlobalWrapper>
      :
      <Loader/>
  );
}
export default Residence;
