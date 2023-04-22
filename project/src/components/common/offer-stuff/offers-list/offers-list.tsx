import React from 'react';
import CurrentOffer from '../offer-card/offer-card';
import {Offer} from '../../../../types/offer';
import {useAppDispatch} from '../../../../hooks/use-global-state/use-global-state';
import {outputData} from '../../../../store/output-data/output-data.slice';

type OffersListProps = {
  offers: Offer[];
  mouseHandlers: boolean;
}

function OffersList({offers, mouseHandlers}: OffersListProps): JSX.Element {

  const dispatch = useAppDispatch();

  const mouseEnterHandler = (elem: Offer) => dispatch(outputData.actions.setActiveOfferAction(elem));
  const mouseLeaveHandler = () => dispatch(outputData.actions.setActiveOfferAction(null));

  return(
    <>
      { offers.map((offer: Offer): JSX.Element => (
        <CurrentOffer
          key={ offer.id }
          myProperty= { offer }
          onMouseEnter={ () => mouseHandlers && mouseEnterHandler(offer) }
          onMouseLeave={ () => mouseHandlers && mouseLeaveHandler() }
        />
      ))}
    </>
  );
}

export default OffersList;
